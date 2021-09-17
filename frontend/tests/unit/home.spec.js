import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';
import "isomorphic-fetch"
// import App from "@/App.vue";
// import { apiService } from '@/common/api.service.js'

describe("Home.vue ", () => {
  it("renders h1 tag", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('h1').text()).toBe(
      'Job Board'
    );
  });
});
