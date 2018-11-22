<template>
  <span class="a-VPostAuthor">
    {{ byAuthor }}
  </span>
</template>

<script>
export default {
  computed: {
    byAuthor: function() {
      return "BY " + this.author.username;
    }
  },

  props: {
    author: {
      type: Object,
      required: true
    }
  }
};
</script>

<style class="scss">
.a-VPostAuthor {
  color: #2b2b2b;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
}
</style>