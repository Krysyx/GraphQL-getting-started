import { axios } from "../modules";
import baseURL from "../env/api";

export default axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    common: { "Content-Type": "application/json" },
  },
});
