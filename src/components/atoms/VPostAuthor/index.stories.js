import { storiesOf } from "@storybook/vue";
import VPostAuthor from ".";

storiesOf("Atom - VPostAuthor", module).add("default", () => ({
  components: { VPostAuthor },

  data() {
    return {
      author: {
        firstName: "John",
        lastName: "Doe"
      }
    };
  },

  template: `<VPostAuthor :author="author"/>`
}));
