// instanceamento do objeto 'amigo';
let amigo = {nome: "José",
sexo: "M",
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)


// classe Amigo 
class Amigo {
    nome = '<desconhecido>'
    sexo = 'M'
    peso = 0.0

    constructor(nome, sexo, peso ) {
        this.nome = nome
        this.sexo = sexo
        this.peso = peso
    }

    oi() {
        console.log('Oi amigo.')
    }
}
let marcos = new Amigo('Marcos','M',78.6)
console.log(marcos.nome, marcos.sexo, marcos.peso)
marcos.oi()