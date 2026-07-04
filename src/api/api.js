import axios from "axios";

// Axios instance configured with the base API URL.
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export default api;
