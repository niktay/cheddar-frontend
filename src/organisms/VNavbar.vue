<template>
  <div class="o-VNavbar">
      <VLogo />
      <a href="#" class="login-button"><i class="fas fa-user-circle"></i></a>
  </div>
</template>

<script>
import VLogo from "@/atoms/VLogo";

export default {
  components: {
    VLogo
  }
};
</script>

<style scoped lang="scss">
.o-VNavbar {
  grid-column: 2/3;
  grid-row: 1/1;
  margin-top: 2rem;
  padding-bottom: 0.5rem;

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
