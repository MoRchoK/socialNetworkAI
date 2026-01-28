import Avatar from '../Avatar';
import UserInfo from '../UserInfo';
import MyPosts from '../MyPosts';
import Post from '../Post';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.cover}>
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&h=300&fit=crop"
          alt="Cover"
          className={styles.coverImage}
        />
      </div>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <UserInfo
          name="John Doe"
          description="Frontend Developer | React Enthusiast"
          dateOfBirth="January 15, 1995"
          city="New York, USA"
          education="MIT, Computer Science"
          webSite="https://johndoe.dev"
        />
      </div>
      <MyPosts />
      <div className={styles.posts}>
        <Post
          message="Just finished building a new React component! Loving the power of hooks."
          date="2 hours ago"
        />
        <Post
          message="Working on a social network project. Excited to see it come together!"
          date="Yesterday"
        />
      </div>
    </div>
  );
}

export default Profile;