let button01 = document.querySelector('#pokemonBtn')
const imagem = document.querySelector('#pokemonGif')
let descricao = document.querySelector('#pokemonDescricao')
const nome = document.querySelector('#pokemonNome')
let nomeBotao = document.querySelector('button')
let id=1

button01.addEventListener('click', ()=>{
    if(id === 1){
        imagem.src = "assets/img/ivysaur.gif"
        nome.innerText = "Ivyssauro"
        descricao.innerText = "Ivyssauro é um Pokémon anfíbio quadrúpede que tem a pele azul-esverdeada com manchas mais escuras. O peso da planta impede que Ivyssauro corra rápido e fique em pé nas patas traseiras e força suas pernas a crescerem de forma resistente. Quando sua flor está pronta para florescer, ela exala um aroma distinto e forte e adocicado e começa a inchar."
        nomeBotao = "Evoluir nº3"
        id += 1
    } else if (id === 2) {
        imagem.src = "assets/img/venusaur.gif"
        nome.innerText = "Venusaur"
        descricao.innerText = "O Venussauro usa sua flor para captar os raios do sol para convertê-los em energia, o que faz com que a flor fique mais vibrante. A flor libera um perfume suave que atrai Pokémon e acalma as emoções."
        nomeBotao = "Voltar - Evolução nº1"
        id += 1
    } 
})