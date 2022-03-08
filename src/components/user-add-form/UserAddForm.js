import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import styles from './UserAddForm.module.css';

const inputElements = [
    { label: 'Username', type: 'text', key: 'username', identifier:'name' },
    { label: 'Age(Years)', type: 'number', key: 'age', identifier:'age' },
  ];

const UserAddForm = (props) => {
 
  const userAddingHandler = (ev) => {
      const user = {
          userName,
          userAge,
          id:Math.random().toString()
      };
      props.onAddUser(user);
      setUserName('');
      setUserAge('');
  };

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const valueSetForFormInputHandler = (value, identifier) => {
    if (identifier === 'name') {
      setUserName(value);
    } else if (identifier === 'age') {
      setUserAge(value);
    }
  };

  const defaultValForFormInputElement = identifier => {
      if(identifier === 'name') {
          return userName;
      }else if(identifier === 'age') {
          return userAge;
      }
  }

  return (
    <div>
      {inputElements.map((el) => (
        <FormInput
          onValueEmit={valueSetForFormInputHandler}
          label={el.label}
          type={el.type}
          key={el.key}
          identifier={el.identifier}
          defaultVal = {defaultValForFormInputElement(el.identifier)}
        />
      ))}
      <button onClick={userAddingHandler} className={styles['add-user']}>
        Add User
      </button>
    </div>
  );
};

export default UserAddForm;
