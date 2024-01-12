<template>
  <div>
  <div>
    <div class="header">
      <h1>Consejos y respuestas del equipo</h1>
    </div>
  
    <div class="container animate__animated animate__slideInLeft">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" class="form-control" placeholder="Encontra el articulo">
            <button class="btn btn-primary boton">Buscar</button>
          </div> 
        </div>
      </div>
    </div>
  </div>

  <div class="container two-col-example margin-container animate__animated animate__slideInUp">
  <div class="row">
    <div class="col-lg-6 col-xs-12">
      <h2>Información Básica</h2>
      <div class="card-deck mb-1 text-center">
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-shield-alt fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">Ayuda con contraseña</h4>
            <p class="mt-3 mb-4">Restablecer, cambiar o desbloquear su contraseña de inicio de sesión.</p>
          </div>
        </div>
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-cloud fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">Importancia de la Gestión de Gastos</h4>
            <p class="mt-3 mb-4">Comprende por qué es crucial gestionar tus gastos para mantener un equilibrio financiero, planificar a futuro y evitar sorpresas económicas.</p>
          </div>
        </div>
      </div>
      <div class="card-deck mb-1 text-center">
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-laptop fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">¿Cómo puedo agregar ingresos adicionales?</h4>
            <p class="mt-3 mb-4">Descubre cómo registrar ingresos adicionales, como bonificaciones o ingresos inesperados, para obtener un panorama más preciso de tus finanzas.</p>
          </div>
        </div>
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-calendar-alt fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">Análisis de Patrones de Gasto</h4>
            <p class="mt-3 mb-4">Explora la capacidad de analizar patrones de gasto a lo largo del tiempo, identificando tendencias que te ayudarán a ajustar tu presupuesto y mejorar tu situación financiera.</p>
          </div>
        </div>
      </div>
      <div class="card-deck mb-1 text-center">
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-print fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">Cómo categorizar mis gastos</h4>
            <p class="mt-3 mb-4">Aprende a asignar categorías adecuadas a tus transacciones para tener un registro organizado de tus gastos.</p>
          </div>
        </div>
        <div class="card mb-4 box-shadow mouse">
          <div class="card-body">
            <i class="fas fa-podcast fa-4x com-icon"></i>
            <h4 class="card-title pricing-card-title">Seguridad de la cuenta y protección de datos</h4>
            <p class="mt-3 mb-4">Comprende las características de seguridad de la aplicación y cómo proteger tu cuenta contra accesos no autorizados.</p>
          </div>
        </div>
      </div>
      <div class="main-button"><button type="button" class="btn btn-primary com-button">Ver más temas</button></div>
    </div>
    <div class="col-lg-6 col-xs-12">
      <h2>Búsquedas Populares</h2>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 t-left">Introducción a la Aplicación</h5>
          </div>
          <p class="mb-1 t-left">Descubre las funciones clave de nuestra aplicación de Gestión de Gastos para tomar el control total de tus finanzas personales..</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 t-left">Registro de Transacciones</h5>
          </div>
          <p class="mb-1 t-left">Aprende a registrar tus transacciones de manera fácil y rápida, garantizando un seguimiento preciso de tus ingresos y gastos.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 t-left">Organización por Categorías</h5>
          </div>
          <p class="mb-1 t-left">Explora cómo organizar tus transacciones por categorías para una visualización clara y una mejor comprensión de tus patrones de gasto.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 t-left">Presupuestos Personalizados</h5>
          </div>
          <p class="mb-1 t-left">Descubre cómo establecer presupuestos personalizados para controlar tus gastos y asegurar una gestión efectiva de tu dinero.</p>
        </a>
      </div>
      <div class="main-button"><button type="button" class="btn btn-primary com-button">Ver más información</button></div>
    </div>
    
  </div>
</div>
</div>
</template>
  

<style>

/* -------- Buscador de articulos --------- */

.header {margin: 4em 0;}

.search{
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, .1);
  }

  .search input{
   height: 60px;
   text-indent: 25px;
   border: 2px solid #d6d4d4;
   padding-left: 20px;
  }

  .search input:focus{
   box-shadow: none;
   border: 2px solid #066bd1;
  }

  .search .fa-search{
   position: absolute;
   top: 20px;
   left: 16px;
  }

  .search button{
   position: absolute;
   top: 5px;
   right: 5px;
   height: 50px;
   width: 110px;
   background: #066bd1;
  }

  .boton {
    margin: 0 auto;
  }

  /* ------ Main centro de ayuda ------ */

.margin-container {margin-top: 4em;}

.mouse:hover {cursor: pointer; transform: scale(1.01); transition: all 1.1s;}

  .two-col-example{
  margin-bottom:10em;
}

.t-left {text-align: left;}

h2{
  margin-bottom: 1em;
  text-align:center;
}

h4{
  font-weight: 400;
  font-size: 18px;
}

h5{
  color: #066bd1;
  font-weight: 400;
}

p{
  font-weight: 300;
  font-size: 14px;
}

.com-button{
  background-color: #066bd1;
  font-weight: 300;
  font-size: 18px;
  padding: .7em 2em;
  border-radius: 100px;
}

.main-button{
  margin-top: 1em;
  text-align: center;
}

.card{
  border-radius:3px;
  border: 1px solid #D1D1D1;
}

.card-deck .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 6px;
    margin-bottom: 0;
    margin-left: 6px;
}

.com-icon{
  margin-bottom: .35em;
  color: #066bd1;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 1rem .9em;
    margin-bottom: .5em;
    background-color: transparent;
/*     border: 1px solid rgba(0, 0, 0, 0.125); */
  border: none;
}

.list-group-item:first-child {
padding-top: 0;
}

.list-group p{
  font-size: 16px;
}

.list-com-announcements{
 border-bottom: 1px solid #D1D1D1; 
}
   </style>