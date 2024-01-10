<template>
  <div class="lista">
    <h1>Lista de Gastos</h1>
    <p>Explora el historial completo de tus registros. La vista de Lista de Gastos te proporciona un desglose detallado de todos los gastos ingresados por vos. Busca tus gastos para obtener información clara y asegúrate de mantener un control efectivo sobre tus finanzas.
    </p>
    <img alt="Imagen ilustrativa representando a una persona con un gráfico" src="../assets/banner-list.svg">
    <ListGestion :gastos="listaDeGastos" @update:gastos="actualizarGastos" />
  </div>
</template>

<script>
import ListGestion from '@/components/ListGestion.vue';

export default {
  components: {
    ListGestion,
  },
  data() {
    return {
      listaDeGastos: [],
    };
  },
  methods: {
    agregarGastoEnLista(nuevoGasto) {
      console.log('Nuevo gasto:', nuevoGasto);
      this.listaDeGastos.push(nuevoGasto);
    },
    actualizarGastos(datos) {
  this.gastos = datos;
},
  },
};
</script>

<style>
.lista p{width: 70%; margin:0 auto;}
.lista h1{margin-top: 2em;}
</style>
