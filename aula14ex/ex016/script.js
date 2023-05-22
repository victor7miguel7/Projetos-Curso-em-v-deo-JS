//metodo contar acionado apos apertar no botao
function contar(){
    //salvando em variaveis os elemntos do html por id
    let inicio = document.getElementById('inpi')
    let fim = document.getElementById('inpf')
    let passo = document.getElementById('inpp')
    let resp = document.getElementById('res')
    //condicao para ver se os inputs estao vazios, chegando se a sua quantidade de letras eh zero
    if (inicio.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0) {
        alert('ERRO!VERTIFIQUE SE OS DADOS ESTÃO COMPLETOS')
    }
    else{
       resp.innerHTML = 'Contando:'
       //transformando o valor das let em valor numerico
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        if(i < f){
            //contador iniciando em i, enquanto ele for menor ou igual f, acrescenta ele msm + p
            for(let c = i; c <= f; c += p){
            resp.innerHTML += ` ${c}\u{1F449}`
            }
        }
        else{
            //contador iniciando em i, enquanto ele for maior ou igual f, decrescenta p dele msm
            for(let c = i; c >= f; c-= p){
            resp.innerHTML += ` ${c}\u{1F449}`
            }   
        }
    resp.innerHTML += `\u{1F3C1}`    
    }   
}