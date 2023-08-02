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
  props: {
    img_src: String,
    post: String,
    url: String,
    title: String,
    iframe_src_prop: {default: false},
  },
  data() {
    return {
      iframe_src: null
    }
  },
  mounted() {
    this.iframe_src = this.iframe_src_prop || this.post
  }
}
</script>

<style scoped>
.clicky {
  padding: var(--padding) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--blurb-color);
}
.tile {
  --padding: 5px;
  height: 400px;
  width: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
img {
  object-fit: cover;
  height: 100%; /* calc(400px - var(--border-size) - var(--border-size)); */
  width: 100%; /* calc(400px - var(--border-size) - var(--border-size)); */
}

iframe {
  height: calc(400px - 30.5px - var(--padding) - var(--padding));
  width: 400px;
  border-width: 0;
  display: block;
}

/* https://www.w3schools.com/howto/howto_css_flip_box.asp */
/* This container is needed to position the front and back side */
.tile-inner {
  height: 100%;
  width: 100%;
  position: relative;
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
  transform: rotateY(180deg);
}
</style>

