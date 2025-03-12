<template>
    <div class="outContainer">
        <div class="swContainer">
        <swiper
        :key="data.length"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide v-for="(item, index) in data" :key="item">
        <img :src="item.url">
        </swiper-slide>
        </swiper>
    </div>
    </div>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import { ref, defineProps } from 'vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination } from 'swiper/modules';
    // import { data } from 'autoprefixer';

  
    export default {
      props: {
        data: {
            type: Array,
            required: true,
            default: () => []
        }
      }, 
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>
  
  <style scoped>
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        overflow: hidden;
        text-align: center;
        font-size: 18px;
        border-radius: 16px;
        /* background: #e37d7d; */

    /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        overflow: hidden;
        /* display: block; */
        width: 100%;
        /* width: 1280px; */
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
        
    }
    .swContainer {
        border-radius: 16px;
        display: flex;
        max-width: 1280px;
        width: 100%;
        height: 720px;
    }
    .outContainer {
      padding: 16px 0;
      display: flex;
      justify-content: center;
    }

</style>
  