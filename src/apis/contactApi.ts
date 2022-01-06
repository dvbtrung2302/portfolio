import axiosClient from "./axiosClient";
import { IResponse } from "typings";

const contactApi = {
  contact: async (data: { [type: string]: string } ): Promise<IResponse> => {
    const url = "/api/contact";
    return axiosClient.post(url, data);
  },
}

export default contactApi;
