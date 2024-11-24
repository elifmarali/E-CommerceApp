import axios from "axios";


const productURL = "http://localhost:4000/product";
const authURL = "http://localhost:4000/auth";

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