import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost/medical/api", // Replace with your API endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;