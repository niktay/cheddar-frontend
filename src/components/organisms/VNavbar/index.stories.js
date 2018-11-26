import { storiesOf } from "@storybook/vue";
import VNavbar from ".";

storiesOf("Organism - VNavbar", module).add("default", () => ({
  components: { VNavbar },

  template: `<VNavbar />`
}));
