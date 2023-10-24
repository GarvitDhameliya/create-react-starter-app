import { getApi } from "../api";
import { BASE_URL, GET_DATA } from "../constant";

export const callGetApi = () => getApi(BASE_URL, GET_DATA);
