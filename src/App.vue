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

@media screen and (min-width: 360px) {
  #app {
    margin: auto 1rem;
  }
}

@media screen and (min-width: 1025px) {
  #app {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 9fr;
  }
}

body {
  background-color: #f5f4f2;
}
</style>
