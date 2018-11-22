<template>
    <div class="o-VHomeTemplate">
      <VNavbar />
      <VPostList />
    </div>
</template>

<script>
// @ is an alias to /src
import VPostList from "@/organisms/VPostList.vue";
import VNavbar from "@/organisms/VNavbar.vue";

export default {
  components: {
    VNavbar,
    VPostList
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 360px) {
  .o-vHomeTemplate {
    margin: auto 1rem;
  }
}

@media screen and (min-width: 1025px) {
  .o-vHomeTemplate {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
}
</style>
