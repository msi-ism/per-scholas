
// Get the element with an ID of 'first' using querySelector
const first = document.querySelector('#first')
console.log(first)
// Get the elements with a class of 'second' with querySelector
const second = document.querySelector('.second')
console.log(second)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const secondS = document.querySelectorAll('.second')
// Returns a node list
console.log(secondS)
secondS.forEach( el => el.style.backgroundColor = 'purple')
// Get the span element using querySelector
const spanEl = document.querySelector('span')
console.log(spanEl)
// Get multiple span elements using querySelectorAll
const allSpan = document.querySelectorAll('span')
console.log(allSpan)
// Select only "a" tags *directly inside* of a div (no grandchildren).
const aInDiv = document.querySelector('div a')
console.log(aInDiv)
// Select all elements that contain a "data-target" attribute
const allData = document.querySelectorAll("[data-target]")
console.log(allData)
// Select all elements where the data-target attribute equals "#false"
const allFalseData = document.querySelectorAll("[data-target='#false']")
console.log(allFalseData[0].textContent)
