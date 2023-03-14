let pivo = true

if (pivo) {
    console.log("Olá pessoal")
}

else {
    console.log("tchau")
}

let nome = ""

if (nome) {
    console.log("Olá pessoal eu sou o " + nome)
}
else {
    console.log("tchau pessoal")
}

const funcao = entrada => {

    if (entrada === "Guilherme") {
        return console.log("Sua entrada foi: " + entrada)
    }

    if (entrada === "1") {
        return console.log("Sua entrada foi: " + entrada)
    }
    console.log("Nenhum nome confere")
}

funcao("Guilherme")
funcao(1)

let num = 2
let msg

num === 1 ? msg = "O número é 1" : msg = "O número não é 1"

console.log(msg)

switch (num) {
    case 1:
        msg = "um"
        break
    case 2:
        msg = "dois"
        break
    case 3:
        msg = "tres"
        break
    default:
        msg = "!num"
        break
}

console.log(msg)