<template>
  <div class="main">
    <h1>Get in touch!</h1>
    <div class="social">
      <a href="https://www.linkedin.com/in/jasoneveleth">
          <svg 
          xmlns="http://www.w3.org/2000/svg"
          id="linkedin" 
          class="icon"
          viewBox="16 16 32 32">
              <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"/>
          </svg>
      </a>
      <a href="https://github.com/jasoneveleth">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          id="github" 
          class="icon"
          viewBox="16 16 32 32">
              <path d="M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z"/>
          </svg>
      </a>
      <a class="email" href="mailto:me@jasoneveleth.com">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 128 96" 
          id="email">
            <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"/>
        </svg>
      </a>
    </div>
    <p>© 2023 Jason Eveleth · Mockups from <a href="https://www.freepik.com/free-psd/digital-device-mockup_4264999.htm#query=mac%20mockup&position=3&from_view=keyword&track=ais">rawpixel.com/Freepik</a></p>
  </div>
</template>

<style scoped>
.main {
  background: var(--contact-background);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-content: center; */
  align-items: center;
  color: var(--text);
}
h1 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.social {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 24px;
}
svg {
  width: 24px;
  fill: var(--text);
  margin-bottom: 24px;
}
svg:hover {
  fill: var(--svg-focus);
}
p {
  margin-top: 0;
  margin-bottom: 16px;
  color: #a6a2a0;
}
a {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
}
</style>

