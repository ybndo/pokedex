const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151;
const limit = 15;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" id="num${pokemon.number}" onclick="showPokemonDetails(${pokemon.number})">
            ${insertPokemonSmallLiHtml(pokemon)}
        </li>
    `
}

function insertPokemonSmallLiHtml(pokemon) {
    return `
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}"
             alt="${pokemon.name}">
    </div>
    `
}


function convertDetailedPokemonToLi(pokemon) {
    return `<!-- Header com Nome do Pokemon  -->
    <header>
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    </header>   <!--Fim do header
    -->
    <!-- Foto Pokemon  -->
    <img src="${pokemon.photo}" alt="${pokemon.name}">
    
    <!-- Início dos detalhes do pokemon  -->
    <div class="detail">
    
        <!-- Lado Esquerdo em telas Grandes -->
        <div class="detail-left">
    
    
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <ul class="infoUl">
                <li>
                    <span class="category ${pokemon.type}">Altura:</span> <span class="category-value ${pokemon.type}">${pokemon.height/10} m</span>
                </li>
                <li>
                    <span class="category ${pokemon.type}">Peso:</span> <span class="category-value ${pokemon.type}">${pokemon.weight/10} kg</span>
                </li>
                <li>
                    <span class="category ${pokemon.type}">Habilidades:</span> <span class="category-value"><span class="">${pokemon.abilities.map((ability) => `${ability}`).join(', ')}</span></span>
                </li>
                <div class="clear"></div>
            </ul>
    
        </div>  <!-- Fim Lado Esquerdo em telas Grandes -->
    
        <!-- Lado Direito em telas Grandes -->
        <div class="detail-right">
            <!-- Início dos Status do Pokemon -->
            <div class="progress-bars">
                <div>
                    <label for="hp1">HP</label>
                    <progress id="hp1" class="statusProgressBar" value="${pokemon.baseHP}" max="200">45</progress>
                    <label for="atk1">Attack</label>
                    <progress id="atk1" class="statusProgressBar" value="${pokemon.baseAttack}" max="200">49</progress>
                    <label for="df1">Defense</label>
                    <progress id="df1" class="statusProgressBar" value="${pokemon.baseDefense}" max="200">49</progress>
                </div>
                <div>
                    <label for="satk1">Special Attack</label>
                    <progress id="satk1" class="statusProgressBar" value="${pokemon.baseSpecialAttack}" max="200">65</progress>
                    <label for="sdf1">Special Defense</label>
                    <progress id="sdf1" class="statusProgressBar" value="${pokemon.baseSpecialDefense}" max="200">65</progress>
                    <label for="spd1">Speed</label>
                    <progress id="spd1" class="statusProgressBar" value="${pokemon.baseSpeed}" max="200">45</progress>
                </div>
            </div> <!-- Fim dos Status do Pokemon -->
        </div> <!-- Fim do Lado Direito em telas Grandes -->
    </div>                 <!-- Fim dos detalhes do pokemon  -->`
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

// const cssBackup

function showPokemonDetails(pokemonId) {
    const liPokemon = document.getElementById("num" + pokemonId)
    const liPokeClassAttributes = liPokemon.getAttribute("class").split(' ')
    var indexCasoAberto = liPokeClassAttributes.indexOf('openedPokemon')

    //Se encontrar a classe "openedPokemon" ele retira a classe (fecha)
    if ( indexCasoAberto != -1) { 
        liPokeClassAttributes.pop(indexCasoAberto)

        let pokemon = pokeApi.getPokemon(pokemonId)
            .then(insertPokemonSmallLiHtml)
            .then((stringPokemon) => {
                liPokemon.setAttribute("class", liPokeClassAttributes.join(' '))
                liPokemon.innerHTML = stringPokemon
            })
    //Se NÃO encontrar a classe "openedPokemon" ele insere a classe (abre)
    } else { 

        let pokemon = pokeApi.getPokemon(pokemonId).then((pokemon) => {
            let newHtml = convertDetailedPokemonToLi(pokemon)
            liPokemon.innerHTML = newHtml;
            liPokemon.setAttribute("class", liPokemon.getAttribute("class") + " openedPokemon")
        })
        
    }
}