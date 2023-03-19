<template>
    <div>
        <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :autoplay="{
          'delay': 3000,
        }" 
        class="mySwiper"
      >
        <swiper-slide>
          <img class="slider_img" src="../../assets/asansor/AS1.jpg"/>
          </swiper-slide
        ><swiper-slide>
        <img class="slider_img" src="../../assets/asansor/AS2.jpg"/>
          </swiper-slide
        ><swiper-slide>
          <img class="slider_img" src="../../assets/asansor/AS3.jpg"/>
          </swiper-slide>
      </swiper>
    </div>

<!--     <div class="container second-section">
      <div class="row">
        <div class="col-12 text-center">
          <div class="second-section__title">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </div>
          <div class="second-section__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div> -->

<!--     <div class="overlay-image mt-4 text-center">
        <div class="overlay-image-background d-flex align-items-center justify-content-center flex-column">
            <div class="title" style="font-size:30px">Lorem Ipsum is not simply random text.</div>
            <div class="description mt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </div>
            <router-link class="navbar__el" to="/about">
              <div class="overlay-button mt-4">
              Bize Ulaşın
             </div> 
          </router-link>
        </div>
    </div>
     -->

<!--     <div class="middle-section container mt-4">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium. </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/humanElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium..</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/panaromicElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar3</h5>
                <p class="card-text">Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium.</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/cargoElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair4.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar4</h5>
                <p class="card-text">Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium. </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/stretcherElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair5.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar5</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium. </p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/hidrolicElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/asansor/fair/fair6.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fuar6</h5>
                <p class="card-text">Lorem ipsum dolor sit amet. Quo esse voluptatibus et veniam voluptatem non dolores asperiores eos iure obcaecati. Et eius assumenda sit tempora omnis qui deleniti distinctio et ratione praesentium.</p>
                <p  class="btn btn-primary">
                 <router-link @click="scrollToTop" to="/carElevator" class="decoration-none"> <a class="middle-buton-text" href="#">Devamını Gör</a></router-link>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
 -->
    <div class="mt-4">
      <div class="row">
        
        <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/1.png" alt="Card image cap">
            </div>
          </div>
          
          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/2.png" alt="Card image cap">
            </div>
          </div>
          
          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/3.png" alt="Card image cap">
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/4.png" alt="Card image cap">
            </div>
          </div>
          
          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/5.png" alt="Card image cap">
            </div>
          </div>
          
          <div class="col-12 col-md-6 col-lg-4 ass-tulip">
            <div class="card text-center
            " style="width: 18rem;">
              <img class="card-img-top" src="../../assets/partners/6.png" alt="Card image cap">
            </div>
          </div>


      </div>
    </div>


  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";  
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  
  
  // import required modules
  import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination, Autoplay],
      };
    },
    methods: {
    scrollToTop() {
          window.scrollTo({top : 0,left: 0, behavior: 'instant'});
       }
    }

  };
  </script>
  
  <style>
    @import './style.scss';

    .card-text {
      overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    }

    .middle-buton-text {
      color:white!important;
      text-decoration :none;
    }
  </style>