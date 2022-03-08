import { useState } from 'react';
import UserAddForm from './components/user-add-form/UserAddForm';
import UserList from './components/user-list/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const userAddHandler = (user) => {
    setUsersList((prevUsersList) => [user, ...prevUsersList]);
  };

  return (
    <div className="App">
      <UserAddForm onAddUser={userAddHandler} />
      <UserList usersList={usersList} />
    </div>
  );
}

export default App;
