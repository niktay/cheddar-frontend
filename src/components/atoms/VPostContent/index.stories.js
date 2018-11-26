import { storiesOf } from "@storybook/vue";
import VPostContent from ".";

storiesOf("Atom - VPostContent", module).add("default", () => ({
  components: { VPostContent },

  template: `
  <VPostContent>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem optio obcaecati 
    quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque adipisci?
  </VPostContent>`
}));
