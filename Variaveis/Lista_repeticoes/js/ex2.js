const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    let chinchilas = Number(frm.inChinchilas.value)
    const anos = Number(frm.inAnos.value)

    let resultado = ""

    if (chinchilas < 2) {
        resp.innerText = "O número inicial de chinchilas deve ser maior ou igual a 2"
        return
    }

    for (let i = 1; i <= anos; i++) {

        resultado += `${i}º Ano: ${chinchilas} chinchilas\n`

        chinchilas = chinchilas * 3
    }

    resp.innerText = resultado
})