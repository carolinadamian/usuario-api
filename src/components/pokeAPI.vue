<script setup>
import {useRoute, useRouter} from 'vue-router'


const pokemon =[]

// Lectura de varios pokémon a la vez
let URL = "https://pokeapi.co/api/v2/pokemon/";
for(let i =1; i <= 150; i++){
fetch(URL + i)
    .then((response) => response.json())
    .then(data => traerPokemon(data))
    console.log(data)
    alert("La información se muestra en la consola")
    }


function consumir() {
    var endPoint = document.getElementById('endPoint').value;

    fetch(endPoint)
        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {
            var peso = datos.weight;
            var altura = datos.height;
            var nombre = datos.name;
            var experiencia = datos.base_experience;

            peso = (peso / 10).toFixed(1);
            altura = (altura / 10).toFixed(1);
            nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
            
            console.log(datos)
        })
}
</script>

<template>
    <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <b>Pokémon Facts!</b>
            </a>
            <div class="text-end" data-bs-theme="dark">
            <RouterLink to="/registro">Registro</RouterLink>
            </div>
        </div>
    </nav>

    <div class="container text-center my-5">
        <div id="instructions" class="pb-2">
            <h3>Instrucciones de uso</h3>
            <p>¡Ahora ingresa la URL de tu Pokémon preferido y visualiza sus estadísticas principales!</p>
        </div>
        <form class="d-flex col-sm-10 col-lg-8 mx-auto" role="search">
            <input class="form-control me-2 border border-secondary border-2" type="text" placeholder="Ingrese su endpoint" id="endPoint">
            <button class="btn btn-outline-success" onclick="consumir()" type="button" data-bs-toggle="collapse" data-bs-target="#all-graphics" aria-expanded="false" aria-controls="all-graphics">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px"
                    y="0px" width="25" height="25" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </button>
        </form>

        <div class="collapse container my-4 grid gap-3" id="all-graphics">
            <div class="row">
                <div class="card col-sm-12 col-lg-3 text-start p-2" id="card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ nombre }}</h5>
                        <h5 class="card-title">{{ peso }}</h5>
                        <h5 class="card-title">{{ altura }}</h5>
                        <h5 class="card-title">{{ experiencia }}</h5>
                    </div>
                </div>   
            </div>
        </div>

        <input type="reset" class="btn btn-outline-danger">

    </div>

    <footer class="bg-dark border-bottom border-bottom-dark fixed-bottom" data-bs-theme="dark" id="footer">
        <div class="container-fluid text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
            <p style="color: white;">The stats of your favorite Pokémon, right here!</p>
        </div>
    </footer>

</template>

<style scoped>
</style>