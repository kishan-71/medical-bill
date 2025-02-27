import axios from "axios";

/*
const getEnvironmentConfig = () => {
    // Replace with your actual logic to get environment config
    const environmentSuffix = {
        port: '8080', // Example port
        name: 'my-api', // Example api name
    };
    return environmentSuffix;
};

const environment = getEnvironmentConfig();

const api = axios.create({
    baseURL: `http://166.0.242.87:${environment.port}/${environment.name}`,
});
*/

const Api = axios.create({
    baseURL: "http://localhost/medical/api", // Replace with your API endpoint
    headers: {
      "Content-Type": "application/json",
    },
  });

/*
  // Request Interceptor for Authentication
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Or wherever you store your token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor for Global Error Handling (e.g., 401)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken'); // Clear token
            window.location.href = '/'; // Redirect to login
        }
        return Promise.reject(error); // Pass error to calling component
    }
);
*/
  export default Api;
  