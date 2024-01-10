<template>
    <div class="container mt-4">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <h2 class="pt-3 pb-4 text-center font-bold">Control de gastos</h2>
              <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 pl-3 purple-border" type="text" placeholder="Busca tu historial" aria-label="Search">
                <span class="icono-background"><a><i class="fa fa-search icono-search" aria-hidden="true"></i></a></span>
              </div>
            </div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th><i class="fa-solid fa-filter"></i>Categoria</th>
                <th><i class="fa-solid fa-bell-concierge"></i> Producto / Servicio</th>
                <th><i class="fa-solid fa-arrow-up-wide-short"></i> Cantidad</th>
                <th><i class="fa-solid fa-hand-holding-dollar"></i> Precio Total</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(gasto, index) in gastos" :key="index">
                <td>{{ gasto.categoria }}</td>
                <td>{{ gasto.nombre }}</td>
                <td>{{ gasto.cantidad }}</td>
                <td>$ {{ gasto.cantidad * gasto.precio }}</td>
              </tr>
            </tbody>
          </table> 
          <div class="container-total">
            <p v-if="gastos.length === 0">No hay gastos registrados.</p>
            <p v-else-if="gastos.length === 1">Hay un gasto registrado.</p>
            <p v-else>Hay {{ gastos.length }} gastos registrados.</p>
            <p>Total de Dinero Gastado: $ {{ calcularTotalGastos() }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

 <script>
export default {
  props: ['gastos'],
  methods: {
    calcularTotalGastos() {
      return this.gastos.reduce((total, gasto) => total + (gasto.cantidad * gasto.precio), 0);
    }
  }
};
 </script>
  
  <style>
  .icono-search {
    font-size: 18px;
    color: #fff;
    padding-top: 3px;
}
.icono-background {
    background-color: #1800ec;
    padding: 5px 10px;
}

i { color: #1800ec;
font-size: 20px;
margin-right: 5px;}

.input-group {
    margin-bottom: 30px;
}

.container-total {
    font-weight: 600;
    font-size: 18px;
}
</style>