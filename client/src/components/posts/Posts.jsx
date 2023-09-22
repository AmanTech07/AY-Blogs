import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {post.length>0 && posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
