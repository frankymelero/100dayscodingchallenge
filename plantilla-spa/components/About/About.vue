<template>
    <!-- About Start -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 pb-5 pb-lg-0">
            <img class="img-fluid w-100" src="../../static/assets/img/about.jpg" alt="">
          </div>
          <div class="col-lg-6">
            <h6 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
            <h1 class="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
            <p class="pl-4 border-left border-primary">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat</p>
            <div class="row pt-3">
              <div class="col-6">
                <div class="bg-light text-center p-4">
                  <h3 class="display-4 text-primary">{{ firstCounter }}</h3>
                  <h6 class="text-uppercase">Spa Specialist</h6>
                </div>
              </div>
              <div class="col-6">
                <div class="bg-light text-center p-4">
                  <h3 class="display-4 text-primary">{{ secondCounter }}</h3>
                  <h6 class="text-uppercase">Happy Clients</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';

// Variables reactivas para los contadores
const firstCounter = ref(0);
const secondCounter = ref(0);

// Función para animar los contadores
const animateCounters = () => {
  const targetFirst = 99;
  const targetSecond = 999;
  const stepFirst = Math.ceil(targetFirst / 50); // Dividimos en pasos para una animación suave
  const stepSecond = Math.ceil(targetSecond / 50);

  let currentFirst = 0;
  let currentSecond = 0;

  const interval = setInterval(() => {
    currentFirst += stepFirst;
    currentSecond += stepSecond;

    if (currentFirst >= targetFirst) {
      currentFirst = targetFirst;
      clearInterval(interval);
    }

    if (currentSecond >= targetSecond) {
      currentSecond = targetSecond;
      clearInterval(interval);
    }

    firstCounter.value = currentFirst;
    secondCounter.value = currentSecond;
  }, 50);
};

onMounted(() => {
  animateCounters();
});
</script>