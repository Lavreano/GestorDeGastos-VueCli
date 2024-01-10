<template>
  <div class="gestor-de-gastos animate__animated animate__fadeIn">
    <!-- Componente de Formulario -->
    <div class="home">
      <h1>Gestión de Gastos</h1>
      <p>Simplifica tu vida financiera con nuestra aplicación de gestión de gastos. Registra tus ingresos y egresos de manera fácil y rápida, organiza tus transacciones por categorías y visualiza gráficos intuitivos para entender mejor tus patrones de gasto. <b>¡Toma el control de tus finanzas hoy mismo!</b></p>
      <img class="animate__animated animate__zoomIn" alt="Imagen ilustrativa representando a una persona realizando sus tareas" src="../assets/banner.svg">
      <FormGestion @agregar="agregarGasto" @guardarLocalStorage="guardarDatosLocalStorage" />
    </div>

    <!-- Componente de Lista de Gastos -->
    <div class="lista">
      <h1>Lista de Gastos</h1>
      <p>Explora el historial completo de tus registros. La vista de Lista de Gastos te proporciona un desglose detallado de todos los gastos ingresados por vos. Busca tus gastos para obtener información clara y asegúrate de mantener un control efectivo sobre tus finanzas.
      </p>
      <img class="animate__animated animate__zoomIn" alt="Imagen ilustrativa representando a una persona con un gráfico" src="../assets/banner-list.svg">
      <ListGestion :gastos="gastos" @update:gastos="actualizarGastos" />
    </div>
  </div>
</template>

<script>
import 'animate.css';
import FormGestion from '@/components/FormGestion.vue';
import ListGestion from '@/components/ListGestion.vue';

export default {
  components: {
    FormGestion,
    ListGestion,
  },
  data() {
    return {
      gastos: [],
    };
  },
  methods: {
    cargarDatosLocalStorage() {
      const datosLocalStorage = localStorage.getItem('gastos');
      if (datosLocalStorage) {
        this.gastos = JSON.parse(datosLocalStorage);
      }
    },
    guardarDatosLocalStorage() {
      localStorage.setItem('gastos', JSON.stringify(this.gastos));
    },
    agregarGasto(gasto) {
      this.gastos.push(gasto);
      this.guardarDatosLocalStorage();
    },
    actualizarGastos(datos) {
      this.gastos = datos;
    },
  },
  mounted() {
    this.cargarDatosLocalStorage();
  },
};
</script>

<style>
.gestor-de-gastos {margin: 4em 2em;}
.home {margin: 2em 0;}
img {margin: 3em 0;}
</style>