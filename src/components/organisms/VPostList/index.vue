<template>
  <div class="o-VPostList">
    <VPostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import VPostItem from "@/components/molecules/VPostItem/.";

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
