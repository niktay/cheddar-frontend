<template>
  <img class="a-VLogo" src="../../../assets/logo.svg" alt="Cheddar Logo">
</template>

<script>
import CheddarLogo from "@/assets/logo.svg";

export default {
  data: function() {
    return {
      logo: CheddarLogo
    };
  }
};
</script>

<style class="scss">
.a-VLogo {
  max-height: 2.2rem;
}
</style>
