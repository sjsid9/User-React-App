import styles from './UsersList.module.css';

const UserList = (props) => {
  const usersArray =
    props.usersList &&
    props.usersList.map((usr) => {
      return {
        text: `${usr.userName} (${usr.userAge} years old)`,
        id: usr.id,
      };
    });

  console.log(usersArray);

  return (
    <div className={styles['users-list']}>
      {usersArray &&
        usersArray.map((user) => <div key={user.id}>{user.text}</div>)}
    </div>
  );
};
export default UserList;
