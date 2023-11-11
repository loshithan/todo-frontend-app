// apiService.ts
import axios from 'axios';
// import 'dotenv/config';

console.log(process.env.REACT_APP_ApiUrl);


const apiUrl = process.env.REACT_APP_ApiUrl;


export const fetchTodos = async (endpoint: string) => {
  try {
    const response = await axios.get(`${apiUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const postTodo = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error posting data');
  }
};

export const putTodo = async (endpoint: string, data: any) => {
  try {
    const response = await axios.put(`${apiUrl}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error updating data');
  }
};

export const deleteTodo = async (endpoint: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting data');
  }
};
