<script>
export default {
name: 'Project_button',
props:['title']
};
</script>
<template>
 <button class="button"><p class="button_text">{{ title }}</p></button>
</template>

<style>
.button{
width: 200px;
height: 30px;

    border-radius: 7px;
background: black;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 205px;
height: 68px;
border: none;
}
.button_text{
    color: black; 
    background: var(--gardient, linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: Work Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
margin-top: 20px;
}
.button:hover{
    background-color: white;
    /* background: var(--gardient, linear-gradient(227deg, #61EDA2 6.03%, #20BAEB 100%)); */
    z-index: 1;
    cursor: pointer;

}
.button_text p:hover {
  color: black; 
}
</style>