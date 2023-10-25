
<script>
import navbar from '../components/navbar.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';


export default {
    components: {
        navbar,
        Swiper,
        SwiperSlide
    },

    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    }
};
</script>
<template>
    <div>
        <navbar />
        <div class="margins">
            <h1 class="h1">Ride & Fly</h1>
            <div class="flexContainer"> 
                <div class="leftSide">
                <h3 class="h3 ">Project Description</h3>
                <p class="text">
                    Ride & Fly is an external service I developed for Ryanair that should benefit the company and its
                    consumers together.
                    Ride & Fly is a carpool app that should help Ryanair’s passengers to arrive safely and affordably to
                    their early morning flights and to help Ryanair to make the plane more full.
                    ide & Fly is an external service I developed for Ryanair that should benefit the company and its
                    consumers together.
                    Ride & Fly is a carpool app that should help Ryanair’s passengers to arrive safely and affordably to
                    their early morning flights and to help Ryanair to make the plane more full.
                </p></div>
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
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide><img src="../assets/pics/ride-fly.png" alt=""></swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
            </swiper>

           
    </div></div>
</template>

<style scoped>
.margins {
    padding: 20px 60px 30px 80px;
}

.flexContainer{
    display: flex;
    flex-direction: row;
}
.rightSide{width: 50%;
    margin-top: -30px;
padding-left: 140px;
}
.leftSide{width: 50%;
margin-top: -20px;
}

.text{
    margin-right: 52px;
}
.mySwiper{
    margin: 70px 0 70px 0;
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;    
}
.mySwiper img {
    max-width: 700px;
  max-height: 400px; 
    margin-top: 0px;
}
.icons-project{
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
    .rightSide{
    margin-top: 10px;
}
.leftSide{
margin-top: 10px;
}

    .margins {
        padding: 20px 10px 30px 20px;
    }
}
</style>