"Assignment 1: Array Operation"
// 1. Create an empty array called "fruits".

fruits = []
console.log(fruits)
// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

fruits.push("apple", "banana", "orange")
console.log(fruits)
// 3. Remove the first fruit from the array.

fruits.shift()
console.log(fruits)
// 4. Add "grape" to the end of the array.

fruits.push("grape")
console.log(fruits)
// 5. Update the second fruit in the array to "pear".

fruits[0] = "pear"
console.log(fruits)

"Assignment 2: Object Operations"

// 1. Create an empty object called "person".

person = {}

console.log(person)

// "'2. Add the following properties to the "person" object:
//- name: "John"
//- age: 30
//- city: "New York"

person.name = "john"
person.age = 30
person.city = "New York"

console.log(person)

// 3. Remove the "age" property from the "person" object.

delete person.age 
console.log(person)

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.

person.job = "Engineer"
console.log(person)

// 5. Update the "city" property of the "person" object to "San Francisco"

person.city = "San Francisco"
console.log(person)


"Assignment 3: Array of Objects Operation"

// 1. Create an empty array called "cars".

cars = []
console.log(cars)

// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2018

cars.make = "toyota"
cars.model = "Camry"
cars.year = 2018

console.log(cars)

// 3. Remove the first car object from the "cars" array.

delete cars.make
console.log(cars)

// 4. Add a new car object to the "cars" array with the following properties:
// - make: "Honda"
// - model: "Civic"
// - year: 2020

let car = { 
    make: "honda",
    model: "Civic",
    year: 2019 
    }

cars.push(car)

console.log(cars)

// 5. Update the "model" property of the second car object in the array to "Accord".

car.model = "Accord"
console.log(cars)
