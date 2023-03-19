<template>
    <div class="header" :class="{change_color: scrollPosition > 50}">
        <div class="mek_navbar container">
            <router-link to="/" ><img class="navbar__el" style="height: 50px;align-self: start;" src="../assets/logo.png"/></router-link>
            <div class="routers">
                <div class="dropdown">
                <button :class="{change_color: scrollPosition > 50}"  style="color:#a377a7;" class="btn" type="button" id="fuar_takvimi"  aria-expanded="false">
                    <router-link @click="scrollToTop" to="/fuar_takvimi" class="decoration-none"> <b>{{ $t("message.fair_calendar") }}</b></router-link>
                </button>
                <button :class="{change_color: scrollPosition > 50}"  style="color:#a377a7;" class="btn" type="button" id="hakkımızda" aria-expanded="false">
                    <router-link @click="scrollToTop" to="/about_nova" class="decoration-none"> <b>{{ $t("message.about_us") }}</b></router-link>
                </button>
                <button :class="{change_color: scrollPosition > 50}"  style="color:#a377a7;" class="btn" type="button" id="iletişim" aria-expanded="false">
                    <router-link @click="scrollToTop" to="/about" class="decoration-none"><b>{{ $t("message.contact") }}</b></router-link>
                </button>
                <button :class="{change_color: scrollPosition > 50}" ref="language" style="color:#a377a7;" id="language" class="btn" type="button" aria-expanded="false" @click="changeLanguage()">
                    English

                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                scrollPosition: null,
            }
        },
        methods: {
            call() {
                window.open('tel:05308236472');
            },
            updateScroll() {
            this.scrollPosition = window.scrollY
            },
          scrollToTop() {
            window.scrollTo({top : 0,left: 0, behavior: 'instant'});
            },
            changeLanguage(){
               if(this.$refs.language.innerText=="Turkish"){
                    this.$refs.language.innerText="English";
                    this.$i18n.locale = "tr";
               }
               else{
                    this.$i18n.locale = "en";
                    this.$refs.language.innerText="Turkish";
               }

               console.log(this)


      }
          },
      mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
    }

</script>

<style>
    .header-top__item {
      margin-right: 5px;
    }

    .header {
        background-color: white;
        color: white;
        position: sticky; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */        
        z-index: 999;
    }

    .top {
        background-color: black;
        color: white;
        padding: 10px;
    }

    .mek_navbar {
        display: flex;
        align-items: center;
        justify-content: space-between!important;
    }

    .navbar__el {
        margin: 10px 0px;
        text-decoration: none;
        color: white;
    }

    .change_color {
       background-color:white;
       border-bottom: 1px solid lightgray;
       transition: .2s;
   }
   .routers {
    display: flex;
    align-items: center;
    
   }

    .color_black {
        color: black!important;
    }

    .decoration-none {
        text-decoration: none!important;
        color: #a377a7;
    } 
</style>