let num = [3,1,2]
// num[3] = 4 adicionar novo valor
num.push(4) // adicionar novo valor
num.sort() // colocando em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log('')
for (let c = 0; c < num.length; c++) {
    console.log(`Na posição ${c} temos o valor ${num[c]}`)
}
