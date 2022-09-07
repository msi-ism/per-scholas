// const cohort27 = {
//     id: 'se-27-2022',
//     students: [],
//     addStudent: function (name) {
//         this.students.push(name)
//     }
// }


// cohort27.addStudent('Mike')
// console.log(cohort27)

// // WINDOW OBJECT IS TOP-LEVEL OBJECT


// const cohort13 = {
//     id: 'se-13-2022',
//     students: [],
//     addStudent: function (name) {
//         this.students.push(name)
//     }
// }

// cohort13.addStudent('Anna')
// console.log(cohort13)

// function myFunc(){
//     console.log(this)
// }

// myFunc()

// class Vehicle {
//     constructor(vin, make, color){
//         // Inside the class I want to create an attribute
//         this.vin = vin
//         this.make = make
//         this.color = color || 'blue'
//         this.running = false
//         // return in not needed because the new object is returned by default
//     }
//     start() {
//         this.running = true
//         console.log('running...')
//     }
//     stop(){
//         this.running = false
//         console.log('Vehicle stopped....')
//     }
//     toString(){
//         return `Vehicle ${this.vin} is a ${this.make} and is ${this.color}!`
//     }

// }



// const v1 = new Vehicle('DSFE298391HD', 'HONDA', 'magenta')
// const v2 = new Vehicle('JDNOWEO21232', 'CHEVY')
// // typeOf = object
// v1.start()
// v2.start()
// v1.stop()
// console.log(v1)
// console.log(v2)
// console.log(v1.toString())
// console.log(v2.toString())

class Character {
    constructor(name, age, eyes, hair, loveCats = false, loveDogs){
    
        this.legs = 2
        this.arms = 2
        this.eyes = eyes
        this.hair = hair
        this.name = name
        this.loveCats = loveCats
        this.loveDogs = loveDogs || false
    }
    greet(otherCharacter){
        console.log(`Hello ${otherCharacter}!`)
    }
    smite() {
        console.log('I smite thee you vile person')
    }
    setHair(hairColor){
        this.hair = hairColor
    }
}

const me = new Character('Micheal', 32, 'brown', 'Only on face', true)
const you = new Character('Dawn', 27, 'red', 'blonde', false, true)

me.setHair('Burnt Orange')

console.log(me)
console.log(you)

console.log(typeof me)
console.log(typeof you)

me.greet('Ralph')
you.greet('Arnold')
me.smite()

// Subclass

class Hobbit extends Character{
    steal(){
        console.log("Let's get away!")
    }
    greet(otherCharacter){
        console.log(`Hello World ${otherCharacter}`)
    }

}

const frodo = new Hobbit('Frodo', 17, 'blue', 'shaggy', true)

console.log(frodo)
frodo.greet('Cohort27')

const otherChar = new Character()