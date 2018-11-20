<template>
  <div class="post-list">
    <h4 v-if="loading">Loading...</h4>
    <post v-for="post in allPosts" :key="post.id" :post="post">
    </post>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import Post from "./Post";

export default {
  name: "PostList",
  data() {
    return {
      allPosts: [],
      loading: 0
    };
  },
  components: {
    Post
  },
  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  }
};
</script>

<style scoped lang="scss">
.post-list {
  grid-column: 2/3;
  grid-row: 2/2;
}
</style>
