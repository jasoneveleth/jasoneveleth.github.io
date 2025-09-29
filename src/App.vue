<template>
  <thetop/>
  <blurb/>
  <projects/>
  <contact/>
</template>

<script>
import thetop from "./components/thetop.vue"
import blurb from "./components/blurb.vue"
import projects from "./components/projects.vue"
import contact from "./components/contact.vue"

export default{
  components: {thetop,blurb,projects,contact},
  data() {
  },
  mounted() {
	(() => { // Custom logging
		const e = {
			user_agent: navigator.userAgent,
			timestamp: new Date().toISOString(),
			screen_width: window.screen.width,
			screen_height: window.screen.height,
			viewport_width: window.innerWidth,
			viewport_height: window.innerHeight,
			language: navigator.language,
			timezone_offset: new Date().getTimezoneOffset(),
			referrer: document.referrer,
			page: window.location.href,
		};
		fetch("https://logging.jsn.vet:5000/analytics", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(e)
		}).catch(t => console.error("Analytics request failed:", t));
	})();
  }
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
  --blurb-color: var(--contact-background);/*#B7E2F2;*/
  --projects-color: #fff;/*#d0edf6;*/
  --contact-background: #F5F5F7;/*#B7E2F2;*/

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
