import styles from './Post.module.scss';

interface PostProps {
  message: string;
  author?: string;
  avatar?: string;
  date?: string;
}

function Post({ message, author = 'John Doe', avatar, date }: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img
          src={avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop'}
          alt={author}
          className={styles.avatar}
        />
        <div className={styles.info}>
          <span className={styles.author}>{author}</span>
          {date && <span className={styles.date}>{date}</span>}
        </div>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Post;
