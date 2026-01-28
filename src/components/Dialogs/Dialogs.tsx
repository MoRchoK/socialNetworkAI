import { NavLink, useParams } from 'react-router-dom';
import { state } from '../../redux';
import styles from './Dialogs.module.scss';

function Dialogs() {
  const { id } = useParams();
  const { dialogs } = state.dialogsPage;

  const currentDialog = dialogs.find((d) => d.id === id);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        {dialogs.map((dialog) => (
          <NavLink
            key={dialog.id}
            to={`/dialogs/${dialog.id}`}
            className={({ isActive }) =>
              isActive ? `${styles.dialogItem} ${styles.activeDialog}` : styles.dialogItem
            }
          >
            {dialog.name}
          </NavLink>
        ))}
      </div>
      <div className={styles.messages}>
        {currentDialog ? (
          currentDialog.messages.map((msg) => (
            <div key={msg.id} className={styles.message}>
              {msg.message}
            </div>
          ))
        ) : (
          <div className={styles.placeholder}>Select a dialog to see messages</div>
        )}
      </div>
    </div>
  );
}

export default Dialogs;
