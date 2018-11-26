import { mount } from "@vue/test-utils";
import VPostTitle from ".";

describe("VPostTitle component", () => {
  it("should render correctly", () => {
    const comp = mount(VPostTitle, {
      slots: {
        default: "Post Title"
      }
    });

    expect(comp.html()).toMatchSnapshot();
  });
});
