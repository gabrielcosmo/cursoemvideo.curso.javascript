let num = [1,2,3,4,5,6,7]

/*for (let c = 0; c < num.length; c++) {
    console.log(`Na posição ${c} temos o valor ${num[c]}`)
}*/

for (let c in num) {
    console.log(`Na posição ${c} temos o valor ${num[c]}`)
}
console.log('')
console.log(`O valor 3 está na posição ${num.indexOf(3)}`)
