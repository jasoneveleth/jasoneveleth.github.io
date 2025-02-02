<template>
  <div class="main">
    <img class="avatar" src="/profile_2025-02-01.jpg">
    <div class="blurb">
      <h1>Hi! I'm Jason.</h1>
      <p>
        Computer Science graduate from <b><a class="brown" target="_blank" href="https://cs.brown.edu/">Brown</a></b>.
        <br/>
        Data analyst at <b><a class="cartesian" target="_blank" href="https://www.cartesian.com/">Cartesian</a></b>.
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
.brown {
  color: var(--brown);
  text-decoration: none;
}
.cartesian {
  text-decoration: none;
  background: linear-gradient(60deg, #0C4A81, #0C4A81, #70236B, #DB092A, #0C4A81);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
img {
  height: 200px;
}
h1 {
  margin: 0;
}
.avatar {
  border-radius: 100%;
}
p {
  line-height: 1.5;
}
</style>

