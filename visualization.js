const visualization = {
    timeoutID: 0,
    priceLimit: 5000000,
    imgColorized: undefined,
    imgGrayscale: document.getElementById('car-grayscale'),
    run: (num) => {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => visualization.render(num), 10);
    },
    render: (num) => {
        this.catchImages();
        let percent = num / this.priceLimit;
        this.imgGrayscale.style.width = 50 + 'px';
    },
    catchImages: function() {
        if (!this.imgColorized) this.imgColorized = document.getElementById('car-colorful');
        if (!this.imgGrayscale) this.imgGrayscale = document.getElementById('car-grayscale');
    },
};