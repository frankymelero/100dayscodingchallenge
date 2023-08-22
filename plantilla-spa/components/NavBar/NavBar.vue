
<template>

     <!-- Topbar Start -->
     <div class="container-fluid bg-light d-none d-lg-block">
    <div class="row py-2 px-lg-5">
      <div class="col-lg-6 text-left mb-2 mb-lg-0">
        <div class="d-inline-flex align-items-center">
   
            <small> <font-awesome-icon icon="phone" class="mr-2" /></small>
            <small>+34 616123123</small>
          <small class="px-3">|</small>
         
           <small><font-awesome-icon icon="envelope" class="mr-2" /></small> 
      
            <small>info@fmgdev.com</small>
          
        </div>
      </div>
      <div class="col-lg-6 text-right">
    <div class="d-inline-flex align-items-center">
      <a class="text-primary px-2" href="#">
      <font-awesome-icon icon="fa-brands fa-facebook-f" class="fab" />
      </a>
      <a class="text-primary px-2" href="#">
        <font-awesome-icon icon="fa-brands fa-twitter" class="fab" />
      </a>
      <a class="text-primary px-2" href="#">
      <font-awesome-icon icon="fa-brands fa-linkedin" class="fab" />
      </a>
       <a class="text-primary px-2" href="#">
        <font-awesome-icon icon="fa-brands fa-instagram" class="fab" />
      </a>
      <a class="text-primary px-2" href="#">
        <font-awesome-icon icon="fa-brands fa-youtube" class="fab" />
      </a>
    </div>
  </div>
    </div>
</div>
<!-- Topbar End -->


<!-- Navbar Start -->
<div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
      <NuxtLink to="/" class="nav-item nav-link"> 
            <h1 class="m-0 text-primary"><span class="text-dark">SPA</span> Center</h1>
          </NuxtLink>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" @click="toggleCollapse">
            <span class="navbar-toggler-icon" id="nti" ></span>
        </button>
        <div :class="['collapse', { show: !collapsed }]" class="navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div class="navbar-nav m-auto py-0">
              <NuxtLink to="/" class="nav-item nav-link" :class="{ active: currentPage === '/' }">Home</NuxtLink>
              <NuxtLink to="/about" class="nav-item nav-link" :class="{ active: currentPage === 'about' }">About</NuxtLink>
              <NuxtLink to="/services" class="nav-item nav-link" :class="{ active: currentPage === 'services' }">Services</NuxtLink>
              <NuxtLink to="/pricing" class="nav-item nav-link" :class="{ active: currentPage === 'pricing' }">Pricing</NuxtLink> 
                <div class="nav-item dropdown">
               <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown" :class="{ active: currentPage === 'appointment' || currentPage === 'open-hours' || currentPage === 'our-team' || currentPage === 'testimonial' }">Pages</a>    <div class="dropdown-menu rounded-0 m-0 custom-dropdown-menu">
      <NuxtLink to="/appointment" class="dropdown-item" :class="{ active: currentPage === 'appointment' }">Appointment</NuxtLink>
      <NuxtLink to="/open-hours" class="dropdown-item" :class="{ active: currentPage === 'open-hours' }">Open Hours</NuxtLink>
      <NuxtLink to="/our-team" class="dropdown-item" :class="{ active: currentPage === 'our-team' }">Our Team</NuxtLink>
      <NuxtLink to="/testimonial" class="dropdown-item" :class="{ active: currentPage === 'testimonial' }">Testimonial</NuxtLink>
    </div>
  </div>
   <NuxtLink to="/contact" class="nav-item nav-link" :class="{ active: currentPage === 'contact' }">Contact</NuxtLink>
            </div>
            <NuxtLink to="/" class="btn btn-primary d-none d-lg-block">Book Now</NuxtLink>
               </div>
    </nav>
</div>
<!-- Navbar End -->
</template>
<script setup>

import { ref } from 'vue';
import { navbarPlugin } from '@/plugins/navbarPlugin';


const collapsed = ref(true);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;

};

const props = defineProps({
  currentPage: String
});

navbarPlugin();
const dropdownMenuVisible = ref(false);

const showDropdown = () => {
  dropdownMenuVisible.value = true;
};

const hideDropdown = () => {
  dropdownMenuVisible.value = false;
};
</script>

<style scoped>

.nav-item.dropdown .custom-dropdown-menu {
  display: none;
  /* ...otros estilos del menú desplegable... */
}

.nav-item.dropdown:hover .custom-dropdown-menu {
  display: block;
  /* Cambia las propiedades de estilo en hover */
  background-color: #f8f9fa;
  /* ...otros estilos en hover... */
}


.dropdown-item:hover{
  background-color: #eff2f5;
}
</style>