import { useEffect, useState } from 'react';
import { getPosts } from './api';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError('');

        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts.map((post) => {
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>;
        })}
      </div>
    </div>
  );
}
