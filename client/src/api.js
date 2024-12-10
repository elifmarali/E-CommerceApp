import axios from "axios";

const BASE_URL = "http://localhost:4000";
const productURL = `${BASE_URL}/product`;
const authURL = `${BASE_URL}/auth`;

/* axios.interceptors.request.use(function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = [BASE_URL];
    const token = localStorage.getItem('access-token');

    if (allowedOrigins.includes(origin)) {
        config.headers.authorization = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
}) */

export const getProductList = async ({ pageParam = 0 }) => {
    try {
        const response = await axios.get(`${productURL}?page=${pageParam}`);
        return response.data;
    } catch (err) {
        alert("ERR [Get Products List] : " + err.message);
    }
};

export const getProductItem = async (id) => {
    try {
        const response = await axios.get(`${productURL}/${id}`);
        return response.data;
    } catch (err) {
        alert("Err [Get Product Item] : " + err.message);
    }
};

export const loginUser = async (email, password) => {
    return await axios.post(`${authURL}/login`, {
        email,
        password,
    });
};


