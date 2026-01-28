import { NavLink, useParams } from 'react-router-dom';
import styles from './Dialogs.module.scss';

function Dialogs() {
  const { id } = useParams();
  const activeDialog = id ? Number(id) : null;

  const dialogsData = [
    {
      id: 1,
      name: 'John',
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'Want to grab coffee later?' },
      ],
    },
    {
      id: 2,
      name: 'Anna',
      messages: [
        { id: 1, message: 'Hey! Did you finish the project?' },
        { id: 2, message: 'Let me know if you need help' },
      ],
    },
    {
      id: 3,
      name: 'Mike',
      messages: [
        { id: 1, message: 'Yo!' },
        { id: 2, message: 'Check out this new song' },
        { id: 3, message: 'Its awesome!' },
      ],
    },
    {
      id: 4,
      name: 'Sarah',
      messages: [
        { id: 1, message: 'Happy birthday!' },
        { id: 2, message: 'Hope you have a great day!' },
      ],
    },
    {
      id: 5,
      name: 'Alex',
      messages: [
        { id: 1, message: 'Meeting at 3pm today' },
        { id: 2, message: 'Dont forget the documents' },
        { id: 3, message: 'See you there!' },
      ],
    },
  ];

  const currentDialog = dialogsData.find((d) => d.id === activeDialog);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsList}>
        {dialogsData.map((dialog) => (
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
