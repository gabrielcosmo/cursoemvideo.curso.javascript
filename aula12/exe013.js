var agora = new Date()
var diaSem = agora.getDay()

/**
 * domingo = 0
 * segunda = 1
 * terça = 2
 * quarta = 3
 * quinta = 4
 * sexta = 5 
 * sabádo = 6
 */
// console.log(diaSem)
switch (diaSem) {
    case 0:     // caso seja dia 0 (domingo)
        console.log(`Olá hoje é Domingo.`)
        break  // sempre deve haver o break no fim do case
    
    case 1:
        console.log('Olá joje é Segunda-feira.')
            break
    
    case 2:
        console.log('Olá hoje é Terça-feira.')
        break
    
    case 3:
        console.log('Olá hoje é Quarta-feira.')
        break
    
    case 4:
        console.log('Olá hoje é Quinta-feira.')
        break
    
    case 5:
        console.log('Olá hoje é Sexta-feira.')
        break
    
    case 6:
        console.log('Olá hoje é Sabádo.')
        break
    
    default:
        console.log('[ERRO] Dia inválido.')
}