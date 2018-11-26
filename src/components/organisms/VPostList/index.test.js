import { mount } from "@vue/test-utils";
import VPostList from ".";

describe("VPostItem component", () => {
  it("should render correctly", () => {
    const comp = mount(VPostList, {
      propsData: {
        posts: [
          {
            title: "First Sample Title",
            author: {
              firstName: "John",
              lastName: "Doe"
            },
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem 
                      optio obcaecati quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque 
                      adipisci?`
          },

          {
            title: "Second Sample Title",
            author: {
              firstName: "Jane",
              lastName: "Doe"
            },
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate mollitia quaerat voluptatem 
                      optio obcaecati quos ex saepe. Minus, optio quis! Labore fugit deleniti ex id commodi ab nobis eaque 
                      adipisci?`
          }
        ]
      }
    });

    expect(comp.html()).toMatchSnapshot();
  });
});
