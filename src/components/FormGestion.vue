<template>
  <div class="body-container">
    <h2>Registrar un Nuevo Gasto</h2>
    <form class="form-container" @submit.prevent="agregarGasto">
      <label for="nombreGasto">Producto / Servicio:</label>
      <input type="text" id="nombreGasto" v-model="nuevoGasto.nombre" required>
      <p class="error">{{ errores.nombre }}</p>

      <label for="cantidadGasto">Cantidad:</label>
      <input type="number" id="cantidadGasto" v-model="nuevoGasto.cantidad" required>
      <p class="error">{{ errores.cantidad }}</p>

      <label for="precioGasto">Precio (por unidad):</label>
      <input type="number" id="precioGasto" v-model="nuevoGasto.precio" required>
      <p class="error">{{ errores.precio }}</p>

      <label class="select" for="categoriaGasto">Categoría:</label>
      <select id="categoriaGasto" v-model="nuevoGasto.categoria">
        <option value="Alimentación">Alimentación</option>
        <option value="Servicios">Servicios</option>
        <option value="Transporte">Transporte</option>
        <option value="Salud">Salud</option>
        <option value="Otros">Otros</option>
      </select>
      <button>Agregar Gasto</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    agregarGastoEnLista: Function,
  },
  data() {
    return {
      nuevoGasto: {
        nombre: '',
        cantidad: 0,
        precio: 0,
        categoria: 'Alimentación',
      },
      errores: {
        nombre: '',
        cantidad: '',
        precio: '',
      },
    };
  },
  methods: {
    agregarGasto() {
      this.errores = {};

      if (!this.nuevoGasto.nombre) {
        this.errores.nombre = 'Por favor ingresa el nombre del producto';
      }
      if (this.nuevoGasto.cantidad <= 0) {
        this.errores.cantidad = 'La cantidad debe ser mayor que cero';
      }
      if (this.nuevoGasto.precio <= 0) {
        this.errores.precio = 'El precio debe ser mayor que cero';
      }

      if (Object.keys(this.errores).length === 0) {
        // Emitir evento para agregar el gasto
        this.$emit('agregar', { ...this.nuevoGasto });
        // Limpiar el formulario
        this.nuevoGasto.nombre = '';
        this.nuevoGasto.cantidad = 0;
        this.nuevoGasto.precio = 0;
        this.nuevoGasto.categoria = 'Alimentación';
      }
    },
  },
};
</script>

<style>
.body-container {
  width: 80%;
  margin:0 auto;
  margin-bottom: 4em;
    padding: 2em;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.082) 0px 7px 29px 0px;
}
.body-container h2 {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 1em 0;
}

.form-container {
    padding: 0 4em;
    display: grid;
}

label{
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
}
input, select {
    margin-bottom: 20px !important;
    padding: 5px;
    border:1px solid #9e9e9e;
    border-radius: 5px;
}

button {margin: 30px 0;
padding: 5px;
background-color: #1800ec;
color: #fff;
border: 1px solid #1800ec;
cursor: pointer;
}
button:hover {color: #1800ec;
background-color: #fff;
border: 1px solid #1800ec;}

.error {
    color: #ac0000;
}
</style>