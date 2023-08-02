<script setup>
import {ref} from 'vue'


const usuario = ref({
nombre: '',
apellido: '',
edad: '',
user: '',
password: '',
intereses: [],
admin: false,
observaciones: '',
grupo: ''
})

function guardarDatos(event){
event.preventDefault()
console.log(usuario.value)
cambio.value = false
}

let cambio = ref(true)

function ingresar(event){
    if (usuario.password === usuario.password2 && usuario.user === usuario.user2) {
    console.log("Datos válidos");
    } else {
    alert("¡Datos incorrectos!");
    }
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
<h2>Registro</h2>
<form v-if="cambio">
    <label for="nombre">
    Nombre
    <input type="text" id= "nombre" v-model="usuario.nombre">
    </label>
    <br>
    <label for="apellido">
    Apellido
    <input type="text" id= "apellido" v-model="usuario.apellido">
    </label>
    <br>
    <label for="edad">
    Edad
    <select id="menu" v-model="usuario.edad">
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
    </select>
    </label>
    <br>
    <label for="correo">
    Correo electrónico
    <input type="email" id= "correo" v-model="usuario.user">
    <br>
    </label> 
    <label for="contraseña">
    Contraseña
    <input type="password" id= "contraseña" v-model="usuario.password">
    </label>
    <br>
    <label for="intereses">
    Intereses
    <br>
    <label for="JS">
        JavaScript
        <input type="checkbox" id= "JS" v-model="usuario.conocimientos">
    </label>
    <br>
    <label for="HTML">
        HTML
        <input type="checkbox" id= "HTML" v-model="usuario.conocimientos">
    </label>
    <br>
    <label for="CSS">
        CSS
        <input type="checkbox" id= "CSS" v-model="usuario.conocimientos">
    </label>
    <br>
    <label for="Vue.js">
        Vue.js
        <input type="checkbox" id= "Vue.js" v-model="usuario.conocimientos">
    </label>
    <br>
    </label>
    <br>
    <label for="administrador">
    ¿Usuario administrador?
    <input type="checkbox" role="switch" id= "administrador" v-model="usuario.administrador">
    </label>
    <label for="observaciones">
    <textarea id="observaciones" cols="30" rows="10" v-model="usuario.observaciones"></textarea>
    </label>
    <br>
    <button @click="guardarDatos" class="btn btn-success">Guardar</button>
    <input type="reset" class="btn btn-danger">  
    <button class="btn btn-link">Ya tengo una cuenta</button>
</form>
<div v-else>
<h2>Inicio de sesión</h2>
<form>
    <label for="correo">
    Usuario
    <input type="email" id= "correo" v-model="usuario.user1">
    <br>
    </label> 
    <label for="contraseña">
    Contraseña
    <input type="password" id= "contraseña" v-model="usuario.password2">
    </label>
    <br>
    <button @click="ingresar" class="btn btn-primary">Ingresar</button>
</form>
</div>
</template>

<style scoped>

</style>