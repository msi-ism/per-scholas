console.dir(document)

const introP = document.getElementById('intro')
console.log(introP)


// Returns HTML Collection
const subTitle = document.getElementsByClassName('sub-title')
console.log(subTitle)


// Returns Node list
const subTitleCss = document.querySelectorAll('.sub-title')
console.log(subTitleCss)
subTitleCss.forEach((el) => console.log(el))



// Create a new array from nodelist
const arrOfSubTitles = Array.from(subTitleCss)
console.log(arrOfSubTitles)

// ** CRUD

// Create

const a = document.createElement('a')
a.setAttribute("href", "http://www.google.com")
console.log(a)

// Read
const h1 = document.querySelector('h1')
console.log(h1.textContent)

// Update

const footer = document.querySelector('footer')
footer.style.backgroundColor = 'magenta'
footer.style.padding = '15px'
console.log(footer)

// Delete

const allP = document.querySelectorAll('p')
console.log(allP)
// console.log(allP[2].style.display = 'none')

const parentEl = document.querySelector('footer')
console.log(parentEl)

const child = parentEl.firstElementChild.nextElementSibling // parentEl.lastElementChild
parentEl.removeChild(child)