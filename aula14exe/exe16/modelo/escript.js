function contar(){
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Digite todos os dados necessários.")
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando: <br/>';
        // IMPORTANTE -> conversão de String para tipo Number;
        let i = Number(inicio.value); 
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if (passo <= 0) { // se passo menor ou igual a 0, passo igual a 1;
            window.alert('Passo inválido. Considerando passo 1.');
            p = 1;
        }
        
        // contagem crescente;
        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${String.fromCodePoint(128073)} ${c} `; // emoji de "Dedo Apontando".
            }
            res.innerHTML += ` ${String.fromCodePoint(127937)}`; // adicionando emoji de "Bandeira de Chegada"    
        } 
        // contagem decrescente;
        else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${String.fromCodePoint(128073)} ${c} `; // emoji de "Dedo Apontando".
            }
            res.innerHTML += ` ${String.fromCodePoint(127937)}`; // adicionando emoji de "Bandeira de Chegada";
        
        }

        }
    /*'👉'.codePointAt(0) // encontrando o codepoint ineiro
    String.fromCodePoint(128073) // convertendo para String
    '🏁'.codePointAt(0)) // encontrando o codepoint inteiro
    String.fromCodePoint(127937) // convertendo para String*/

}