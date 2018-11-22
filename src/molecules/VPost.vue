<template>
  <div>
    <h2>{{ post.title }}</h2>
    <span class="author">BY {{ post.author.username }}</span>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=MerriweatherMerriweather|Roboto");
h2 {
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 2rem;
  color: #111111;
  margin-bottom: 7px;
}

.author {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #2b2b2b;
  text-transform: uppercase;
}

p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  color: #454545;
}
</style>
