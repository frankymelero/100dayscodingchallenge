<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Contenido del primer slide</div>
        <div class="swiper-slide">Contenido del segundo slide</div>
        <div class="swiper-slide">Contenido del tercer slide</div>
        <!-- Agrega más divs aquí para cada slide -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Swiper from 'swiper/bundle';
  
  onMounted(() => {
    const swiper = new Swiper('.swiper-container', {
      // Configuraciones de Swiper
      loop: true,
      autoplay: {
      delay: 5000, // Intervalo de tiempo en milisegundos (5 segundos en este caso)
      disableOnInteraction: false, // Permite que la reproducción automática continúe incluso si el usuario interactúa con el Swiper
    },
      pagination: {
         clickable: true,
      },
    });
  });
  </script>
  
  <style scoped>
  /* Estilos de Swiper */
  .swiper-container {
    width: 50%;
    height: 50%;
    cursor: pointer;
  }
  </style>
