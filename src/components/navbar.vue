<script>
export default {
  name: 'navbar',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
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
            <router-link to="/">
                <p class="links">About</p>
            </router-link>
            <router-link to="/work">
                <p class="links">Work</p>
            </router-link>
            <router-link class="links" to="/contact">
                <div class="contact_container">
                    <p class="contact">Contact</p>
                </div>
            </router-link>  </nav>

          <!-- Mobile menu -->
          <header class="header">
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span>
  <span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
    </header>

</template>

<style scoped >



nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px;
    border: 0px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 20px 0px 0px;
}

nav a {
    text-decoration: none;
    color: black;
    transition: ease-in 0.3s ease 3s;
}

.links{
    padding-left: 50px;
}

.name_title{
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
}
nav p:hover {
    text-decoration: underline;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;

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

.grey {
    color: #777676;
    display: block;
    padding: 0;
    margin-top: 0px;
}
.grey p a:hover{
    text-decoration: none;
}
.contact_container {
    background-color: black;
    z-index: 1;
    border-radius: 7px;
}

.contact{
    text-align: center;
    color: black; 
    background: var(--gardient, linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.contact_container:hover {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.contact:hover{
    background: linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%);
    -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

@media (min-width: 760px) {
  .mobile-links{
    display: none;
}
.header{
  display: none;
}
}
@media (max-width: 760px) {
  .links {
    display: none;
  }.mobile-links{
    display: none;
}}
 /* hamburger-menu */

 .header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .lo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 1px;
  position: relative;
  transition: background .2s ease-out;
  width: 20px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }


}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}


.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}


</style>