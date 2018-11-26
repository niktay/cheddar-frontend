import { mount } from "@vue/test-utils";
import VLogo from ".";

describe("VLogo component", () => {
  it("should render correctly", () => {
    const comp = mount(VLogo);

    expect(comp.html()).toMatchSnapshot();
  });
});
