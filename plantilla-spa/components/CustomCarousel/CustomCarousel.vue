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
                <h6 id="h1-message" class="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" :key="`h1-animation-${animationKey}`">
                SPA & BEAUTY CENTER
              </h6>
                <h3 class="display-3 text-capitalize text-white mb-3">{{ activeCarouselItem.h1 }}</h3>
                <p id="description" class="mx-md-5 px-5">{{ activeCarouselItem.description }}</p>
                <a class="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#" :key="`h1-animation-${animationKey}`">Make Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  const animationIndex = ref(0);
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
  const isIntervalPaused = ref(false);
  const animationKey = ref(0);


  // Crea la reactividad modificando el contenido en función del índice activo
  const activeCarouselItem = computed(() => {
    return carouselIndicators[activeIndex.value];
  });
  
  const updateAnimation = () => {
  animationKey.value += 1;
};

  
// Captura el índice del clic y establece el índice activo.
const handleliClick = (index) => {
  activeIndex.value = index;
  animationIndex.value = index; // Actualiza el índice de la animación
  isIntervalPaused.value = true;
  updateAnimation(); 
  setTimeout(() => {
    isIntervalPaused.value = false;
  }, 5000);
};
  let interval;
  
  // Comprueba si el valor del intervalo está pausado, si no lo está reinicia el ciclo
  onMounted(() => {
    interval = setInterval(() => {
      if (!isIntervalPaused.value) {
        if (activeIndex.value === carouselIndicators.length - 1) {
          activeIndex.value = 0;
          updateAnimation();
        } else {
          activeIndex.value += 1;
          updateAnimation();
        }
      }
    }, 8000);
  });
  
  // Limpia el intervalo cuando el componente se desmonta
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>

  <style scoped>

.animate__fadeInDown {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 1.2s forwards;
}

.animate__fadeInUp {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.2s forwards;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>