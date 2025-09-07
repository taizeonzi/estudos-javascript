//arrays

let num = [5, 8, 2, 9, 3]
num.push(1) //adicionar o valor 1
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //colocar em ordem crescente
console.log(`O array tem ${num.length} elementos`)
console.log(`Os elementos do array agora são: ${num}.`)

let num2 = [1, 2, 5, 6]
let pos = num2.indexOf(8)
if (pos == -1 ) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

