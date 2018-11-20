<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #f5f4f2;
}

@media screen and (min-width: 360px) {
  html {
    font-size: 11pt;
  }
}

@media screen and (min-width: 1025px) {
  html {
    font-size: 12pt;
  }
}
</style>
