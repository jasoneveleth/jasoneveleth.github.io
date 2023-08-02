<template>
  <div class="main">
    <img src="/profile_small.jpg"/>
    <div class="text">
      <h1>
        ABOUT
      </h1>
      <p>
      My name is Jason Eveleth, pronounced EH-vuh-LETH. I grew up in Albany, NY, and attended Brown University for undergrad.
      </p>
      <p>
      I'm a passionate Master's student pursuing a degree in Computer
      Science/Artificial Intelligence. From programming languages
      and algorithms to AI and software engineering, I love
      challenges, and I aim to constantly deepen my understanding and
      hone my problem-solving skills. In my research and
      collaborative projects at Brown, I've excelled as a team player while 
      showcasing strong leadership. Seeking a
      company valuing teamwork, creativity, and leadership, I'm
      eager to bring my enthusiasm, continuous learning, and
      problem-solving drive to a dynamic team. In my free time,
      catch me running, playing spikeball, or hacking away on side
      projects.
      </p>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding-top: calc(var(--nav-height) + 50px);
  padding-bottom: 50px;
  background: var(--about-color);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 50px;
  min-height: calc(100% - 180.5px);
}
@media screen and (max-width: 650px) {
  .main {
    padding-left: 16px;
    padding-right: 16px;
  }
}
h1 {
  margin-top: 0;
}
p {
  margin: 0;
  font-size: 20px;
  padding-bottom: 20px;
}
.text {
  max-width: 600px;
}
img {
  height: 400px;
  width: 400px;
}
</style>

