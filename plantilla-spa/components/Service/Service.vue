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
                    <form @submit.prevent="handleSubmit">
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" v-model="formData.name" class="form-control bg-transparent p-4" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="email" v-model="formData.email" class="form-control bg-transparent p-4" placeholder="Your Email" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="date" id="date" data-target-input="nearest">
                                        <input type="date" v-model="formData.date" :min="minDate" :max="maxDateValue" class="form-control bg-transparent p-4 datetimepicker-input"  />
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                  
                                  <select v-model="selectedTime" class="custom-select bg-transparent px-4" id="appointment-time" style="height: 47px;">
                                    
                                  <option value="">Choose an hour</option>
                                   <option v-for="time in availableTimes" :key="time">{{ time }}</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <select v-model="formData.selectedservice" class="custom-select bg-transparent px-4" style="height: 47px;">
                                        <option value="-1">Select A Service</option>
                                        <option v-for="service in services" :key="service.id" :value="service.id">{{ service.title+" ("+service.duration}}minutes) </option>
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
    id: 0,
    title: 'Body Massage',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-1.jpg',
    duration: 30,
  },
  {
    id: 1,
    title: 'Stone Therapy',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-2.jpg',
    duration: 45,
  },
  {
    id: 2,
    title: 'Facial Therapy',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-3.jpg',
    duration: 15,
  },
  {
    id: 3,
    title: 'Skin Care',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-4.jpg',
    duration: 30,
  },
  {
    id: 4,
    title: 'Stream Bath',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-5.jpg',
    duration: 60,
  },
  {
    id: 5,
    title: 'Face Masking',
    description: 'Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum',
    image: '/assets/img/service-6.jpg',
    duration: 45,
  },
];

const apidatamock = [

  {
    reservationId: "d2D2a6fs",
    date: "2023-09-21",
    hour: "08:45",
    duration: 30,
    serviceId: 3
  },
  {
    reservationId: "d226a6ss",
    date: "2023-09-21",
    hour: "11:00",
    duration: 45,
    serviceId: 1
  }

];

const openedHours = ref({
  // UTC time. Adjust according your needs. Note that this is made to consider Winter/summer hours, therefore use gmt hours and you won't need to change this.
  starting: '08:00',
  finishing: '19:00',
  minuterange: 15
})

const formData = ref({
  name: '',
  email: '',
  date: '',
  time: '',
  selectedservice: '-1',
});


const selectedTime = ref('');



const availableTimes = ref([]);

// Esta función calcula los tiempos disponibles
const calculateAvailableTimes = () => {
  const times = [];
  const today = new Date();
  const todaydate = today.getDate();
  const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
  const todayYear = today.getFullYear();
  const todayMins = today.getMinutes();
  const todayhours = today.getHours();

  // Calcula el número de minutos que faltan para el próximo cuarto de hora
  const minutesToNextQuarter = 15 - (todayMins % 15);

  // Ajusta los minutos al próximo cuarto de hora
  const roundedMinutes = (todayMins + minutesToNextQuarter) % 60;

  const formattedTime = `${todayhours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`;
  const formattedday = `${todayYear}-${currentMonth}-${todaydate}`;
  let currentMinutes;

  if (formData.value.date === formattedday) {
    currentMinutes = timeToMinutes(formattedTime) + 120; 
  } else {
    currentMinutes = timeToMinutes(openedHours.value.starting);
  }


  const reservedTimes = apidatamock.map((reservation) => ({
    hour: reservation.hour,
    duration: reservation.duration,
    date: reservation.date,
  }));




  while (currentMinutes <= timeToMinutes(openedHours.value.finishing)) {
    let durationFound = null;

 
    // Función de callback para comprobar si el valor está presente y obtener la duración
    const isReserved = reservedTimes.some(item => {
    
  
      if (item.hour === minutesToTime(currentMinutes) && formData.value.date === item.date) {
        durationFound = item.duration;
        return true; // Coincidencia encontrada
      }
      return false; // Sin coincidencia
    });


    if (isReserved) {
      currentMinutes += durationFound;
    } else {
      times.push(minutesToTime(currentMinutes));
      currentMinutes += openedHours.value.minuterange;
    }
  }

  availableTimes.value = times; // Actualiza el valor de availableTimes
};

// Observa el cambio en formData.date y llama a la función para calcular los tiempos disponibles
watch(() => formData.value.date, (newDate, oldDate) => {
  // Ejecuta availableTimes cuando formData.date cambia
  calculateAvailableTimes();

});

// Llama a calculateAvailableTimes una vez al inicio para la fecha inicial
onMounted(() => {
  calculateAvailableTimes();
});


function timeToMinutes(time) {
  if (!time) return 0; // Si time es undefined, regresamos 0 minutos
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
}

const handleSubmit = async () => {
  console.log(formData.value);

};
const today = new Date();
const maxDate = new Date(today);
maxDate.setMonth(today.getMonth() + 3);

const minDate = computed(() => {
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});

const maxDateValue = computed(() => {
  const year = maxDate.getFullYear();
  const month = String(maxDate.getMonth() + 1).padStart(2, '0');
  const day = String(maxDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});
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
  background: linear-gradient(rgba(33, 30, 28, 0.7), rgba(33, 40, 28, 0.7)), url(/assets/img/carousel-1.jpg), no-repeat center center;
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