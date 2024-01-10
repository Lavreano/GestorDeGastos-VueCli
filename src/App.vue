<template>
  <div id="app">
    <nav>
      <router-link to="/">Gestor de Gastos</router-link> |
      <router-link to="/ayuda">Centro de Ayuda</router-link>
    </nav>
    <router-view/>
    
    <footer>
      <div class="col-md-12 text-center">
        <h2>Gestion Control de Gastos</h2>
        <p>Parcial N1 - Aplicaciones para Dispositivos Móviles - Profesora García, Mabel.</p>
        <p>Copyright &copy;2023 Todos los derechos están reservados | Escuela de Arte Multimedial Da Vinci by <a href="mailto:laureano.sierra@davinci.edu.ar" target="_blank">Sierra, Laureano.</a></p>
      </div>
    </footer>
  </div>
</template>

<style>
/* ------ Estilos para Header/Navegador ----- */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 40px;
  background-color: #066bd1;
  box-shadow: rgba(6, 107, 209, 0.4) 0px 5px, rgba(6, 107, 209, 0.3) 0px 10px, rgba(6, 107, 209, 0.2) 0px 15px, rgba(6, 107, 209, 0.1) 0px 20px, rgba(6, 107, 209, 0.05) 0px 25px;}

nav a {
  font-weight: bold;
  color: #b3b3b3;
  text-decoration: none;}
nav a.router-link-exact-active {color: #fff;}

/* ------ Estilos para footer ----- */

footer {
    background-color: #121212;
    padding: 4em;
    color: #9e9e9e;
}

footer h2 {
    margin-bottom: 20px;
    color: #fff;}
</style>
