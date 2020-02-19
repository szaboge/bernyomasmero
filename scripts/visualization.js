const visualization = {
    timeoutID: 0,
    priceLimit: 5000000,
    imageWrapper: undefined,
    container: undefined,
    numberFormat: new Intl.NumberFormat(),
    colors: ['red', 'blue', 'yellow'],
    cars: [],
    run(num) {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => this.render(num), 10);
    },
    render(num) {
        this.catch();
        this.clean();
        let percent = num / this.priceLimit;
        let count = Math.ceil(percent);

        for (let i = 0; i < count; i++) {
            this.addCar(percent > 1 ? 1 : percent);
            percent -= 1;
        }
        // this.scroll();
    },
    addCar(percent) {
        const car = new Car(this.colors[this.random(0, this.colors.length - 1)]);
        this.container.appendChild(car.getElement());
        this.cars.push(car);
        setTimeout(() => car.setWidth(percent), 1);
    },
    catch() {
        this.container = document.getElementById('visualization');
    },
    clean() {
        this.cars = [];
        this.container.innerHTML = '';
    },
    scroll() {
        if (!this.cars.length) return;
        const top = this.cars[this.cars.length - 1].getElement().getBoundingClientRect().top;
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });
    },
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
};

const Car = function (color) {
    this.width = 320;
    this.height = 134;
    this.car = {};
    this.color = color;

    this.constructor = () => this.create();

    this.create = () => {
        const src = `assets/car_${this.color}.svg`;
        const container = factory.div(['content-container'], {width: this.width, height: this.height});
        const wrapper1 = factory.div(['image-wrapper']);
        const wrapper2 = factory.div(['image-wrapper'], {width: 0});
        const img1 = factory.img(['car', 'car-greyscale'], src, {width: this.width});
        const img2 = factory.img(['car', 'car-colorful'], src, {width: this.width});
        const price1 = factory.div(['text', this.color, 'text-colorful'], {width: this.width, height: this.height});
        const price2 = factory.div(['text', 'text-greyscale'], {width: this.width, height: this.height});
        wrapper1.appendChild(img1);
        wrapper1.appendChild(price1);
        wrapper2.appendChild(img2);
        wrapper2.appendChild(price2);
        container.appendChild(wrapper1);
        container.appendChild(wrapper2);

        this.car = {container, wrapper1, wrapper2, img1, img2, price1, price2};
    };

    this.setWidth = (percent) => {
        this.car.wrapper2.style.width = (this.width * percent) + 'px';
        this.car.container.style.opacity = '1';
        const price = percent * visualization.priceLimit;
        const text = visualization.numberFormat.format(price) + " Ft";
        this.car.price1.innerText = text;
        this.car.price2.innerText = text;
    };
    this.getElement = () => this.car.container;

    this.constructor();
};

const factory = {
    img(styles, src, options = {}) {
        const img = this.element('img', styles, options);
        img.src = src;
        return img;
    },
    div(styles, options = {}) {
        return this.element('div', styles, options);
    },
    element(type, styles, options) {
        const element = document.createElement(type);
        styles.forEach((style) => element.classList.add(style));
        Object.keys(options).forEach((key) => element.style[key] = options[key]);
        return element;
    }
};