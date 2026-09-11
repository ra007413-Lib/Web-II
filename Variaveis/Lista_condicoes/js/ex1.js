const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
     const numero = Number(frm.inNumero.value)

    if (numero % 2 == 0) {
        resp.innerText = `O número ${numero} é PAR`
    } else {
        resp.innerText = `O número ${numero} é ÍMPAR`
    }

    e.preventDefault()
})