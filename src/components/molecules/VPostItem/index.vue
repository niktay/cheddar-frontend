<template>
  <article class="m-VPostItem">
    <VPostTitle>{{ post.title }}</VPostTitle>
    <VPostAuthor :author="post.author" />
    <VPostContent>{{ post.content }}</VPostContent>
  </article>
</template>

<script>
import VPostTitle from "@/components/atoms/VPostTitle/.";
import VPostAuthor from "@/components/atoms/VPostAuthor/.";
import VPostContent from "@/components/atoms/VPostContent/.";

export default {
  components: {
    VPostTitle,
    VPostAuthor,
    VPostContent
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
</style>
