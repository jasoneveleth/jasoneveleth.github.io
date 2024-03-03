<template>
  <div class="tile">
	<img :src="img_src">
	<div class="clicky">
	  <a :href="url"><mybutton text="Url"/></a>
	  {{title}}
	  <a :href="post"><mybutton text="Post"/></a>
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
  display: flex;
  flex-direction: column;
}
img {
  object-fit: cover;
  height: calc(100% - 30.5px - var(--padding) - var(--padding));
  width: 100%;
}
</style>

