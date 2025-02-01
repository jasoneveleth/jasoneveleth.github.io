<template>
  <div class="main">
    <img class="avatar" src="/profile_2025-02-01.jpg">
    <div class="blurb">
      <h1>Hi! I'm Jason.</h1>
      <p>
        Computer Science graduate at <b><a href="https://cs.brown.edu/">Brown</a></b>.
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
.avatar {
  border-radius: 100%;
}
</style>

