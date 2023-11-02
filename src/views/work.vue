<script>
import navbar from '../components/navbar.vue';
import confetti from '../components/confetti.vue';
import Project_button from '../components/project_button.vue';

export default {
  
  components: {
    navbar, Project_button,confetti
  },
  
};
</script>

<template>
  <div>
    <navbar />
    <h2 class="major-title projects-title">Major Projects</h2>
    <div class="card-container">
      <div class="card" style="  
">
        <h1 class="card-title">Ride & Fly</h1>
        <h3 class="card-subtitle" style="color: #53AAF0">An external service I developed for Ryanair that should benefit the
          company and its consumers as one.</h3>
        <div class="code-icons">
          <img src="@/assets/icons/vue.png" alt="">
          <img src="@/assets/icons/html.png" alt="">
          <img src="@/assets/icons/css.png" alt="">
        </div>
        <img class="card-pic" src="@/assets/pics/ride-fly.png" style="margin-bottom: 75px;">
        <div style="margin-top: -18px;" class="button-position">
          <a href="./ride-fly"><Project_button title="View Project" /></a>
        </div>
      </div>
      <div class="card">
  <h1 class="card-title">Webshop</h1>
  <h3 class="card-subtitle">A webshop of refurbished smartphones.</h3>
  <div class="code-icons webshop-icons">
    <img src="@/assets/icons/php.png" alt="">
    <img src="@/assets/icons/sql.png" alt="">
    <img src="@/assets/icons/css.png" alt="">
  </div>
  <img class="webshop-pic" src="@/assets/pics/macbook.png" style="margin-top: -20px;">
  <div class="button-position">
    <a href="./Webshop"><Project_button title="View Project" /></a>
  </div>
</div>

    </div>
    <h2 class="side-title projects-title">Side Projects</h2>
    <div class="card-container">
<div class="card">
        <h1 class="card-title">Cheers</h1>
        <h3 class="card-subtitle">The app every beer lover needs</h3>
        <div class="code-icons">
          <img src="@/assets/icons/js.png">
          <img src="@/assets/icons/html.png">
          <img src="@/assets/icons/css.png">
        </div>
        <img class="card-pic small-pic cheers-pic" src="@/assets/pics/cheers.png" width="100%">
        <div class="button-position">
<h4 class="upload_title">Will be uploaded soon...</h4>   
     </div>
      </div>
      <div class="card">
        <h1 class="card-title">Weather App</h1>
        <h3 class="card-subtitle">Weather information by location</h3>
        <div class="code-icons">
          <img src="@/assets/icons/api.png">
          <img src="@/assets/icons/js.png">
          <img src="@/assets/icons/html.png">
          <img src="@/assets/icons/css.png">
        </div>
        <img class="card-pic small-pic" src="@/assets/pics/weather.png">
        <div class="button-position">
          <h4 class="upload_title">Will be uploaded soon...</h4>   
        </div>
      </div>
    </div>
    <div class="emoji-background">
      <h1 class="emoji-text"><span class="emoji-gardient-text">More exciting projects are cooking! </span> <br> Stay tuned
        💫</h1>
    </div>
  </div>
</template>

<style scoped>
.projects-title {
  text-align: center;
  font-style: normal;
  display: grid;
  grid-template-columns: minmax(5px, 1fr) auto minmax(5px, 1fr);
  grid-gap: 20px;
  margin-top: 60px;
}

.major-title {
  font-family: Work Sans;
  font-size: 32px;

}

.side-title {
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 400;
}

h2:before,
h2:after {
  content: '';
  border-top: black 2px solid;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
}

.card-container {
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-bottom: 130px;
}

.webshop-pic {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 105px;
}

.webshop-icons {
  padding-bottom: 62px;
  margin-top: 200px;
}


.card-title {
  font-family: Work Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.upload_title {
  font-family: Work Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
/* .subtitle-icons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: -20px;
} */

.card-subtitle {
  font-family: Work Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.code-icons {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 30px;
}

.code-icons img {
  object-fit: contain;
  max-width: 40px;
  max-height: 40px;
  margin-left: 10px;
}

.card {
  padding: 10px 20px 1px 20px;
  background-color: #fff;
  max-width: 400px;
  min-width: 400px;
  max-height: 750px;
  min-height: 750px;
  margin-top: 70px;
  border-radius: 10px;
  margin-right: 50px;
  margin-left: 50px;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.13);
  text-align: left; 
}

.card-pic {
  display: block;
  margin: 0 auto;
  width: 150px; 
  height: auto; 
}

.card-pic.small-pic {
  margin-top: 80px; 
}

.cheers-pic{
  width: 165px;
}
.button-position {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 30px;
}

.emoji-background {
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.emoji-text {
  text-align: center;
  font-family: Work Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: white;
}

.emoji-gardient-text {
  background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}</style>