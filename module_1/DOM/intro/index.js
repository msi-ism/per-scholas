// * Grab element from the DOM

const h1 = document.getElementById('title')
// * Apply Styles to the element
h1.style.backgroundColor = 'green'
h1.style.padding = '20px'
h1.style.color = "black"
h1.style.fontSize = '64px'


// console.log(h1)


const h2 = document.querySelector('h2')

// console.log(h2)

const allH2 = document.querySelectorAll('h2')
// console.log(allH2)

const pEl = document.querySelector('.cool')
pEl.textContent = 'Comments for: ';
pEl.style.color = 'orange';
pEl.style.fontSize = '22px';
console.log(pEl)

// *** Set Attribute
const a = document.querySelector('a')
a.setAttribute('href', 'href="http://www.google.com')
console.log(a.hasAttribute('href'))



// *** Get Attribute
const img = document.querySelector('img')
console.log(img.getAttribute('src'))
img.setAttribute('width', '300px')


const superCoolPEl = document.querySelector('#super-cool')
superCoolPEl.innerHTML = 'Comments for <strong>Today</strong>'
// console.log(pEl)



// *** ClassList
const bioP = document.querySelector('#bio')
console.log(bioP)
bioP.classList.add('bioStyles', 'pad')
// *** Toggles Class Off
bioP.classList.toggle('bioStyles')
// *** Toggles Class Back on
bioP.classList.toggle('bioStyles')
bioP.classList.remove('pad')
bioP.classList.replace('bioStyles', 'bioStyles1')


// Loop over nodelist

const liArr = document.querySelectorAll('#comment')
console.log(liArr)
for (let li of liArr){
    li.style.fontSize = '30px'
    console.log(li.textContent)
}



// function addStyles(element) {
//     element.style.backgroundColor = 'red';
//     element.style.padding = "20px"
//     element.style.color = "magenta"
//     element.style.fontSize = "64px";
// }

// addStyles(h1)