import { mount } from "@vue/test-utils";
import VPostAuthor from "../../src/atoms/VPostAuthor";

describe("VPostAuthor", () => {
  it("renders correctly setting the `author` prop", () => {
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

  it("renders undefined author when no `author` prop", () => {
    const comp = mount(VPostAuthor);

    expect(comp.html()).toMatchSnapshot();
  });

  it("renders undefined for missing `author` prop properties", () => {
    const comp = mount(VPostAuthor, {
      propsData: {
        author: {}
      }
    });
    expect(comp.html()).toMatchSnapshot();
  });
});
