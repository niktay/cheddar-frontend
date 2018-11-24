<template>
  <VHomeTemplate :posts="allPosts"/>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import VHomeTemplate from "@/templates/VHomeTemplate.vue";

export default {
  data() {
    return {
      allPosts: []
    };
  },

  components: {
    VHomeTemplate
  },

  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  }
};
</script>

<style lang="scss">
</style>
