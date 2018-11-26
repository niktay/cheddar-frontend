import { mount } from "@vue/test-utils";
import VNavbar from ".";

describe("VNavbar component", () => {
  it("should render correctly", () => {
    const comp = mount(VNavbar);

    expect(comp.html()).toMatchSnapshot();
  });
});
