/* data */

const data = {
    model: 'Air Jordan 1 High',
    price: 170,
    caption: 'Available 5/15 at 9:00 AM More than 35 years after its debut, the Air Jordan 1 still stands as a timeless and versatile design built to match any aesthetic. Putting a subtle twist on a classic color scheme, this edition employs a genuine black leather upper with nubuck overlays in Light Smoke Grey atop a white midsole and black rubber outsole.',
    code: 'SKU: 555088-035'

}

const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    window.location='https://www.freecodecamp.com/email-submit'
})


const dataElement = document.querySelector('#data')

Object.entries(data).map((e,i) => dataElement.children[i].innerHTML = e[1]).join('')

