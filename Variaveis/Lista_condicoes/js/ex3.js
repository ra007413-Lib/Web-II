const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)

    let tempo
    let troco

    if (valor < 1) {

        resp.innerText = "Valor Insuficiente"

    } else if (valor < 1.75) {

        tempo = 30
        troco = valor - 1

        resp.innerText = `Tempo: ${tempo} minutos 
        Troco: R$ ${troco.toFixed(2)}`

    } else if (valor < 3) {

        tempo = 60
        troco = valor - 1.75

        resp.innerText = `Tempo: ${tempo} minutos 
        Troco: R$ ${troco.toFixed(2)}`

    } else {

        tempo = 120
        troco = valor - 3

        resp.innerText = `Tempo: ${tempo} minutos 
        Troco: R$ ${troco.toFixed(2)}`
    }

    e.preventDefault()
})