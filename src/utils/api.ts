import axios from "axios";
import { API_KEY, API_URL } from "../config";

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'x-amenity-api-key': API_KEY }
});

export default api;