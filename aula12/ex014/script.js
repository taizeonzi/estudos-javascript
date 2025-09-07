function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // "FullYear" para o ano atual com QUATRO DÍGITOS
    var fano = document.getElementById('txtano') // vem do "id" de "<input type="number" name="txtano" id="txtano" min="0">", do HTML // 'fano' =formulário
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //verificar se o comprimento de valor na caixa é == 0, ou seja, a pessoa não digitou o ano. Ou se o ano é acima do ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}` código para testar se está funcionando
        var gênero = ''
        //adicionando imagem com js:
        var img = document.createElement('img') //cria uma tag 'img'
        img.setAttribute('id', 'foto')//como se fosse no HTML: <img id="foto">

        if (fsex[0].checked) { //se o que estiver marcado (checked) for o fsex [0], é masculino
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //centralizando o texto com js!
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//"appendChild" é adicionar um elemento (filho)
    }
}