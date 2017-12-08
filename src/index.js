require('./assets/scss/style.scss')

document.write('Ombushakalaka, he! ')

class Animal {
    animalType(animal) {
        document.write(`I love ${animal} `)
    }
}

const platypus = new Animal 

platypus.animalType('platypus')

const hippo = new Animal 

hippo.animalType('hippos')