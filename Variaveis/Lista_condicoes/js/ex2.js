const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

    const limiteLeve = permitida * 1.20

    if (condutor <= permitida) {

        resp.innerText = "Sem Multa"

    } else if (condutor <= limiteLeve) {

        resp.innerText = "Multa Leve"

    } else {

        resp.innerText = "Multa Grave"
    }

    e.preventDefault()
})