<template>
  <article class="m-VPostItem">
    <VPostTitle>{{ post.title }}</VPostTitle>
    <VPostAuthor :author="post.author" />
    <VPostContent>{{ post.content }}</VPostContent>
  </article>
</template>

<script>
import VPostTitle from "@/atoms/VPostTitle";
import VPostAuthor from "@/atoms/VPostAuthor";
import VPostContent from "@/atoms/VPostContent";

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
