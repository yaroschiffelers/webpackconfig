// Just for testing 

/**
 * Imports our main scss (sass) file
 */
require('./assets/scss/style.scss')


/**
 * Example class
 */
class Animal {
    constructor(type, required) {
        this.type = type
        this.required = required
    }
    animalType(animal) {
        document.write(`I love ${animal} `)
    }
}