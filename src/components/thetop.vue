<template>
  <div class="main">
    <h1 id="my-name"><a href="https://www.jasoneveleth.com">Jason Eveleth</a></h1>
    <div class="filler"/>
    <div class="left">
      <h1 v-if="!this.projects" @click="$emit('projects_clicked')">Projects</h1>
      <h1><a href="https://www.jasoneveleth.com/blog">Blog</a></h1>
      <h1 @click="$emit('about_clicked')">About</h1>
      <h1><a href="https://docs.google.com/document/d/1BfTzzSWARWQhIRfpXk9WrBmcgTAHUZlomkqM17gSCQU/edit?usp=sharing">Resume</a></h1>
    </div>
  </div>
</template>

<script>
export default{
  props: ['projects'],
  emits: ["about_clicked"],
}
</script>


<style scoped>
@media screen and (max-width: 600px) {
  #my-name {
    display: none;
  }
}
.filler {
  flex-grow: 2;
  height: var(--nav-height);
}
.left {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}
.main {
  background: var(--nav-color);
  height: var(--nav-height);
  display: flex;
  justify-content: space-around;
  column-gap: 30px;
  align-items: center;
  position:fixed;
  top: 0;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  z-index: 1;
}
h1 {
  cursor: pointer;
  margin: 0;
  color: var(--text);
  font-size: 24px;
}
a {
  text-decoration: none;
  color: var(--text);
}
</style>

