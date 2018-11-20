<template>
  <div class="navbar">
      <img id="cheddar-logo" src="@/assets/logo.svg" alt="Cheddar Logo">
      <a href="#" class="login-button"><i class="fas fa-user-circle"></i></a>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
  grid-column: 2/3;
  grid-row: 1/1;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  #cheddar-logo {
    max-height: 2.2rem;
  }
  .login-button {
    font-size: 2rem;
    float: right;
    color: #0d0d0d;
    &:hover {
      color: #5d5d5d;
    }
    &:active {
      color: #020202;
    }
  }
}
</style>
