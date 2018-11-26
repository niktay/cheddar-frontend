import { storiesOf } from "@storybook/vue";
import VLogo from ".";

storiesOf("Atom - VLogo", module).add("default", () => ({
  components: { VLogo },

  template: `<VLogo />`
}));
