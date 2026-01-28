import Avatar from '../Avatar';
import UserInfo from '../UserInfo';
import MyPosts from '../MyPosts';
import Post from '../Post';
import { state } from '../../redux';
import styles from './Profile.module.scss';

function Profile() {
  const { user, posts } = state.profilePage;

  return (
    <div className={styles.profile}>
      <div className={styles.cover}>
        <img
          src={user.coverImage}
          alt="Cover"
          className={styles.coverImage}
        />
      </div>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <UserInfo
          name={user.name}
          description={user.description}
          dateOfBirth={user.dateOfBirth}
          city={user.city}
          education={user.education}
          webSite={user.webSite}
        />
      </div>
      <MyPosts />
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} message={post.message} date={post.date} />
        ))}
      </div>
    </div>
  );
}

export default Profile;