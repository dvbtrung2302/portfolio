import contactApi from "apis/contactApi";
import mockAxios from 'axios';

describe("contact", () => {
  test("should call axios and return a response", async () => {
    (mockAxios as any).post.mockImplementationOnce(() => Promise.resolve({
      status: 1,
      message: "Your message has been sent!!!"
    }))

    const resp = await contactApi.contact({});
     
    expect(resp).toEqual({
      status: 1,
      message: "Your message has been sent!!!"
    })
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenLastCalledWith("/api/contact", {});
  })
})
