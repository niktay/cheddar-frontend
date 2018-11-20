<template>
  <div class="home-content">
    <PostList />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "home",
  components: {
    PostList
  }
};
</script>

<style lang="scss">
.home-content {
  grid-column: 2/3;
  grid-row: 2/2;
}
</style>
