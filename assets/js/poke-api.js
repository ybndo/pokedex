
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    console.log(`Esse é o ${pokeDetail.types}`)
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);

    pokemon.baseHP = pokeDetail.stats[0].base_stat;
    pokemon.baseAttack = pokeDetail.stats[1].base_stat;
    pokemon.baseDefense = pokeDetail.stats[2].base_stat;
    pokemon.baseSpecialAttack = pokeDetail.stats[3].base_stat;
    pokemon.baseSpecialDefense = pokeDetail.stats[4].base_stat;
    pokemon.baseSpeed = pokeDetail.stats[5].base_stat;

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokeDetails) => convertPokeApiDetailToPokemon(pokeDetails))
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getPokemon = (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${Number(pokemonId)}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => convertPokeApiDetailToPokemon(jsonBody))

        // .then((pokemon) => pokemons.map(pokeApi.getPokemonDetail))
        // .then((detailRequests) => Promise.all(detailRequests))
        // .then((pokemonsDetails) => pokemonsDetails)
}
