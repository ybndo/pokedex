# 👾 Pokedex

A Pokedex made with PokeApi


HTML COM INFO:
==========================================================================

<li class="pokemon grass openedPokemon" id="num1" onclick="showPokemonDetails(1)">
<!-- Header com Nome do Pokemon  -->
<header>
    <span class="number">#1</span>
    <span class="name">bulbasaur</span>
</header>   <!--Fim do header
-->
<!-- Foto Pokemon  -->
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur">

<!-- Início dos detalhes do pokemon  -->
<div class="detail">

    <!-- Lado Esquerdo em telas Grandes -->
    <div class="detail-left">


        <ol class="types">
            <li class="type grass">grass</li><li class="type poison">poison</li>
        </ol>
        <ul class="infoUl">
            <li>
                <span class="category">Altura:</span> <span class="category-value">0.7 m</span>
            </li>
            <li>
                <span class="category">Peso:</span> <span class="category-value">6.9 kg</span>
            </li>
            <li>
                <span class="category">Habilidades:</span> <span class="category-value">Overgrow | Chlorophyll</span>
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
                <progress id="hp1" class="statusProgressBar" value="45" max="200">45</progress>
                <label for="atk1">Attack</label>
                <progress id="atk1" class="statusProgressBar" value="49" max="200">49</progress>
                <label for="df1">Defense</label>
                <progress id="df1" class="statusProgressBar" value="49" max="200">49</progress>
            </div>
            <div>
                <label for="satk1">Special Attack</label>
                <progress id="satk1" class="statusProgressBar" value="65" max="200">65</progress>
                <label for="sdf1">Special Defense</label>
                <progress id="sdf1" class="statusProgressBar" value="65" max="200">65</progress>
                <label for="spd1">Speed</label>
                <progress id="spd1" class="statusProgressBar" value="45" max="200">45</progress>
            </div>
        </div> <!-- Fim dos Status do Pokemon -->
    </div> <!-- Fim do Lado Direito em telas Grandes -->

    
</div>                 <!-- Fim dos detalhes do pokemon  -->
</li>



==========================================================================

SEM DETALHES

<li class="pokemon grass" id="num1" onclick="showPokemonDetails(1)">
            <span class="number">#1</span>
            <span class="name">bulbasaur</span>

            <div class="detail">
                <ol class="types">
                    <li class="type grass">grass</li><li class="type poison">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur">
            </div>
        </li>