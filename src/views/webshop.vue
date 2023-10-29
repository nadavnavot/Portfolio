
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
            <h1 class="h1">Webshop</h1>
            <div class="flexContainer"> 
                <div class="leftSide">
                <h3 class="h3">Project Description:</h3>
                <p class="text">
                    A webshop of refurbished smartphones where the User can add items to the cart and check out. <br><br>After the user's order, the database updates the order's information, including the client details and the purchased products. </p></div>
                <div class="rightSide">
                <h3 class="h3 gardient-text">Used Technologies</h3>
            <div class="icons-project">
                <img src="@/assets/icons/php.png">
                <img src="@/assets/icons/css.png">
                <img src="@/assets/icons/sql.png">
                <img src="@/assets/icons/mysql.png">
            </div>
        </div>
    </div> 
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Homepage</h2>
              <div class="responsive-container">
                <img src="../assets/pics/macbook.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>    
            <div class="slide-content">
              <h2 class="slide-title">Homepage</h2>
              <div class="responsive-container">
                <img src="../assets/pics/homepage2.png" alt="">
              </div>
            </div>
          </swiper-slide>         
           <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Detail page</h2>
              <div class="responsive-container">
                <img src="../assets/pics/details.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Checkout page</h2>
              <div class="responsive-container">
                <img src="../assets/pics/checkout.png" alt="">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-content">
              <h2 class="slide-title">Database</h2>
              <div class="responsive-container">
                <img src="../assets/pics/data.png">
              </div>
            </div>
          </swiper-slide>
            </swiper>

           
    </div></div>
</template>

<style scoped>
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
    max-width: 50%;
    min-width: 40%;
    height: auto;
    margin-top: 0px;
    padding-top: 200px;   
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
}

.data img{
  width: 4000px;
}

</style>