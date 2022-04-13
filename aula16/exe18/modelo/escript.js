function adicionar() {
    let valor_input = document.getElementById('num')
    let sel_num = document.getElementById('sel_seq')
    let infos = document.getElementById("res")
    
    if (infos.childElementCount > 0) { // se o nº de 'chield' de infos for maior que 0
        for (let c=0; c<5; c++){
            document.getElementById(`p${c}`).innerText = null //todos eles tem texto null     
        }       
    }
    
    if (valor_input.value.length == 0) { // se não foram declarados valores
        window.alert('Por favor, digite um número.')
    } else {
        if (100 < valor_input.value || valor_input.value < 1){ // SE O NÚMERO NÃO ESTÁ ENTRE 1 E 100
            window.alert("ERRO: DIGITE UM NÚMERO MENOR QUE 100 E MAIOR QUE 1.")
        } else {

            if (!valido()){ // se o número já foi digitado
                window.alert('ERRO: DIGITE VALORES NOVOS!')
            } else {
                if (sel_num.options[0].value == 'Valores Adicionados...'){
                    sel_num.options[0].text = `Adicionado valor ${valor_input.value}`
                    valor_input.value = ''
                    valor_input.focus()
                } else {
                    let item = document.createElement("option")
                    item.text = `Adicionado valor ${valor_input.value}`
                    sel_num.appendChild(item)
                    valor_input.value = ''
                    valor_input.focus() // .focus() -> trazer o curso de volta para valor_input
                }
            }
        }
   }
}

function finalizar() {
    let infos = document.getElementById("res")
    let sel_num = document.getElementById('sel_seq')
     
    let soma = 0
    for (let c=0; c < sel_num.options.length; c++){
        let s = String(sel_num.options[c].text) // s recebe o texto da option de nº c
        let s2 = Number(s.split(" ")[s.split(" ").length-1]) // s2 recebe um Number do último valor de s.split(" ")
        if (c == 0) { // se c está no primeiro valor
            maior = s2 // maior e menor começam com o valor do primeiro número informado
            menor = s2
        } else {
            if (s2 > maior) { // se s2 maior que "maior", ele recebe s2
                maior = s2
            } else if (s2 < menor) { // se s2 menor que "menor", ele recebe s2
                menor = s2
            }
        }
        soma += s2 // soma recebe ele mesmo mais s2
    }
    
    
    let media = soma / (sel_num.options.length) // media recebe soma dividido pelo número de valores informados
    
    if (infos.childElementCount == 0) { // se o número de 'cheilds' de infos maior que 0 
        for (let c=0; c<5; c++){
            let anexo = document.createElement('p') // anexo recebe um novo elemento do tipo 'p'
            switch(c){ // dependendo do valor de c, que correspode ao número de um 'p', enexo recebe uma mensagem
                case 0:
                    anexo.innerText =`Ao todo foram informados ${sel_num.options.length} valores`
                    break
                case 1:
                    anexo.innerText = `O maior valor informado foi ${maior}`
                    break
                case 2:
                    anexo.innerText = `O menor valor informado foi ${menor}`
                    break
                case 3:
                    anexo.innerText = `A soma de todos os valores informados é ${soma}`
                    break
                case 4:
                    anexo.innerText = `A média de todos os valores foi ${media}`                
                    break
            }
            anexo.setAttribute('id',`p${c}`) // anexo tem o id mudado para `p${c}` (depende do valor de c)
            infos.appendChild(anexo) // infos recebe anexo como chield
        }
    } else { // senão, infos tem chields, então só é preciso altera-los
        for (let c=0; c<5; c++){
            let p = document.getElementById(`p${c}`) // p recebe um elemento 'p' de id= `p${c}`
            switch(c){ 
                case 0:
                    p.innerText =`Ao todo foram informados ${sel_num.options.length} valores`
                    break
                case 1:
                   p.innerText = `O maior valor informado foi ${maior}`
                    break
                case 2:
                    p.innerText = `O menor valor informado foi ${menor}`
                    break
                case 3:
                    p.innerText = `A soma de todos os valores informados é ${soma}`
                    break
                case 4:
                    p.innerText = `A média de todos os valores foi ${media}`                
                    break
            }
        }
    }
}

function valido() { // função usada em adicionar()
    let valor_input = document.getElementById('num')
    let sel_num = document.getElementById('sel_seq')

    let aceito = true
    for (let c=0; c < sel_num.options.length; c++){ // para c menor que o número de options de sel_num
        let s = String(sel_num.options[c].text) // s recebe o texto do options de número c
        
        if (s.split(" ")[s.split(" ").length-1] != valor_input.value){ // se o número na option for diferente do valor da atual entrada
            /* s.split(" ") -> retorna um array em de String separadas por espaços, as palavras
            * s.split(" ").length-1 -> retorna o INDEX do último valor do array s.split(" ")
            * s.split(" ")[s.split(" ").legth-1] -> retorna o último valor da String da options, o número
            */
            aceito = true
        } else { // senão o valor do número da atual entrada já foi digitado.
            aceito = false
            break // laço imterrompido, valor igual encontrado.
        }
    }

    return aceito
}