import { storiesOf } from "@storybook/vue";
import VPostItem from ".";

storiesOf("Molecule - VPostItem", module).add("default", () => ({
  components: { VPostItem },

  data() {
    return {
      post: {
        title: "Sample Title",
        author: {
          firstName: "John",
          lastName: "Doe"
        },
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem 
                  optio obcaecati quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque 
                  adipisci?`
      }
    };
  },

  template: `<VPostItem :post="post"/>`
}));
