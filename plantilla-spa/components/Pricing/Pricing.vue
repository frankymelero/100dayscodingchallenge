    <template>
        
        <!-- Pricing Start -->
        <div class="container-fluid bg-pricing" style="margin: 90px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5" style="min-height: 500px;">
                        <div class="position-relative h-100">
                            <img class="position-absolute w-100 h-100" src="../../static/assets/img/pricing.jpg" style="object-fit: cover;">
                        </div>
                    </div>
                    <div class="col-lg-7 pt-5 pb-lg-5">
                        <div class="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                            <div class="owl-carousel pricing-carousel">
                                <div
                    v-for="(product, index) in products"
                    :key="index"
                    :class="['prize-box'], ['bg-white']"
                >  
                                    <div class="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                        <h1 class="display-4 mb-0">
                                            <small class="align-top text-muted font-weight-medium" style="font-size: 22px; line-height: 45px;">$</small>{{product.price}}<small class="align-bottom text-muted font-weight-medium" style="font-size: 16px; line-height: 40px;">/Mo</small>
                                        </h1>
                                        <h5 class="text-primary text-uppercase m-0">{{product.plan}}</h5>
                                    </div>
                                    <div class="p-4">
                                        <ul style="list-style: none;">
                        <li v-for="(service, serviceIndex) in product.servicesArray" :key="serviceIndex" class="text-pricing-item">
                        <font-awesome-icon icon="fa-check" class="text-success mr-2 mt-2" />
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
        <!-- Pricing End -->
    </template>
    <script setup>
    import { onMounted } from 'vue';
    
    //Separar los servicios con este indicador --> ---
    const products = [
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
    
    ];

    products.forEach(product => {
    product.servicesArray = product.services.split(' --- ');
    });

    </script>
<style scoped>
.bg-pricing {
    background: linear-gradient(rgba(33, 30, 28, 0.7), rgba(33, 40, 28, 0.7)), url(_nuxt/static/assets/img/carousel-2.jpg), no-repeat center center;
    background-size: cover;
}
.prize-box{
    background-color: white;
    min-width: 16vw;
    margin-left: 1.5vw;
}
.pricing-carousel{
    display: flex;
    justify-content: center;

}
.pricing-text{
   min-width: 30vw;
}
.text-pricing-item{
    margin-left: -2vw;
}
</style>