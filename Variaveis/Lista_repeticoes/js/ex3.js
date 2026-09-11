const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let soma = 0
    let divisores = ""

    for (let i = 1; i < numero; i++) {

        if (numero % i === 0) {

            soma += i
            divisores += `${i}, `
        }
    }

    if (soma === numero) {
        resp.innerText = `Divisores: ${divisores}\nSoma: ${soma}\n${numero} é um número perfeito`
    } else {
        resp.innerText = `Divisores: ${divisores}\nSoma: ${soma}\n${numero} não é um número perfeito`
    }
})