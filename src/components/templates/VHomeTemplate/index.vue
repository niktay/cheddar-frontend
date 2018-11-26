<template>
    <div class="o-VHomeTemplate">
      <VNavbar />
      <VPostList :posts="posts"/>
    </div>
</template>

<script>
import VPostList from "@/components/organisms/VPostList/.";
import VNavbar from "@/components/organisms/VNavbar/.";

export default {
  components: {
    VNavbar,
    VPostList
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 360px) {
  .o-VHomeTemplate {
    margin: auto 1rem;
  }
}

@media screen and (min-width: 1025px) {
  .o-VHomeTemplate {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
}
</style>
