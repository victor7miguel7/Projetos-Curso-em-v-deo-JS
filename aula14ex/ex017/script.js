function gerar(){
    var num = document.getElementById('inpN')   
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
    alert('ERRO!PREENCHA ADEQUADAMENTE!')
    }
    else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1;c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
        }
        
    }

}