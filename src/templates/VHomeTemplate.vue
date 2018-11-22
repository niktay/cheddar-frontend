<template>
    <div class="o-v-home-template">
      <Navbar />
      <PostList />
    </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
    PostList
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 360px) {
  .o-v-home-template {
    margin: auto 1rem;
  }
}

@media screen and (min-width: 1025px) {
  .o-v-home-template {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
}
</style>
