<script>
export default {
  name: 'welcome'
};
</script>

<template>
  <div class="black">
    <div class="texts_box">
      <h1 class="main_title">Hi! I’m <span class="gardient">Nadav Navot</span> <br> Front End Developer</h1>
      <div class="center">
        <h2 class="portfolio_title">Portfolio</h2>
      </div>
    </div>
    <a href="#about">
      <div class="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="63" viewBox="0 0 46 63" fill="none">
          <path d="M2 38L21.8031 60L44 38" stroke="#61EDA2" stroke-width="4" stroke-linecap="round" />
          <path d="M2 38L21.8031 60L44 38" stroke="#61EDA2" stroke-width="4" stroke-linecap="round" />
        </svg>
    </div>
    </a>
  </div>
</template>
  
<style scoped>
.black {
  width: 100%;
  height: 970px;
  background-color: black;
  justify-content: center;
  align-items: center;
}

.texts_box {
  padding-top: 210px;
}

.main_title {
  color: var(--white);
  text-align: center;
  font-family: Work Sans;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.gardient {
  background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.center {
  justify-content: center;
  display: flex;
}

.portfolio_title {
  font-family: youthtouch;
  color: white;
  text-align: center;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: grid;
  width: 530px;
  grid-template-columns: minmax(5px, 1fr) auto minmax(5px, 1fr);
  grid-gap: 20px;
}

 h2:before,
 h2:after {
  content: '';
  border-top: white 1px solid;
  margin-top: 30px;
}

.arrow {
  text-align: center;
  animation: fade_move_down 2s ease-in-out infinite;
}

@keyframes fade_move_down {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}</style>