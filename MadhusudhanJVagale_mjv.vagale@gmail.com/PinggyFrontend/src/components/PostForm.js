import { useState } from "react";
import { createPost } from "../services/api";

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    const postData = { title, body };
    await createPost(postData);
    onPostCreated(); // Refresh post list
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
