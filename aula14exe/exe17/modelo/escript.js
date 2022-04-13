function tabuada() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");

    if (num.value.length == 0){
        window.alert("Por favor, digite um número.");
        
    } else {    
        let n = Number(num.value); // conversão;
        tab.innerHTML = ''; // limpando a antiga tabuada
        c = 1
        while (c <= 10){
            let item = document.createElement("option"); // criando novo elemento
            item.text = `${n} x ${c} = ${n * c}` // texto recebe...
            tab.appendChild(item) // adicionando um novo elemento filho a tab
            c++;
        }
    }

}