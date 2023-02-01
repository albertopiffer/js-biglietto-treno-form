const formButton = document.querySelector('#formIn input[type="button"]')

formButton.addEventListener('click', function () {

    const km = document.querySelector('#formIn input[name="nKm"]')
    const nome = document.querySelector('#formIn input[name="nomCog"]')

    const scontoStringa = document.querySelector('#formIn select[name="sconto"]')

    console.log(scontoStringa.value)

    let sconto
    let prezzoKm = parseFloat (0.21)

    if (scontoStringa.value == 'u18') {  sconto = parseFloat (0.2) }
    if (scontoStringa.value == 'o65') { sconto = parseFloat (0.4) }
    if (scontoStringa.value == 'ns') { sconto = parseFloat (1) }

    let prezzo = parseFloat (km.value) * prezzoKm
    let prezzosc = prezzo * (1 - sconto)
    console.log(prezzo)


    document.getElementById("scontrino").style.display = "block"

    const jsKm = document.getElementById('sKm')
    jsKm.innerHTML = km.value

    const jsNome = document.getElementById('sNome')
    jsNome.innerHTML = nome.value

    const jsPrezzons = document.getElementById('sPrezzons')
    jsPrezzons.innerHTML = prezzo.toFixed(2)

    const jsSconto = document.getElementById('sSconto')
    jsSconto.innerHTML = sconto * 100

    const jsPrezzo = document.getElementById('sPrezzo')
    jsPrezzo.innerHTML = prezzosc.toFixed(2)

});
