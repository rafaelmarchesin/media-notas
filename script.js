let vetorNotas = []
let cont = 0

/* Habilitando o botão ao pressionar a tecla Enter */
let inputNota = document.getElementById("entradaNota")
inputNota.focus() //Dá foco ao input quando a página carrega

inputNota.addEventListener("keypress", function(evento){
    if(evento.keyCode === 13){
        evento.preventDefault()
        document.getElementById("btnAdicionar").click()//Ao apertar o enter, ele clica no botão
    }
})


function adicionar(){
    /* Apaga nota se a média já tiver sido calculada */
    /* Isso é feito, pois, quando se insere uma nova nota, a média muda*/
    let apagaNota = document.getElementById('media')
    apagaNota.innerText = `A média é: `

    /*
    /* Pega os valores dos elementos */    
    let valorNota = document.getElementById('entradaNota')

    /* Identifica se houve a inserção de vírgula no lugar de ponto */
    let convertString = String(valorNota.value) //Converte o typo do valor para String para fazer a substituição do ponto
    let temVirgula = convertString.indexOf(",") //Procura a vírgula na posição 1 da String
    
    if(temVirgula == 1){
        convertString = convertString.replace(",", ".")
    }
        
    /* Se o input estiver vazio, exibe msg de erro */
    if(valorNota.value == ""){
        alert('Por favor, insira uma nota.')
        valorNota.focus()
    } else {

        /* Verifica se a nota está entre 0 e 10 */
        let nota = Number(convertString)

        if(nota >= 0 && nota <= 10){
            /* Armazena as Notas no vertor vetorNotas */
            vetorNotas.push(nota)

            /* Exibe as Notas no Select */

            let selectNotas = document.getElementById('notasInseridas')
            let elemOption = document.createElement('option')
            
            selectNotas.appendChild(elemOption)

            elemOption.innerHTML = `A nota ${++cont} foi ${nota}`

            /* Apaga o value do input e retoma o focus nele */
            valorNota.value = ""
            valorNota.focus()

            
        } else {
            alert('A nota digitada é inválida, por favor, insira uma nota válida.')
            valorNota.value = ""
            valorNota.focus()

        }

    }

}

function calcMedia(){
        
    /* Calcula a média */
    let soma = 0

    for(let cont = 0; cont < vetorNotas.length; cont++){
        soma += Number(vetorNotas[cont])
    }
    let media = soma / (vetorNotas.length)

    

    /* Insere a média na tela */
    let imprimeNota = document.getElementById('media')
    imprimeNota.innerText = ""


    if(typeof vetorNotas[0] !== 'number'){
        imprimeNota.innerHTML = `A média é: `
    } else {
        imprimeNota.innerHTML = `A média é: ${media.toFixed(2)}`
    }
}

let abre = 0

function informacao(){
    let informacao = document.getElementById('pInformacao')

    if(abre == 0){
        informacao.innerText = "Este é um programa realizado como exercício durante aprendizado de JavaScript. Todo o programa foi desenvolvido por mim."
        informacao.style.height = "auto"
        informacao.style.paddingTop = "10px"
        informacao.style.paddingBottom = "10px"
        abre = 1
    } else {
        informacao.innerText = ""
        informacao.style.height = "0px"
        informacao.style.paddingTop = "0px"
        informacao.style.paddingBottom = "0px"
        abre = 0
    }
}