import axiosInstance from '../utils/axiosInstance';
import { Task_API, USER_API } from '../utils/constant';

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

export const createTask = async (userData) => {
    try {
        const response = await axiosInstance.post(`${Task_API}/create`, userData);
        return response.data;
    } catch (error) {
        return error.response.data.message
    }
}

export const getAllTask = async () => {
    try {
        const response = await axiosInstance.get(`${Task_API}/all`);
        return response.data;
    } catch (error) {
        return error.response.data.message
    }
}