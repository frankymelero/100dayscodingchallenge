<template>
    <div class="container-fluid bg-pricing" style="margin: 90px 0;">
      <div class="container">
        <div class="row">
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
            <img class="position-absolute w-100 h-100" src="../../static/assets/img/pricing.jpg" style="object-fit: cover;">
          </div>
          </div>
          <div class="col-lg-7 pt-5 pb-lg-5">
            <div class="pricing-text bg-light p-4 p-lg-5 my-lg-5 container1">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-for="(product, index) in products" :key="index" class="prize-box bg-white swiper-slide">
                    <div class="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                  <h1 class="display-4 mb-0">
                    <small class="align-top text-muted font-weight-medium" style="font-size: 22px; line-height: 45px;">$</small>{{ product.price }}
                    <small class="align-bottom text-muted font-weight-medium" style="font-size: 16px; line-height: 40px;">/Mo</small>
                  </h1>
                  <h5 class="text-primary text-uppercase m-0">{{ product.plan }}</h5>
                </div>
                <div class="p-4">
                  <ul style="list-style: none;">
                    <li v-for="(service, serviceIndex) in product.servicesArray" :key="serviceIndex" class="text-pricing-item">
                      <font-awesome-icon :icon="faCheck" class="text-success mr-2 mt-2" />
                      {{ service }}
                    </li>
                  </ul>
                  <a href="" class="btn btn-primary my-2">Order Now</a>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>



  
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Swiper from 'swiper/bundle';
import { ref, onMounted } from 'vue';

// Inicializar los productos con ref
const products = ref([
  {
    price: "49",
    plan: "BASIC PLAN",
    services: "Full Body Massage --- Deep Tissue Massage --- Hot Stone Massages --- Tissue Body Polish --- Foot & Nail Care"
  },
  {
    price: "99",
    plan: "FAMILY PLAN",
    services: "Full Body Massages --- Deep Tissue Massages --- Hot Stone Massages --- Tissue Body Polish --- Foot & Nail Care"
  },
  {
    price: "149",
    plan: "VIP PLAN",
    services: "Full Body Massages --- Deep Tissue Massages --- Hot Stone Massages --- Tissue Body Polish --- Foot & Nail Care"
  }
]);

// Dividir los servicios para cada producto
products.value.forEach(product => {
  product.servicesArray = product.services.split(' --- ');
});

onMounted(() => {
  // Inicialización inicial del carrusel
  let swiper;

  // Función para ajustar slidesPerView según el ancho de la ventana
  const adjustSlidesPerView = () => {
    if (window.innerWidth <= 753) {
      swiper.params.slidesPerView = 1;
    } else {
      swiper.params.slidesPerView = 2;
    }
    swiper.update(); // Actualizar el carrusel con la nueva configuración
  };

  // Inicializar el carrusel y ajustar slidesPerView
  swiper = new Swiper('.swiper-container', {
    slidesPerView: window.innerWidth <= 753 ? 1 : 2,
    spaceBetween: 10,
    // Resto de las opciones de Swiper
  });

  // Observar cambios en el ancho de la ventana y ajustar slidesPerView
  window.addEventListener('resize', adjustSlidesPerView);

  // Llamar a la función de ajuste inicial
  adjustSlidesPerView();
});
</script>
  
<style scoped>
.bg-pricing {
    background: linear-gradient(rgba(33, 30, 28, 0.7), rgba(33, 40, 28, 0.7)), url(/assets/img/carousel-2.jpg), no-repeat center center;
    background-size: cover;
}
.prize-box{
    background-color: white;

}
.pricing-carousel{
    display: flex;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  transition: transform 0.3s;
}
.pricing-text{
   min-width: 3vw;
}
.text-pricing-item{
    margin-left: -2vw;
}
.swiper-container {
     width:650px; /* Ajusta el ancho según tus necesidades */
      overflow: hidden; /* Oculta cualquier contenido adicional */
      position: relative; /* Establece una posición relativa */
    
    }

    .swiper-wrapper {
      display: flex; /* Utiliza flexbox para los slides */
      transition: transform 0.3s; /* Agrega una transición de desplazamiento suave */
      max-width: calc(100% + 20px); /* Añade un espacio adicional para el deslizamiento */
    }

    .pricing-text:hover{
   cursor: grab;
}

   
@media (max-width: 753px) {
  .swiper-container {
    max-width: 100%; /* Evita que el contenedor se desborde */
    overflow: hidden; /* Oculta el desborde del contenido */
  }

  .swiper-slide {
    width: 100% !important; /* Ocupa todo el ancho disponible */
    margin: 0 auto; /* Centra el slide horizontalmente */
  }

  .pricing-text {
    min-width: auto;
    max-width: 100%; /* Ajusta el ancho según tu preferencia */
  }
}
</style>