<script>
import navbar from '../components/navbar.vue'

export default {
  components: {
    navbar
  }
};
</script>


<template>
    <navbar/>
    <div class="contact-background">
        <div class="contact-center">
          <img src="../assets/pics/pic2.png" width="150px">
                    <h3 class="contact_title">Let's work together!</h3>
        <h4 class="contact_subtitle">(Reply in less than 24h is guaranteed)</h4>
          <a href="https://www.linkedin.com/in/nadav-navot-193147222"><img class="contact-icons" src="../assets/pics/linkedin-icon.png"></a>
        <a href="mailto:r0878178@student.thomasmore.be"><img class="contact-icons" src="../assets/pics/gmail.png"></a>
        
    </div>
    </div>
</template>

<style scoped>
.contact-icons{
    margin-top: 40px;
    width: 70px; height: 70px;
    padding-left: 20px;
    padding-right:20px;
    transition: transform .4s; 

}

.contact-icons:hover{
  transform: scale(1.3); 
}

.contact-center{
    margin-top: 250px;
text-align: center;
}

.contact_title{
    font-family: Work Sans;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.contact_subtitle{
    font-family: Work Sans;
font-size: 24px;
font-style: normal;
font-weight:200;
line-height: normal;
}

.contact-background{
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
  background: var(--liner, linear-gradient(228deg, rgba(32, 191, 85, 0.37) 0%, #01BAEF 100%));
}



</style>