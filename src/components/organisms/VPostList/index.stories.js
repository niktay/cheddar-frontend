import { storiesOf } from "@storybook/vue";
import VPostList from ".";

storiesOf("Organism - VPostList", module).add("default", () => ({
  components: { VPostList },

  data() {
    return {
      posts: [
        {
          title: "First Sample Title",
          author: {
            firstName: "John",
            lastName: "Doe"
          },
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem 
                    optio obcaecati quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque 
                    adipisci?`
        },

        {
          title: "Second Sample Title",
          author: {
            firstName: "Jane",
            lastName: "Doe"
          },
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem 
                    optio obcaecati quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque 
                    adipisci?`
        }
      ]
    };
  },

  template: `<VPostList :posts="posts"/>`
}));
