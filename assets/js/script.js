let button1 = document.querySelector('#btn')
const imagem = document.querySelector('#imagem')
let descricao = document.querySelector('#descricao')
const nome = document.querySelector('#nome')
let nomeBotao = document.querySelector('button')

button1.addEventListener('click', ()=>{
    if(id === 1){
        imagem.src = "./img/bulbasaur.gif"
        nome.innerText = "Bulbassauro"
        descricao.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        id += 1
    } else if (id === 2) {
        imagem.src = "./img/ivysaur.gif"
        nome.innerText = "Ivysaur"
        descricao.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        id += 1
    } else if (id === 3) {
        imagem.src = "./img/venusaur.gif"
        nome.innerText = "Venusaur"
        descricao.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        id = 1
    }
})