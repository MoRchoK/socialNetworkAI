import styles from './UserInfo.module.scss';

interface UserInfoProps {
  name: string;
  description?: string;
  dateOfBirth?: string;
  city?: string;
  education?: string;
  webSite?: string;
}

function UserInfo({
  name,
  description,
  dateOfBirth,
  city,
  education,
  webSite,
}: UserInfoProps) {
  return (
    <div className={styles.userInfo}>
      <h2 className={styles.name}>{name}</h2>
      {description && <p className={styles.description}>{description}</p>}

      <ul className={styles.details}>
        {dateOfBirth && (
          <li className={styles.item}>
            <span className={styles.label}>Date of Birth:</span>
            <span className={styles.value}>{dateOfBirth}</span>
          </li>
        )}
        {city && (
          <li className={styles.item}>
            <span className={styles.label}>City:</span>
            <span className={styles.value}>{city}</span>
          </li>
        )}
        {education && (
          <li className={styles.item}>
            <span className={styles.label}>Education:</span>
            <span className={styles.value}>{education}</span>
          </li>
        )}
        {webSite && (
          <li className={styles.item}>
            <span className={styles.label}>Web Site:</span>
            <a href={webSite} className={styles.link} target="_blank" rel="noopener noreferrer">
              {webSite}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserInfo;
