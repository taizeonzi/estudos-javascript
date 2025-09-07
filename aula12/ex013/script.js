function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f3e3c2' // colocar "#" antes do código da cor
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = '#f5aa80'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#785d8a'
    }
}

