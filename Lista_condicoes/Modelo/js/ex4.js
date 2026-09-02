const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const lado1 = Number(frm.inLado1.value)
    const lado2 = Number(frm.inLado2.value)
    const lado3 = Number(frm.inLado3.value)
    if (lado1 >= lado2 + lado3 ||
        lado2 >= lado1 + lado3 ||
        lado3 >= lado1 + lado2) {

        resp.innerText = "Lados não podem formar um triângulo"

    } else if (lado1 == lado2 && lado2 == lado3) {

        resp.innerText = "Lados podem formar um triângulo\nTipo: Equilátero"

    } else if (lado1 == lado2 ||
               lado1 == lado3 ||
               lado2 == lado3) {

        resp.innerText = "Lados podem formar um triângulo\nTipo: Isósceles"

    } else {

        resp.innerText = "Lados podem formar um triângulo\nTipo: Escaleno"

    }

    e.preventDefault()
})
