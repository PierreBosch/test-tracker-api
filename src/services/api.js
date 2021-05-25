import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tracker.gg/api/v2/warzone/",
  headers: {
    Origin: "https://cod.tracker.gg",
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
