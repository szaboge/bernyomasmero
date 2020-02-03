const visualization = {
    timeoutID: 0,
    priceLimit: 5000000,
    imageWidth: 400,
    imageWrapper: undefined,
    container: undefined,
    run(num) {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => this.render(num), 10);
    },
    render(num) {
        this.catch();
        let percent = num / this.priceLimit;
        this.show();
        this.imageWrapper.style.width = (this.imageWidth * percent) + 'px';
    },
    catch() {
        this.imageWrapper = document.getElementById('image-wrapper');
        this.container = document.getElementById('visualization');
        console.log(this.imageWrapper.style.width);
    },
    show() {
        this.container.classList.add('visible');
    },
    hide() {
        this.container.classList.remove('visible');
    }
};

const Car = function () {


    this.show = () => {

    }
};