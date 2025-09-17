class Animal {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.element = this.createElement();
        document.body.appendChild(this.element);
    }

    createElement() {
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        img.style.position = 'absolute';
        img.style.transition = 'transform 0.5s';
        return img;
    }

    animate() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
}

const dog = new Animal('Dog', 'path/to/dog.png');
const cat = new Animal('Cat', 'path/to/cat.png');

document.addEventListener('click', () => {
    dog.animate();
    cat.animate();
});
