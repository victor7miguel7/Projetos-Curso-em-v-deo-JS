let valores = []
function adicionar(){
    let num = document.getElementById('inpN')
    let  list = document.getElementById('selnum')
    let n = Number(num.value)

    if(num.value.length <= 0 || n > 100 || n < 0){
        alert('ERRO! Verifique se o preencimento foi feito corretamente!')
    }
    else if (valores.includes(n)) {
        alert('ERRO! O número já existe na lista.')
    }
    else{
        //cria-se uma let p/ receber a criacao de um element option, p/ ir preenchendo a select
        let item = document.createElement('option')
        //escreve o conteudo desejado na select
        item.text = `${n}`
        //adiciona na select
        list.appendChild(item)

        //preenche a ultima posicao do array sempre que for add uma option
        valores.push(n)
        
        let tamA = valores.length
        //transformará o tamanho do select de acordo com o tamanho do array
        list.setAttribute('size', tamA)

        txtf.innerHTML = `<p>Ao todo, temos ${tamA} números cadastrados</p>`  
        //deixa o array em ordem crescente para poder descobrir o valor na posiçao zero, que seria o menor
        valores.sort()
        txtf.innerHTML += `<p>O menor valor informado foi: ${valores[0]}</p>`
        //cria-se a let maior que comeca na pos 0 do array, e apos fazer um for que percorrerá todo o array, caso a posiçao analisada seja maior que a let maior, maior reberá o valor dessa posiçao
        let maior = valores[0]
        for (let pos in valores){
                if(valores[pos] > maior)
                maior = valores[pos]
        }
        txtf.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        //cria uma let soma e apos fazer um for dentro do array para percorrer os valores de todas as posicoes e soma a essa let
        let soma = 0
        for (let pos in valores){
        soma += valores[pos]
        }
        txtf.innerHTML += `<p>A soma dos valores é: ${soma}</p>`

        let media = 0
        media = soma / tamA
        txtf.innerHTML +=`<p>A média dos valores é: ${media}</p>`
    }   
}