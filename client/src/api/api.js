import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api"; // Change if using a different backend port

// ✅ Get all cats
export const getCats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cats:", error);
    return [];
  }
};

// ✅ Get  specific cat
export const getSingleCat = async (catId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cats/${catId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cat:", error);
    return [];
  }
};

// // ✅ Filter cats by location
export const getCatsByLocation = async (location) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cats/${location}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cats:", error);
    return [];
  }
};

// ✅ Get comments for a specific cat
export const getComments = async (catId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comments/cat/${catId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

// ✅ Post a new comment for a cat
export const postComment = async (catId, commentText, author) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comments/cat/${catId}`, {
      comment_text: commentText,
      author: author
    });
    return response.data;
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};
