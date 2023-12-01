<script>
import navbar from '../components/navbar.vue';
import welcome from '../components/welcome_page.vue';
import Project_button from '../components/project_button.vue';
export default {
  components: {
    navbar, welcome, Project_button
  }
};
</script>
<template>
  <div>
    <welcome />
    <div id="about"></div>

    <navbar />

    <section class="margins">
      <div class="flex-container">
        <div class="left-side">
          <h2 class="about_title">About Me</h2>
          <p class="about-text">As an Information Management and Multimedia student I specialize in creating digital
            products or as
            I like to call it “<span class="gardient">Bringing products and ideas to life</span>”. All the way from the
            vision
            to the design to a fully finished and coded digital product.
            <br><br>My true passion is web development. With a solid understanding of the product development cycle,
            design
            principles, and coding skills, I bring a unique touch to any team I work with.
            <br>When I’m not in front of my computer, you can probably find me running outside or listening to podcasts on
            various topics from history to personal development and language teaching.
          </p>
        </div>
        <div class="right-side">
          <div class="porfile-img-wrapper">
          <img src="../assets/pics/profile.png" class="porfile_img"></div>
        </div>
      </div>
    </section>
    <section class="margins">
      <h2 class="skills_title">Skills & Tools</h2>
      <p class="subtitle grey">Some of the technologies I use to build my products</p>
      <div class="center_wrapper">
        <div class="row">
          <img src="@/assets/icons/html.png">
          <img src="@/assets/icons/css.png">
          <img src="@/assets/icons/js.png">
          <img src="@/assets/icons/vue.png">
          <img src="@/assets/icons/adobe.png">
          <img src="@/assets/icons/php.png">
          <img src="@/assets/icons/sql.png">
          <img src="@/assets/icons/api.png">
          <img src="@/assets/icons/postman.png">
          <img src="@/assets/icons/wordpress.png">
          <img src="@/assets/icons/github.png">
          <img src="@/assets/icons/git.png">
          <img src="@/assets/icons/mongo.png">
          <img src="@/assets/icons/figma.png">
          <img src="@/assets/icons/npm.png">
        </div>
      </div>
    </section>
    <section>
      <h2 class="skills_title" style="margin: 50px 50px;">Main projects</h2>

      <div class="project_section ">
        <div class="left-side">
          <div class="blue">
            <h2 class="project-title">Ride & Fly</h2>
            <p class="project-text">Ride & Fly is an external service I developed for Ryanair that should benefit the
              company and its consumers
              together.</p>
            <p class="project-text">Ride & Fly is a carpool app that should help Ryanair’s passengers to arrive safely and
              affordably to their
              early morning flights and to help Ryanair to make the plane more full.</p>
              <router-link to="/ride-fly" ><Project_button title="View Project" class="project_button" /></router-link>
          </div>
        </div>
        <div class="right-side">
        <img class="project-image" src="../assets/pics/ride.jpg">
      </div>
      </div>
    </section>
    
    <section>
      <div class="project_section">
        <div class="right-side">
        <img class="project-image macbook-pc" src="../assets/pics/macbook.png">
</div>
        <div class="left-side">
          <div class="blue green">
            <h2  class="project-title">Webshop</h2>
            <p  class="project-text">A webshop of referbished smartphones.
           Find your next smartphone through our webshop.</p>
            <p class="project-text">Simply choose your next device and place an order!
            </p> 
            <router-link to="/webshop" ><Project_button class="project_button" title="View Project" /></router-link>

          </div>
        </div>
        <img class="project-image macbook-mobile" src="../assets/pics/macbook.png">

      </div>
    </section>
    <section>
      <div class="black-projects">
        <router-link to="/work" class="projects-links" >
          <h1 class="more_projects">Check out more of my projects</h1>
          <div class="big_arrow_container">
          <img src="../assets/pics/big-arrow.png" class="big-arrow">
        </div>
      </router-link>
      </div>
    </section>
    <section>
      <div class="contact_section">
        <img src="../assets/pics/pic2.png" width="150px">
        <h3 class="contact_title">Let's work together!</h3>
        <div class="buttons_wrapper">
        <a href="https://www.linkedin.com/in/nadav-navot-193147222"><img class="contact-icons" src="../assets/pics/linkedin-icon.png"></a>
        <a href="mailto:r0878178@student.thomasmore.be"><img class="contact-icons" src="../assets/pics/gmail.png"></a>
      </div>
      </div>
    </section>
    
  </div>
</template>

<style scoped>

.margins {
  margin: 100px 30px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.left-side {
width: 50%;
  text-align: center; 

}

.right-side {
width: 50%;
text-align: center; 
}


.about_title {
  font-family: Work Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  color: black;
  text-align: left;

}

.about-text {
  text-align: left;
  color: rgba(0, 0, 0, 0.69);
  font-family: Work Sans;
  font-size: 22px;

}

.gardient {
  background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
  z-index: 2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.porfile_img {
  max-width: 40%;
  min-width: 320px;
  border-radius: 18px;
}
.porfile-img-wrapper{
  text-align: right;
}
.skills_title {
  font-family: Work Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.subtitle {
  font-family: Work Sans;
  font-size: 22px;
  margin-bottom: 80px;
}

.grey {
  color: #777676;
}

.center_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
}

.row img {
  max-width: 120px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 50px;
  transition: transform .4s; 

}

.row img:hover{
  transform: scale(1.3); 
}

.project_section {
  display: flex;
flex-direction: row;
margin-right: 0;
justify-content: flex-start;
}


.blue {
  background: rgba(32, 145, 235, 0.77);
  height: 670px;
  color: white;
  position: relative;
  padding: 30px 0px 800px 20px;
}

.green {
  background: linear-gradient(180deg, rgba(32, 191, 85, 0.37) 0%, #01BAEF 87.97%);
}

.project-title {
  font-family: Work Sans;
  font-size: 32px;
  text-align: left;
  padding-top: 10px;
  padding-left: 30px;
}

.project-text {
  font-family: Work Sans;
  font-size: 22px;
  text-align: left;
  padding: 10px 80px 0px 30px;
}

.project-image {
  max-width: 90%;
  max-height: 600px;
  padding-top: 200px;
  padding-bottom: 150px;
  margin: 0 auto; 
}

.project_button {
  position: absolute;
  right: 40px;
  bottom: 90px;
}

.black-projects {
  background-color: black;
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.projects-links:hover .big-arrow {
  transform: translateX(20px);
}

.big-arrow {
  padding-left: 20px;
  transition: transform 0.3s ease;
  width: 11%;
}
.big_arrow_container{
  display: inline;
}
.more_projects {
  text-align: center;
  color: white;
  font-family: Work Sans;
  font-size: 30px;
  display: inline;
  text-align: center;
justify-content: center;  text-decoration: underline #20BAEB;
}

.contact_section {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
  width: 100%;
  height: 605px;
  color: black;
}

.contact_title {
  font-family: Work Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
}.contact-icons{
    margin-top: 40px;
    width: 110px; height: auto;
    padding-left: 20px;
    padding-right:20px;
    transition: transform .4s; 

}

.contact-icons:hover{
  transform: scale(1.3); 
}
.macbook-mobile {
  display: none;
}
@media (min-width: 600px) {
  .flex-container {
    flex-direction: row;
  }
}

@media (max-width: 900px) {
  .project_section {
    flex-direction: column;
  }

  .macbook-mobile {
    display: inline;
  }

  .macbook-pc {
    display: none;
  }
  .right-side{
    width: 100%;
  }
  .left-side{
    width: 100%;
  }
  .porfile-img-wrapper {
    text-align: center;
    margin-top: 50px;
    margin-left: -10px;
  }

}</style>