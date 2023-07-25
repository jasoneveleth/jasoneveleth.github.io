<template>
  <div class="main">
    <img src="/profile_circle.png">
    <div class="blurb">
      <h1>Hi! I'm Jason.</h1>
      <p>
        Computer Science Master's student at <b><a href="https://cs.brown.edu/">Brown</a></b>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding-top: calc(var(--nav-height) + 50px);
  padding-bottom: 50px;
  background: var(--blurb-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  gap: 50px;
  flex-wrap: wrap;
}
.blurb {
}
a {
  color: var(--brown);

  text-decoration: none;
}
img {
  height: 200px;
}
h1 {
  margin: 0;
}
</style>

