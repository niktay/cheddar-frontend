<template>
  <div class="o-VPostList">
    <h4 v-if="loading">Loading...</h4>
    <VPost v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import VPost from "@/molecules/VPost";

export default {
  data() {
    return {
      allPosts: [],
      loading: 0
    };
  },

  components: {
    VPost
  },

  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  }
};
</script>

<style scoped lang="scss">
.o-VPostList {
  grid-column: 2/3;
}
</style>
