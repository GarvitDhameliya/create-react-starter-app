import axios from "axios";

export const getApi = (url, route) => {
  return axios.get(url + route).then((res) => {
    // console.log(res);
    return res.data;
  });
};
