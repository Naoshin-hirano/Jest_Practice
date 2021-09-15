import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("HelloWorld.vue", () => {
  test("test App Component", function () {
    const wrapper = mount(App);
    expect(wrapper.text()).toBe("Hello World");
  });
});
