import FormInput from '../form-input/FormInput';
import styles from './UserAddForm.module.css';

const UserAddForm = (props) => {
  const inputElements = [
    { label: 'Username', type: 'text', key:"username" },
    { label: 'Age(Years)', type: 'number', key:"age" },
  ];

  return (
    <div>
      {inputElements.map((el) => (
        <FormInput label={el.label} type={el.type} key={el.key} />
      ))}
      <button className={styles['add-user']}>Add User</button>
    </div>
  );
};

export default UserAddForm;
