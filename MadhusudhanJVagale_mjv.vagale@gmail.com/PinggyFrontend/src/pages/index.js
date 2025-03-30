import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "", authCode: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch("http://localhost:9091/api/post");
          const data = await response.json();
          console.log("Fetched data:", data);
          setPosts(data);
      } catch (error) {
          console.error("Fetch error:", error);
      }
  };
  fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9091/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "PinggyAuthHeader": formData.authCode, 
      },
      body: JSON.stringify({ title: formData.title, body: formData.body }),
    });

    if (response.ok) {
      const newPost = await response.json();
      setPosts([...posts, newPost]);
      setFormData({ title: "", body: "", authCode: "" });
    } else {
      console.error("Failed to submit post");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Submission</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Auth Code"
          value={formData.authCode}
          onChange={(e) => setFormData({ ...formData, authCode: e.target.value })}
          required
        />
        <br></br><br></br>
        <b><button type="submit">Submit</button></b>
      </form>
      <br></br>
      <b><h2>POSTS:</h2></b>
      <br></br>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
