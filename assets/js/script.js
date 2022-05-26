let button = document.querySelector('#pokemonBtn')
const imagem = document.querySelector('#pokemonGif')
const descricao = document.querySelector('#pokemonDescricao')
const nome = document.querySelector('#pokemonNome')
const estagio = document.querySelector('#pokemonEstagio')
const nomeBotao = document.querySelector('button')
let id = "segundaEvolucao"

button.addEventListener('click', ()=>{
    if(id === "primeiraEvolucao"){
        imagem.src = "assets/img/bulbasaur.gif"
        nome.innerText = "Bulbassauro"
        descricao.innerText = "Tendo sido domesticado desde o nascimento, Bulbassauro é considerado um Pokémon raro e bem comportado. É conhecido por ser extremamente leal, mesmo após o abandono a longo prazo."
        estagio.innerText = "(Estágio Básico)"
        button.innerText = "nº001"
        id = "segundaEvolucao"
    } else if (id === "segundaEvolucao") {
        imagem.src = "assets/img/ivysaur.gif"
        nome.innerText = "Ivyssauro"
        descricao.innerText = "Evolui para o Ivyssauro a partir do nivel 16. Quando sua flor está pronta para florescer, ela exala um aroma distinto e forte e adocicado e começa a inchar."
        estagio.innerText = "(Estágio Intermediário)"
        button.innerText = "nº002"
        id = "terceiraEvolucao"
    } else if (id === "terceiraEvolucao") {
        imagem.src = "assets/img/venusaur.gif"
        nome.innerText = "Venussauro"
        descricao.innerText = "O Venussauro usa sua flor para captar os raios do sol para convertê-los em energia, o que faz com que a flor fique mais vibrante. A flor libera um perfume suave que atrai Pokémon e acalma as emoções."
        estagio.innerText = "(Estágio Final)"
        button.innerText = "nº003"
        id = "megaEvolucao_01"
    } else if (id == "megaEvolucao_01") {
        imagem.src = "assets/img/megavenusaur.png"
        nome.innerText = "Mega Venussauro"
        descricao.innerText = "O Venussauro Megaevolui para Mega Venussauro quando  está segurando uma Venusaurite e o(a) Treinador(a) ativa sua Pedra Chave."
        estagio.innerText = "(Estágio Final c/ Venusaurite)"
        button.innerText = "nº003.2"
        id = "megaEvolucao_02"
    } else if (id == "megaEvolucao_02") {
        imagem.src = "assets/img/venusaurgigamax.png"
        nome.innerText = "Venussauro Gigamax"
        descricao.innerText = "O Venussauro Megaevolui para Venussauro Gigamax quando o(a) Treinador(a) ativa seu Bracelete Dinamax."
        estagio.innerText = "(Estágio Final c/ Dinamax)"
        button.innerText = "Voltar para nº1"
        id = "primeiraEvolucao"
    }
})

