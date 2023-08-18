<template>
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 pb-5 pb-lg-0">
            <img class="img-fluid w-100" src="@/static/assets/img/testimonial.jpg" alt="">
          </div>
          <div class="col-lg-6">
            <h6 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Testimonial</h6>
            <h1 class="mb-4">What Our Clients Say!</h1>
            <div class="position-relative">
              <font-awesome-icon :icon="icons.quoteRight" class="fa-3x text-primary position-absolute" style="top: -6px; right: 0;" />
              <div class="d-flex align-items-center mb-3">
                <img class="img-fluid rounded-circle" :src="activeTestimonial.image" style="width: 60px; height: 60px;" :alt="activeTestimonial.clientName">
                <div class="ml-3">
                  <h6 class="text-uppercase">{{ activeTestimonial.clientName }}</h6>
                  <span>{{ activeTestimonial.profession }}</span>
                </div>
              </div>
              <p class="m-0">{{ activeTestimonial.comment }}</p>
            </div>
            <div class="owl-carousel testimonial-carousel">
            <div class="owl-dots">
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :data-target="'#testimonial-carousel'"
                @click="handleliClick(index)"
                :class="['owl-dot', { active: index === activeIndex }]"
              ></div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
  
  const icons = {
    quoteRight: faQuoteRight,
  };
  
  const testimonials = [
    {
      id: '1',
      clientName: 'Client Name 1',
      profession: 'Profession 1',
      image: '_nuxt/static/assets/img/testimonial-1.jpg',
      comment: 'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
    {
      id: '2',
      clientName: 'Client Name 2',
      profession: 'Profession 2',
      image: '_nuxt/static/assets/img/testimonial-2.jpg',
      comment: 'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
    {
      id: '3',
      clientName: 'Client Name 3',
      profession: 'Profession 3',
      image: '_nuxt/static/assets/img/testimonial-3.jpg',
      comment: 'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
  ];
  
  const activeIndex = ref(0);
  
  const activeTestimonial = ref(testimonials[activeIndex.value]);
  const isIntervalPaused = ref(false);
  let interval;

  const handleliClick = (index) => {
    activeIndex.value = index;
    activeTestimonial.value = testimonials[index];
    isIntervalPaused.value = true;
    setTimeout(() => {
      isIntervalPaused.value = false;
    }, 5000);
  };

  onMounted(() => {
    interval = setInterval(() => {
      if (!isIntervalPaused.value) {
        if (activeIndex.value === testimonials.length - 1) {
          activeIndex.value = 0;
        } else {
          activeIndex.value += 1;
        }
        activeTestimonial.value = testimonials[activeIndex.value];
      }
    }, 5000);
  });

  // Limpia el intervalo cuando el componente se desmonta
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  <style scoped>
.owl-dots{
    cursor: pointer;
}
</style>