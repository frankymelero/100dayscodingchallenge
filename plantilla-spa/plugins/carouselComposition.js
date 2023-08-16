import { ref, onMounted } from 'vue';
import 'bootstrap';
import $ from 'jquery';

export function useCarousel() {
  const currentSlide = ref(0);
  const slides = [
    {
      imageSrc: '../static/assets/img/carousel-1.jpg',
      title: 'Massage Treatment',
      description: 'Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam'
    },
    {
      imageSrc: '../static/assets/img/carousel-2.jpg',
      title: 'Facial Treatment',
      description: 'Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam'
    },
    {
      imageSrc: '../static/assets/img/carousel-3.jpg',
      title: 'Cellulite Treatment',
      description: 'Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam'
    }
  ];

  onMounted(() => {
    const carousel = document.getElementById('header-carousel');
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000, // Change slide every 5 seconds
      pause: false // No pause on hover
    });
  
    bsCarousel.$root.$on('slid.bs.carousel', (event, data) => {
      currentSlide.value = data.to;
    });
    $('#header-carousel').carousel(); 
  });

  return {
    currentSlide,
    slides
  };
}