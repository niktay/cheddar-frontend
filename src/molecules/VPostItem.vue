<template>
  <div class="m-VPostItem">
    <VPostTitle>{{ post.title }}</VPostTitle>
    <VPostAuthor :author="post.author" />
    <VPostContent>{{ post.content }}</VPostContent>
  </div>
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

  props: ["post"]
};
</script>

<style lang="scss">
</style>
