import { storiesOf } from "@storybook/vue";
import VPostTitle from ".";

storiesOf("Atom - VPostTitle", module).add("default", () => ({
  components: { VPostTitle },

  template: `
  <VPostTitle>Sample Post Title</VPostTitle>`
}));
