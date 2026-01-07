"use strict"; //treat all js code as newer versions

//Data-Types :  number, bigint, string, boolean, null (standalone value), undefined, symbol (used to provide uniqueness), object

// console.log("hello world")

const num = new Number(100)
const num_ = 400;

// console.log(num)
// console.log(num_)

// console.log(num.toString())

const date = new Date()

// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.toJSON())

// let custom_date = new Date(2023, 0, 23)
// let custom_date = new Date(2023, 0, 23, 5, 3, 2)
// let custom_date = new Date('2025-01-06') // YYYY-MM-DD
let custom_date = new Date('2025-12-03') // YYYY-DD-MM

// console.log(custom_date.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)