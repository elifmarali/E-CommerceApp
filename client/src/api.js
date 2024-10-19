import axios from "axios";

export const getProductList = async () => {
    try {
        const response = await axios.get("http://localhost:4000/product");
        return response.data;
    } catch (err) {
        alert("ERR [Get Products List] : " + err.message);
    }
};

export const getProductItem = async (id) => {
    try {
        const response = await axios.get(`http://localhost:4000/product/${id}`);
        return response.data;
    } catch (err) {
        alert("Err [Get Product Item] : " + err.message);
    }
};