import { useState } from 'react';
import styles from './MyPosts.module.scss';

function MyPosts() {
  const [postText, setPostText] = useState('');

  const handleSubmit = () => {
    if (postText.trim()) {
      console.log('New post:', postText);
      setPostText('');
    }
  };

  return (
    <div className={styles.myPosts}>
      <h3 className={styles.title}>My Posts</h3>
      <div className={styles.form}>
        <textarea
          className={styles.textarea}
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
}

export default MyPosts;
