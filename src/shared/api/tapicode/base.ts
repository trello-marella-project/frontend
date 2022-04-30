import { notification } from "antd";
import axios from "axios";

// TODO add API_URL to .env
const API_URL = "http://localhost:5001/api";

export const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(undefined, (error) => {
  notification.error({
    message: "Request error",
    description:
      JSON.stringify(error.response.data).length < 256 &&
      Object.entries(error.response.data).map(
        ([key, value]) =>
          `${key.charAt(0).toUpperCase()}${key.slice(1)}: ${
            Array.isArray(value) ? value.join(", ") : value
          }`
      ),
  });
});
