import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/medical-bill/api/", // Replace with your API endpoint
    headers: {
      "Content-Type": "application/json",
    },
  });

const myApi = async (method, endpoint, { data = null, params = {}, customHeaders = {} } = {}) => {
    try {
        const response = await api({
            method,
            url: endpoint, // No need for base URL here
            data,
            params,
            headers: customHeaders,
        });
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error) {
        // Standardized error return
        return {
            error: error.response?.data || error.message || 'Something went wrong',
            status: error.response?.status || 500,
        };
    }
};

export { api, myApi }; // Export both the axios instance and the resolver
  