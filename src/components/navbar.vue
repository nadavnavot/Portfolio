
<script>
export default {
  name: 'navbar',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    mobile_menu() {
      console.log('clicked');
    },
    isRouteActive(route) {
      return this.$route.path === route;
    }
  },
};
</script>


<template>
    <nav>
      <span class="left_side">
        <router-link to="/">
          <h3 class="name_title">Nadav Navot</h3>
          <p class="grey">Front End Developer</p>
        </router-link>
      </span>
      <span class="mobile-menu">
        <input class="menu-btn" type="checkbox" id="menu-btn" @click="mobile_menu()">
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
      </span>
      <ul class="menu">
        <li><router-link to="/" active-class="active">About</router-link></li>
        <li><router-link to="/work" active-class="active">Work</router-link></li>
        <div class="contact_container">
    <li class="contact"><router-link to="/contact" active-class="active">Contact</router-link></li>
  </div>      </ul>
    </nav>
  </template>
  

<style scoped >

.active {
  text-decoration: underline;
}

nav {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border: 0px solid #000;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Work Sans;
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
}


li {
    padding-right: 70px;
}

.name_title {
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
}

nav li:hover {
    text-decoration: underline;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    transition: ease-in 0.3s ease 3s;

}

nav p {
    list-style: none;
    display: inline-block;
    padding: 0 20px;
    text-decoration: none;
}

.left_side {
    margin-right: auto;
    margin-left: 25px;
}
ul.menu {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

ul.menu li {
  margin-right: 20px;
}

ul.menu li:last-child {
  margin-right: 0;
}

nav a {
  text-decoration: none;
  color: black;
  transition: ease-in 0.3s ease;
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

.contact_container {
    background-color: black;
    z-index: 1;
    border-radius: 7px;
    margin-right: 20px;
}
.mobile-menu{
    margin-right: -20px;
}
.contact {
    text-align: center;
    color: black;
    background: var(--gardient, linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 15px;
}

.contact_container:hover {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.contact:hover {
    background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media (min-width: 768px) {
    .mobile-menu {
        display: none;
    }
}

@media (max-width: 768px) {
    li {
        display: none;
    }

}

.menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
}

.menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

.menu-icon .navicon:before {
    top: 5px;
}

.menu-icon .navicon:after {
    top: -5px;
}

/* menu btn */

/* menu btn */

 .menu-btn {
  display: none;
}

.menu-btn:checked ~ .menu {
  max-height: 240px;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}


</style>