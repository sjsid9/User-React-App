import styles from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className={styles['form-input']}>
      <div>
        <label>{props.label}</label>
      </div>
      <input type={props.type}></input>
    </div>
  );
};

export default FormInput;
