<template>
  <div class="main">
    <tile 
      img_src="/blog.jpg" 
      post="https://www.jasoneveleth.com/blog/2023/07/20/why-a-blog"
      iframe_src="https://www.jasoneveleth.com/blog/2023/07/20/why-a-blog"
      url="https://www.jasoneveleth.com/blog" 
      title="Blog"/>
    <tile 
      img_src="/confetti.jpg" 
      post="https://www.jasoneveleth.com/blog/2023/07/20/confetti"
      iframe_src="https://www.jasoneveleth.com/confetti" 
      url="https://www.jasoneveleth.com/confetti" 
      title="Confetti"/>
    <tile 
      img_src="/voronoi_full.png" 
      post="https://www.jasoneveleth.com/blog/2023/07/20/voronoi-blog-post"
      iframe_src="https://www.jasoneveleth.com/blog/2023/07/20/voronoi-blog-post"
      url="https://github.com/jasoneveleth/voronoi2"
      title="Voronoi"/>
    <tile 
      img_src="/hashfs.png" 
      post="https://www.jasoneveleth.com/blog/2023/07/31/hashfs"
      iframe_src="https://www.jasoneveleth.com/blog/2023/07/31/hashfs"
      url="https://github.com/jasoneveleth/hashfs"
      title="hashfs"/>
  </div>
</template>

<script>
import tile from "./tile.vue"

export default{
  components: {tile},
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.main {
  background-color: var(--projects-color);
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  row-gap: 50px;
  column-gap: 50px;
}
</style>

