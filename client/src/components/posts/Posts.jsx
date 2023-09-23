import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {/* {posts.length>0 && posts.map((p) => (
        <Post post={p} />
      ))} */}
    </div>
  );
}
