
const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {

        let numRandom = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[numRandom];
    }
    
    getRandomMilitary() {

        const numRandom = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[numRandom];
    }
    
    getAll() {

        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    // la seccion se creara al instanciar un objeto con 'new'
    constructor() {
        this.gallery = this.createGallery(); 
    }

    createGallery() {
        let section = document.createElement("section");
        document.body.appendChild(section);
        return section; 
    }

    createImageTag(imageUrl) {
        let picture = document.createElement("picture");
        let img = document.createElement("img");
        img.src = imageUrl;
        picture.appendChild(img);
        return picture;
    }

    paintSingleImage(imageUrl) {
        const imageTag = this.createImageTag(imageUrl);
        this.gallery.appendChild(imageTag);
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(imageUrl => {
            this.paintSingleImage(imageUrl);
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();