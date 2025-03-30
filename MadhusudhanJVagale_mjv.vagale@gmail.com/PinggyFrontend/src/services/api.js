const API_URL = "http://localhost:9091"; // Adjust if your backend is running on a different port

export const createPost = async (postData, authCode) => {
  const response = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "PinggyAuthHeader": authCode, 
    },
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};
