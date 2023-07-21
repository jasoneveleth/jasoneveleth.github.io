<template>
  <thetop v-on:about_clicked="this.about = true" v-on:projects_clicked="this.about = false" :projects="!about"/>
  <about v-if="about"/>
  <blurb v-if="!about"/>
  <projects v-if="!about"/>
  <contact/>
</template>

<script>
import about from "./components/about.vue"
import thetop from "./components/thetop.vue"
import blurb from "./components/blurb.vue"
import projects from "./components/projects.vue"
import contact from "./components/contact.vue"

export default{
  components: {thetop,about,blurb,projects,contact},
  data() {
    return {
      about: false,
    }
  },
}
</script>

<style>
:root {
  --brown: #30201C;
  --icon-grey: #A1A2A3;
  --nav-height: 50px;
  --background-grey: #86898D;
  --text: #000;
  --nav-color: #fff;/*#9DD9F3;*/
  --blurb-color: #fff;/*#B7E2F2;*/
  --projects-color: #fff;/*#d0edf6;*/
  --about-color: #fff; /*#d0edf6;*/
  --contact-background: #e9e9e9;/*#B7E2F2;*/

  --button-color: #4587ff;
  --button-text-color: #fff;
  --svg-focus: #666;
  --button-focus: #666;
  --border-size: 2px;
}
*{
  box-sizing: inherit;
}
thetop {
  z-index: 3;
}
html, body{
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--contact-background);
}
#app{
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
