import { mount } from "@vue/test-utils";
import VPostItem from ".";

describe("VPostItem component", () => {
  it("should render correctly", () => {
    const comp = mount(VPostItem, {
      propsData: {
        post: {
          title: "Sample Title",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam hic esse sit atque enim fugiat 
                    provident delectus sunt quos. Suscipit nisi iusto ducimus dolorem minus quo adipisci deleniti esse 
                    obcaecati!`,
          author: {
            firstName: "John",
            lastName: "Doe"
          }
        }
      }
    });

    expect(comp.html()).toMatchSnapshot();
  });
});
