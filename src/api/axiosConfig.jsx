import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8082"; // Fallback to localhost
console.log(baseURL)

// Create Axios instance
const axiosInstance = axios.create({
  baseURL, // Base URL for the backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors for adding basic auth credentials (username and password)
axiosInstance.interceptors.request.use(
  (config) => {
    const username = import.meta.env.REACT_APP_API_USERNAME;
    const password = import.meta.env.REACT_APP_API_PASSWORD;

    if (username && password) {
      config.auth = {
        username: username,
        password: password,
      };
    }

    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;



























// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/", // Base URL for Spring Boot backend
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptors for adding auth token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;






// // import axios from "axios";

// // const axiosInstance = axios.create({
// //   // baseURL: "http://localhost:8082/api/auth", // Replace with your backend URL
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });


// // axiosInstance.interceptors.request.use(
// //   (config) => {
// //     const username = REACT_APP_API_USERNAME;
// //     const password = REACT_APP_API_PASSWORD; 

// //     if (username && password){
// //       config.auth = {
// //         username: username,
// //         password: password
// //       };
// //     }
// //     return config; 
    
// //   }, 
// //   (error) => {
// //     return Promise.reject(error);
// //   }

// // );

// // export default axiosInstance;
