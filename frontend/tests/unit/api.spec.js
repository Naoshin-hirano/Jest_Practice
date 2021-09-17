// import { shallowMount } from "@vue/test-utils";
import "isomorphic-fetch"
import { apiService } from '@/common/api.service.js'

describe("vue api test ", () => {
  it("renders api", () => {
    let endPoint = `api/jobs/`;
    apiService(endPoint).then(data => {
        data.forEach( (item) => {
            expect(item).toBeDefined();
            console.log("dataの要素:" + item)
        });
    });
  });
});
