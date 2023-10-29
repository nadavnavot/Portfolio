<template>
    <div>
      <navbar />
      <div class="margins">
        <h1 class="h1">Ride & Fly</h1>
        <div class="flexContainer">
          <div class="leftSide">
            <h3 class="h3">Project Description:</h3>
            <p class="text">
              Ride & Fly is an external service I developed for Ryanair that should benefit the company and its consumers together.
              Ride & Fly is a carpool app that aims to help Ryanair’s passengers to arrive safely and affordably to their early morning flights and to help Ryanair have more passengers for these flights when the planes tend to be emptier than flights at other times of the day.
              I developed this project during two semesters where I did the full process of product development. Research, UX research, design & prototyping, and programming. The user can view the available rides, check the ride's information, book the ride, and chat with the driver.
            </p>
          </div>
          <div class="rightSide">
            <h3 class="h3 gardient-text">Used Technologies</h3>
            <div class="icons-project">
              <img src="../assets/icons/html.png">
              <img src="../assets/icons/css.png">
              <img src="../assets/icons/vue.png">
              <img src="../assets/icons/api.png">
              <img src="../assets/icons/mongo.png">
              <img src="../assets/icons/postman.png">
              <img src="../assets/icons/npm.png">
            </div>
          </div>
        </div>
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
          ref="swiperInstance"
        >
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Loading page</h2>
              <div class="responsive-container">
                <img style="width: 30px ;" src="../assets/pics/ride-fly.png">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Booking ride process</h2>
              <div class="responsive-container">
                <video style="height: 520px;" src="../assets/pics/booking.mp4" ref="video1" controls autoplay loop>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class= "slide-content">
              <h2 class="slide-title">Chat functionality</h2>
              <div class="responsive-container">
                <video style="height: 520px;" src="../assets/pics/chat.mp4" ref="video2" controls
                 autoplay loop>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Homepage</h2>
              <div class="responsive-container">
                <img style="max-width: 20%;" src="../assets/pics/homepage.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Ride overview</h2>
              <div class="responsive-container">
                <img style="max-width: 70%;margin-left: 70px;" src="../assets/pics/2.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Used technologies</h2>
              <div class="responsive-container">
                <img style="max-width: 75%;" src="../assets/pics/1.png" alt="">
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
  import navbar from "../components/navbar.vue";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { Pagination, Navigation } from "swiper";
  
  export default {
    components: {
      navbar,
      Swiper,
      SwiperSlide
    },
  
    setup() {
      const modules = [Pagination, Navigation];
      const swiperInstance = ref(null);
      const video1 = ref(null);
      const video2 = ref(null);
  
      const playVideo = (videoElement) => {
        if (videoElement) {
          videoElement.play().catch((error) => {
            // Handle any errors when playing the video
            console.error("Error playing video:", error);
          });
        }
      };
  
      const pauseVideo = (videoElement) => {
        if (videoElement) {
          videoElement.pause();
        }
      };
  
      onBeforeMount(() => {
        if (swiperInstance.value) {
          swiperInstance.value.on("slideChange", () => {
            const activeIndex = swiperInstance.value.activeIndex;
            const videos = [video1.value, video2.value];
  
            // Pause all videos when changing slides
            videos.forEach(pauseVideo);
  
            // Play the video on the active slide
            if (activeIndex >= 1 && activeIndex <= 2) {
              playVideo(videos[activeIndex - 1]);
            }
          });
        }
      });
  
      onMounted(() => {
        // Ensure that the initial video plays when the component is mounted
        const activeIndex = swiperInstance.value.activeIndex;
        if (activeIndex >= 1 && activeIndex <= 2) {
          playVideo([video1.value, video2.value][activeIndex - 1]);
        }
      });
  
      onBeforeUnmount(() => {
        // Ensure that all videos are paused when the component is unmounted
        const videos = [video1.value, video2.value];
        videos.forEach(pauseVideo);
      });
  
      return {
        modules,
        swiperInstance,
        video1,
        video2,
      };
    },
  };
  </script>
  <style scoped>
  .margins {
    padding: 20px 60px 30px 80px;
  }
  
  .flexContainer {
    display: flex;
    flex-direction: row;
  }
  .rightSide {
    width: 50%;
    margin-top: -30px;
    padding-left: 140px;
  }
  .leftSide {
    width: 50%;
    margin-top: -20px;
  }
  
  .text {
    margin-right: 52px;
  }
  .mySwiper {
    margin: -100px 0 70px 0;
    max-width:100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
}

.mySwiper img {
    max-width: 30%;
    min-width: 20%;
    height: auto;
    margin-top: 120px;
}

.mySwiper video {
    max-width: 50%;
    min-width: 40%;
    height: auto;
    margin-top: 140px;

}
  
  .icons-project {
    margin-bottom: 50px;
  }
  .icons-project img {
    max-width: 70px;
    max-height: 60px;
    padding-right: 20px;
    padding-bottom: 20px;
    object-fit: contain;
  }
  
  @media (max-width: 769px) {
    .flexContainer {
      flex-direction: column;
    }
  
    .rightSide {
      margin-top: 10px;
      padding-left: 0;
      width: 100%;
    }
  
    .leftSide {
      margin-top: 10px;
      width: 100%;
    }
  
    .margins {
      padding: 20px 10px 30px 20px;
    }
    .mySwiper img {
    margin-top: 200px;
}
.mySwiper video {

    margin-top: 80px;

}
  }
.slide-content {
  position: relative;
}

.slide-title {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: black;
  font-family: Work Sans;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;  padding: 5px 10px;
  border-radius: 5px;
  z-index: 2;
  background-color:rgb(0, 101, 227);
  color: white;
  border-radius: 3px;
  padding: 10px;
}
  </style>
  