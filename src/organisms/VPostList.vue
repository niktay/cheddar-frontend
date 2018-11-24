<template>
  <div class="o-VPostList">
    <VPostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import VPostItem from "@/molecules/VPostItem";

export default {
  components: {
    VPostItem
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.o-VPostList {
  grid-column: 2/3;
}
</style>
