import styles from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
}

function Avatar({ src, alt = 'Avatar' }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <img
        src={src || 'https://i.pinimg.com/originals/a6/8f/85/a68f85b30a70cec93332304e3522a349.jpg'}
        alt={alt}
        className={styles.image}
      />
    </div>
  );
}

export default Avatar;
