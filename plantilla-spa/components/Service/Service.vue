<template>
    
    <!-- Service Start -->
    <div class="container-fluid px-0 py-5 my-5">
    <div class="row mx-0 justify-content-center text-center">
      <div class="col-lg-6">
        <h6 class="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
        <h1>Spa & Beauty Services</h1>
      </div>
    </div>
    <div class="owl-carousel service-carousel">
      <div v-for="(service, index) in services" :key="index" class="service-item position-relative">
        <img class="img-fluid" :src="service.image" alt="" style="background: rgba(33, 30, 28, 0.7);">
        <div class="service-text text-center">
          <h4 class="text-white font-weight-medium px-3">{{ service.title }}</h4>
          <p class="text-white px-3 mb-3">{{ service.description }}</p>
          <div class="w-100 bg-white text-center p-4 description-box">
            <a class="btn btn-primary" href="">Make Order</a>
          </div>
        </div>
      </div>
    </div>
        <div class="row justify-content-center bg-appointment mx-0">
            <div class="col-lg-6 py-5">
                <div class="p-5 my-5" style="background: rgba(33, 30, 28, 0.7);">
                    <h1 class="text-white text-center mb-4">Make Appointment</h1>
                    <form>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg-transparent p-4" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="email" class="form-control bg-transparent p-4" placeholder="Your Email" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="date" id="date" data-target-input="nearest">
                                        <input type="text" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="time" id="time" data-target-input="nearest">
                                        <input type="text" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <select class="custom-select bg-transparent px-4" style="height: 47px;">
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 1</option>
                                        <option value="3">Service 1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <button class="btn btn-primary btn-block" type="submit" style="height: 47px;">Make Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->
</template>

<script setup>
const services = [
  {
    title: 'Body Massage',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '../../static/assets/img/service-1.jpg'
  },
  {
    title: 'Stone Therapy',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '../../static/assets/img/service-2.jpg'
  },
  {
    title: 'Facial Therapy',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '@/static/assets/img/service-3.jpg'
  },
  {
    title: 'Skin Care',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '_nuxt/static/assets/img/service-4.jpg'
  },
  {
    title: 'Stream Bath',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '_nuxt/static/assets/img/service-5.jpg'
  },
  {
    title: 'Face Masking',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '_nuxt/static/assets/img/service-6.jpg'
  },
  // ... (otros servicios)
];
</script>


<style scoped>
.service-carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;

}

.service-item {
  flex: 0 0 auto;
  position: relative;
  

}/* Agrega un pseudo-elemento antes de la imagen para el margen transparente */
.service-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px; 
  background-color: white; 
  z-index: 3;/* Color transparente */
}

.service-item:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0px; 
  background-color: white; 
  transition: 0.5s;
  }



.service-item, .service-text{
    background-color: rgba(33, 30, 28, 0.5);
}

.service-item:hover, .service-text:hover {
    background-color: rgba(33, 30, 28, 0.5);
  cursor: grab;
  transition: 0.5s;
  
}

.service-item img {
  max-width: 20vw;
  height: auto;
  
/* Agrega el filtro de escala de grises */
}
.service-item:hover img {
  max-width: 20vw;
  height: auto;


/* Agrega el filtro de escala de grises */
}


.service-item:hover > .service-text > .description-box {
  min-height: 130px !important;
  transition: 0.5s;
 }

.bg-appointment {
  background: linear-gradient(rgba(33, 30, 28, 0.7), rgba(33, 40, 28, 0.7)), url(_nuxt/static/assets/img/carousel-1.jpg), no-repeat center center;
  background-size: cover;
}

@media (max-width: 753px) {
  .service-item img {
  max-width: 100vw;
  height: auto;
  
/* Agrega el filtro de escala de grises */
}
.service-item:hover img {
  max-width: 100vw;
  height: auto;
  
/* Agrega el filtro de escala de grises */
}
}
</style>