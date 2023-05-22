function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = "rgba(223, 148, 9, 0.87)"
    }
    else if (hora >=12 && hora <=18){
        img.src = 'fototarde.jpg'
        document.body.style.background = "orangered"
    }
    else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = "rgb(6, 6, 32)"
    }
}