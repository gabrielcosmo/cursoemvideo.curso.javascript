function carregar(){

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()  // objeto data do tipo Date
    var horas = data.getHours()

    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        window.document.body.style.background = "#e2cd9f" 
    } else if (horas >= 12 && horas < 18){
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = "#b9846f"
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = "#515154"
    }
}