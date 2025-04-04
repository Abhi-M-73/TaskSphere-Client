import axiosInstance from '../utils/axiosInstance';
import { USER_API } from '../utils/constant';

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post(`${USER_API}/register`, userData);
        return response.data;
    } catch (error) {
        return error.response.data.message
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await axiosInstance.post(`${USER_API}/login`, userData);
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
}

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.get(`${USER_API}/logout`);
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
}