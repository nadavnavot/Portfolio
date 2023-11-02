<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="nav-link">
        <h3 class="name_title">Nadav Navot</h3>
        <p class="grey">Front End Developer</p>
      </router-link>
      <button class="navbar-toggler" style="margin-top: -20px;" type="button" @click="toggleNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work#top" class="nav-link" :class="{ active: $route.path === '/work' }">Work</router-link>
          </li>
          <li class="nav-item contact_container">
            <router-link to="/contact" class="nav-link contact" :class="{ active: $route.path === '/contact' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>




<style scoped>

.active {
  text-decoration: underline;
}
.navbar-nav.ml-auto {
  margin-left: auto; 
}
nav {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border: 0px solid #000;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Work Sans;
  font-size: 22px;
  font-weight: 400;
}
nav a{
text-decoration: none;
}
.nav-item{
  margin-left: 80px;
}
.name_title {
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
    color: #000;
  }
.grey {
    color: #777676;
    display: block;
    padding: 0;
    margin-top: 0px;
}

.grey p a:hover {
    text-decoration: none;
}

.contact {
    text-align: left;
    color: black;
    background: var(--gardient, linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.contact:hover {
    background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.contact_container {
  background-color: black;
  z-index: 1;
  border-radius: 7px;
  padding: 10px; 
}
.contact_container:hover {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.navbar-nav{
  display: flex; 
  align-items: center;
  padding-bottom: 20px;
}

@media (max-width:784px){
  .nav-item{
  margin-left: 10px;
}
.navbar-nav{
align-items: initial;
display: block;
}
.contact_container{
width: 110px;
margin-top: 20px;
}
.nav-item{
  margin-bottom: 15px;
}
}
</style>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.js';   

import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  name: 'navbar',
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  },
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
  setup() {
    const collapse2 = ref(false);
    return { collapse2 };
  },
};
</script>