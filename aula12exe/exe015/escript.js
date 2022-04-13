function verificar(){
    var data = new Date(); // objeto data do tipo Date();
    var ano = data.getFullYear(); // ano recebe o ano atual;
    var fano = document.getElementById('txtano'); // fano recebe o valor da tag de id 'txtano';
    var res = document.querySelector('div#res'); // res recebe a div de id "res";

    if (fano.value.length == 0 || fano.value > ano){ //se o tamanho do valor de fano igual a 0 ou maior que o ano atual, ocorre erro;
        window.alert('[ERRO]  VERIFIQUE OS DADOS NOVAMENTE!') // o ano inserido não pode ser 0 ou maior que atual;
    }  else{
        var fsex = document.getElementsByName('radsex'); // fsex recebe o elemento de nome "radsex";
        var idade = ano  - Number(fano.value); // idade recebe a idade em relação ao ano atual;
        var genero = ''; // variavel genero;
        var img = document.createElement('img'); // criando uma tag <img>;
        img.setAttribute('id', 'foto') // alterando o valor do atributo 'id' para 'foto';
        
        if (fsex[0].checked){ // se fsex[0] estive checado, marcado;
            genero = 'Homem';
            if (idade >= 0 && idade < 10){  
                //criança
                img.setAttribute('src', 'imagens_pessoas/foto-bebe-menino.jpg'); //alterando o arquivo para 'foto-bebe-menino.jpg'
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens_pessoas/foto-homem-jovem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens_pessoas/foto-homem-adulto.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'imagens_pessoas/foto-homem-idoso.jpg');
            }
        }else if (fsex[1].checked){ // se fsex[1] estiver checado, marcado;
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens_pessoas/foto-bebe-menina.jpg');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens_pessoas/foto-mulher-jovem.jpg');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens_pessoas/foto-mulher-adulta.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'imagens_pessoas/foto-mulher-idosa.jpg');
            }
        }
        res.style.textAlign = 'center'; // o valor em res passa a ficar centralizado;
        if (fsex[0].checked){ // se homem;
            res.innerHTML = `Detectamos um ${genero} com ${idade} ano(s).<br><br>`;
        } else { // se mulher;
            res.innerHTML = `Detectamos uma ${genero} com ${idade} ano(s).<br><br>`;
        }
        document.body.style.background = 'orange'; // fundo recebe a cor laranja;
        res.appendChild(img); // acresetado o elemento img a tag "res"
    }
}