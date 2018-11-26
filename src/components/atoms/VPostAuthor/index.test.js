import { mount } from "@vue/test-utils";
import VPostAuthor from ".";

describe("VPostAuthor component", () => {
  it("should render correctly", () => {
    const comp = mount(VPostAuthor, {
      propsData: {
        author: {
          firstName: "John",
          lastName: "Doe"
        }
      }
    });
    expect(comp.html()).toMatchSnapshot();
  });
});
