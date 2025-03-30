import { useEffect, useState } from "react";
import { getPosts } from "../services/api";

const PostList = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, [refresh]);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
