import { mount } from "@vue/test-utils";
import VPostContent from ".";

describe("VPostContent component", () => {
  it("should render correctly", () => {
    const comp = mount(VPostContent, {
      slots: {
        default: "The quick brown fox jumps over the lazy dog"
      }
    });

    expect(comp.html()).toMatchSnapshot();
  });
});
