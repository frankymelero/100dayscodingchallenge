<template>
    <div class="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            v-for="(indicator, index) in carouselIndicators"
            :key="index"
            :data-target="'#header-carousel'"
            @click="handleliClick(index)"
            :class="{ active: index === activeIndex }"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item position-relative active" style="min-height: 100vh;">
            <img class="position-absolute w-100 h-100" id="carouselimg" :src="activeCarouselItem.urlimg" style="object-fit: cover;">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h6 id="h1-message" class="text-white text-uppercase mb-3 animate__animated animate__fadeInDown">SPA & BEAUTY CENTER</h6>
                <h3 class="display-3 text-capitalize text-white mb-3">{{ activeCarouselItem.h1 }}</h3>
                <p id="description" class="mx-md-5 px-5">{{ activeCarouselItem.description }}</p>
                <a class="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const carouselIndicators = [
    {
      "id": "1",
      "h1": "Massage Treatment",
      "description": "Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam",
      "urlimg": "/_nuxt/static/assets/img/carousel-1.jpg"
    },
    {
      "id": "2",
      "h1": "Facial Treatment",
      "description": "Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam",
      "urlimg": "/_nuxt/static/assets/img/carousel-2.jpg"
    },
    {
      "id": "3",
      "h1": "Cellulite Treatment",
      "description": "Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam",
      "urlimg": "/_nuxt/static/assets/img/carousel-3.jpg"
    }
  ];
  
  const activeIndex = ref(0);
  
  //Crea la reactividad modificando el contenido en funcion del indice activo 
  const activeCarouselItem = computed(() => {
    return carouselIndicators[activeIndex.value];
  });
  
  //Captura el indice del click, y setea el indice activo.
  const handleliClick = (index) => {
    activeIndex.value = index;
  };
  
  // Cambia automáticamente el índice activo cada 4 segundos
  onMounted(() => {
    const interval = setInterval(() => {
      if (activeIndex.value === 2) {
        activeIndex.value = 0;
      } else {
        activeIndex.value += 1;
      }
    }, 8000);
  
    // Limpia el intervalo cuando el componente se desmonta
    onUnmounted(() => {
      clearInterval(interval);
    });

  });
  </script>
  