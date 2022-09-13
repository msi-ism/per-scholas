// ** Write your code below each comment */

// * Get the element with an ID of 'first' */
const first = document.getElementById('first')
console.log(first)
/* Now delete that first element (in the html file), and re-run your code. What changed? */
// ** Output This is the misleading second element with the same id of first
/* Get the elements with a class of 'second' with getElementsByClassName: */
const secondEls = document.getElementsByClassName('second')
console.log(secondEls)
/* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */
 // Yes, just one less on the array
/* Get the span element using getElementsByTagname: */
const spanEl = document.getElementsByTagName('SPAN')
console.log(spanEl[0])
/* Add a span anywhere, and re-run the last piece of code. What's different? */
const newSpan = document.createElement('span')
// Adds a new span
console.log(newSpan)