const formButton = document.querySelector('#formIn input[type="button"]')

formButton.addEventListener('click', function () {

const km = document.querySelector('#formIn input[name="nKm"]')

const scontoStringa = document.querySelector('#formIn select[name="sconto"]')

console.log(scontoStringa.value)

let sconto
let prezzoKm = parseFloat (0.21)

if (scontoStringa.value == 'u18') {  sconto = parseFloat (0.2) }
if (scontoStringa.value == 'o65') { sconto = parseFloat (0.4) }
if (scontoStringa.value == 'ns') { sconto = parseFloat (1) }

let prezzo = (1 - sconto) * parseFloat (km.value) * prezzoKm
console.log(prezzo)

});