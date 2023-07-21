<template>
  <div class="tile">
    <div class="tile-inner">
      <div class="tile-front">
        <img :src="img_src">
      </div>
      <div class="tile-back">
        <iframe :src="iframe_src" :title="Title"/>
        <div class="clicky">
          <a :href="url"><mybutton text="Url"/></a>
          {{title}}
          <a :href="post"><mybutton text="Post"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mybutton from "./button.vue"

export default{
  components: {mybutton},
  props: ['img_src', 'post', 'url', 'title', 'iframe_src'],
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.clicky {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.tile {
  height: 400px;
  width: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
img {
  object-fit: cover;
  height: 400px; /* calc(400px - var(--border-size) - var(--border-size)); */
  width: 400px; /* calc(400px - var(--border-size) - var(--border-size)); */
}

iframe {
  /* - the size of the buttons */
  height: calc(400px - var(--border-size) - var(--border-size) - 36.5px);
  width: calc(400px - var(--border-size) - var(--border-size));
  border-width: 0;
}

/* https://www.w3schools.com/howto/howto_css_flip_box.asp */
/* This container is needed to position the front and back side */
.tile-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.tile:hover .tile-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.tile-front, .tile-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the back side */
.tile-back {
  border: black solid 2px;
  transform: rotateY(180deg);
}
</style>

