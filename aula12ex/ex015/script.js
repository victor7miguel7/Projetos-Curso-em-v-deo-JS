function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO! VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto_bebe_h.png')
                res.innerHTML = `Detectamos ${genero} criança com ${idade} anos`
            }
            else if(idade > 10 && idade <= 23){
                //jovem
                img.setAttribute('src', 'foto_jovem_h.png')
                res.innerHTML = `Detectamos ${genero} jovem com ${idade} anos`
            }
            else if(idade > 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_h.png')
                res.innerHTML = `Detectamos ${genero} adulto com ${idade} anos`
            }
            else{
                //idoso
                img.setAttribute('src', 'foto_idoso_h.png')
                res.innerHTML = `Detectamos ${genero} idoso com ${idade} anos`
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto_bebe_m.png')
                res.innerHTML = `Detectamos ${genero} criança com ${idade} anos`
            }
            else if(idade > 10 && idade <= 23){
                //jovem
                img.setAttribute('src', 'foto_jovem_m.png')
                res.innerHTML = `Detectamos ${genero} jovem com ${idade} anos`
            }
            else if(idade > 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.png')
                res.innerHTML = `Detectamos ${genero} adulta com ${idade} anos`
            }
            else{
                //idoso
                img.setAttribute('src', 'foto_idosa_m.png')
                res.innerHTML = `Detectamos ${genero} idosa com ${idade} anos`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
  
}