<template>
  <!-- img -->
  <div class="my-10" v-if="!showVideo">
    <div class="text-center title mb-5 font-bold text-xl md:text-2xl lg:text-3xl">{{ title }}</div>
    <swiper
      :key="data.length"
      slidesPerView = "3.2"
      spaceBetween = "8" 
      :breakpoints = "{
        '420': {
          slidesPerView: data.length > 3 ? 3.2 : 3,
          spaceBetween: 16,
          },
      }"
    >
      <swiper-slide
        v-for="(item, index) in data" 
        :key="item"
        >
        <div class="overflow-hidden rounded-lg aspect-[9/16] relative w-full cursor-pointer">
          <img 
            :src="item.img" 
            alt="image" 
            class="w-full h-full object-cover"
            @click="showVideo = true, initialSlide = index"
          >
          <div class="absolute bottom-0 left-0 right-0 z-10 text-md md:text-base lg:text-lg text-white text-center drop-shadow-custom px-2 mb-2 truncate">
            {{ item.name }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- video -->
  <div class="fixed inset-0 bg-black z-50" v-if="showVideo">
    <swiper
      class = "w-full h-full"
      direction="vertical"
      observer
      observe-parents
      prevent-clicks
      :keyboard="{ enabled: true }"
      :mousewheel="true"
      :modules="modules"
      :initialSlide="initialSlide"
      :loop="data.length > 1"
      @slideChangeTransitionEnd="onSlideChange"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(item, index) in data" 
        :key="item"
        class="w-full h-full d-flex justify-center items-center"
        >
        
        <video 
          v-if="index === nowPlayIndex"
          ref="videoRefs" 
          :src="item.url"
          :class="aspectRatio > 0.5625 ? 'short-video-x' : 'short-video-y'"
          :autoplay="isAutoplay"
          :loop="isVideoLoop"
          @click="showControl = !showControl"
          @ended="handleVideoLoopPlayback()"
          @canplay="videoCanPlay()"
          @timeupdate="updateProgress()"
        >
        </video>

        <!-- info -->
        <div 
          v-if="showVideo && showControl"
          :class="aspectRatio > 0.5625 ? 'story-footer-x' : 'story-footer-y'"
          class="pb-6"
        >
          <div class="flex justify-between items-center mx-3">
            <div 
              class="text-white flex items-center cursor-pointer"
            >
              <img :src=item.img alt="cover" class="w-[30px] h-[30px] object-cover rounded-full">
              <span class="ms-2 host-name-wrap">{{ item.name }}</span>
            </div>
            <div class="back-icon-wrap rounded-full cursor-pointer">
              <span class="mdi mdi-alpha-m text-3xl text-white"/>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>


    <!-- button -->
    <!-- top left -->
    <div 
      v-if="showVideo && showControl"
      class="flex justify-between px-3 mt-5"
      :class="aspectRatio > 0.5625 ? 'top-left-icons-x' : 'top-left-icons-y'"  
    >
      <div 
        class="back-icon-wrap rounded-full cursor-pointer"
        @click="showVideo = showControl = false"
      >
        <span class="mdi mdi-arrow-left-thin text-3xl text-white"/>
      </div>
    </div> 
    <!-- top right -->
    <div 
      v-if="showVideo && showControl"
      class="flex justify-between px-3 mt-5"
      :class="aspectRatio > 0.5625 ? 'top-right-icons-x' : 'top-right-icons-y'"  
    >
      <div>
        <div class="back-icon-wrap rounded-full cursor-pointer mb-3">
          <span 
            class="mdi mdi-arrow-left-thin text-xl text-white"
            :class="isMuted ? 'mdi mdi-volume-off' : 'mdi mdi-volume-high'"
            @click="isMuted = !isMuted"
          />
        </div>
        <div class="back-icon-wrap rounded-full cursor-pointer mb-3">
          <span class="mdi mdi-heart-outline text-xl text-white"/>
        </div>
        <div class="back-icon-wrap rounded-full cursor-pointer mb-3">
          <span class="mdi mdi-bookmark-outline text-xl text-white"/>
        </div>
        <div class="back-icon-wrap rounded-full cursor-pointer mb-3">
          <span class="mdi mdi-share text-xl text-white"/>
        </div>
      </div>
    </div> 

    <!-- video control -->
    <div 
      v-if="showVideo && showControl"
      :class="aspectRatio > 0.5625 ? 'player-control-x' : 'player-control-y'"
      class="flex items-center justify-center"
    >
      <span 
        class="text-3xl text-white ms-2 cursor-pointer"
        :class="isPlay ? 'mdi mdi-pause' : 'mdi mdi-play'"
        @click="play()"
      />
      <div class="relative flex-grow h-2 bg-gray-600 rounded-full mx-2">
        <input 
          type="range" 
          min="0" 
          max="100" 
          v-model="percentage" 
          @input="changeVideoCurrentTime"
          class="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div 
          class="absolute h-full bg-white rounded-full"
          :style="{ width: `${percentage}%` }"
        ></div>
      </div>
      <div class="mx-2">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </div>
    </div>
  </div>

</template>
<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Pagination, Keyboard, Autoplay } from 'swiper/modules';
  import { ref, defineProps, onMounted, onUnmounted, watch } from 'vue';
  import 'swiper/css';
  const modules = [ Mousewheel, Pagination, Keyboard, Autoplay ]
  
  const showVideo = ref(false);
  const showControl = ref(false);
  const initialSlide = ref(0);
  const swiperRefs = ref(null);


  const onSwiper = (swiper) => {
    swiperRefs.value = swiper
  };
  const onSlideChange = (swiper) => {
    setTimeout(() => {
      nowPlayIndex.value = swiper.realIndex || 0
    }, 300)
  };
  const props = defineProps({
    data: {
    type: Array,
    required: true,
    default: () => ([])
    },
    title: {
      type: String,
    },
    isMuted: {
      type: Boolean,
      default: false
    },
    isAutoplay: {
      type: Boolean,
      default: true
    },
    isVideoLoop: {
      type: Boolean,
      default: true
    },
    videoAutoplayCount: {
      type: Number,
      default: 0,
      validator: (value) => {
      return Number.isInteger(value) && value >= 0
      }
    }
  })

  // video
  const duration = ref(0)
  const videoRefs = ref(null)
  const isPlay = ref(false)
  const isMuted = ref(props.isMuted)
  const isVideoLoop = ref(props.isVideoLoop)
  const currentTime = ref(0)
  const percentage = ref(0)
  const nowPlayIndex = ref(0)
  const shortPlayCount = ref(0)

  const videoCanPlay = () => {
    duration.value = Math.floor(videoRefs.value[0].duration)
    isPlay.value = props.isAutoplay
    videoRefs.value[0].muted = isMuted.value
  }
  const play = () => {
    isPlay.value? videoRefs.value[0].pause() : videoRefs.value[0].play()
    isPlay.value = !isPlay.value
  }
  const updateProgress = () => {
  currentTime.value = videoRefs.value[0].currentTime
  percentage.value = (currentTime.value / duration.value) * 100
  }
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  const handleVideoLoopPlayback = () => {
    if (props.videoAutoplayCount === 0) return 
    shortPlayCount.value += 1
    if (shortPlayCount.value >= props.videoAutoplayCount) {
      shortPlayCount.value = 0
      swiperRefs.value.slideNext()
    } else {
      videoRefs.value[0].play()
    }
  }
  const changeVideoCurrentTime = () => {
    if (videoRefs.value && videoRefs.value[0]) {
      const newTime = (percentage.value / 100) * duration.value;
      videoRefs.value[0].currentTime = newTime;
      currentTime.value = newTime;
    }
  };

  watch (isMuted, (newVal) => {
    if(newVal) {
      videoRefs.value[0].muted = true
    } else {
      videoRefs.value[0].muted = false
    }
  })

  onMounted(() => {
    isVideoLoop.value = !(props.videoAutoplayCount > 0)
  })

  // aspect ratio 
  const aspectRatio = ref(1)
  const updateAspectRatio = () => {
    aspectRatio.value = window.innerWidth / window.innerHeight;
  }
  onMounted(() => {
    updateAspectRatio();
    window.addEventListener('resize', updateAspectRatio);
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateAspectRatio);
  })

</script>

<style scoped lang="scss">
.title {
  position: relative;
  &::before  {
    content: ""; 
    position: absolute; 
    border-bottom: 2px solid var(--vp-home-hero-name-color);
    width: 40px;
    left:  calc(50% - 20px);
    bottom: -4px;
  }
  @media (min-width: 768px){
    &::before  {
      border-bottom: 3px solid var(--vp-home-hero-name-color);
    }
  }
  @media (min-width: 992px){
    &::before  {
      border-bottom: 5px solid var(--vp-home-hero-name-color);

    }
  }
}

.short-video-x {
  position: absolute;
  width: calc(100dvh * 0.5625);
  left: 50%;
  transform: translateX(calc(-100dvh * 0.5625/2));
  z-index: 0;
  display: flex;
  align-items: start;
  justify-content: center;  
}
.short-video-y {
  position: absolute;
  width: 100vw;  
  height: calc(100vw * 16 / 9);
  bottom: 50%;
  transform: translateY(calc(100vw * 16 / 18));
  overflow-y: auto;
  z-index: 0;
  display: flex;
  align-items: start;
  justify-content: center;  
}
.top-left-icons-x {
  position: absolute;
  color: white;
  left: 50%;
  top: 0%;
  transform: translateX(calc(-100dvh * 0.5625/2));
  z-index: 100;
}
.top-right-icons-x {
  position: absolute;
  color: white;
  right: 50%;
  top: 0%;
  transform: translateX(calc(100dvh * 0.5625/2));
  z-index: 100;
}
.top-left-icons-y {
  position: absolute;
  color: white;
  width: 100%;
  top: 50%;
  transform: translateY(calc(-100vw * 16 / 18));
  z-index: 100;
}
.top-right-icons-y {
  position: absolute;
  color: white;
  top: 50%;
  right: 0%;
  transform: translateY(calc(-100vw * 16 / 18));
  z-index: 100;
}

.player-control-x {
  position: absolute;
  color: white;
  bottom: 100px;
  width: calc(100dvh * 0.5625 - 24px);
  left: 50%;
  transform: translateX(calc(-100dvh * 0.5625/2 + 12px));
  background: rgba(0,0,0,0.5);
  z-index: 100;
  border-radius: 25px;
  
}
.player-control-y {
  position: absolute;
  color: white;
  width: calc(100vw - 24px);
  bottom: 50%;
  left: 12px;
  transform: translateY(calc(100vw * 16 / 18 - 100px));
  background: rgba(0,0,0,0.5);
  z-index: 100;
  border-radius: 25px;
}
.story-footer-x {
  position: absolute;
  color: white;
  bottom: 0;
  width: calc(100dvh * 0.5625);
  left: 50%;
  transform: translateX(calc(-100dvh * 0.5625/2));
  z-index: 100;
}
.story-footer-y {
  position: absolute;
  color: white;
  width: 100%;
  bottom: 50%;
  transform: translateY(calc(100vw * 16 / 18));
  z-index: 100;
}
.back-icon-wrap {
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.host-name-wrap {
  background: rgba(0,0,0,0.5);
  padding: 2px 8px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
</style>