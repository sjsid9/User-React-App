import styles from './FormInput.module.css';

const FormInput = (props) => {
  const onValueChangeOfInputElementHandler = (ev) => {
    props.onValueEmit(ev.target.value, props.identifier);
  };

  return (
    <div className={styles['form-input']}>
      <div>
        <label>{props.label}</label>
      </div>
      <input
        onChange={onValueChangeOfInputElementHandler}
        value={props.defaultVal}
        type={props.type}
      ></input>
    </div>
  );
};

export default FormInput;
