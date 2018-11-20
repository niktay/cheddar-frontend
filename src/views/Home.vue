<template>
    <div class="home-content">
      <Navbar />
      <PostList />
    </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    PostList
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 360px) {
  .home-content {
    margin: auto 1rem;
  }
}

@media screen and (min-width: 1025px) {
  .home-content {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
}
</style>
