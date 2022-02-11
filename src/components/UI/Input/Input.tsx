import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./Input.module.scss";

interface InputProps {
  icon?: IconDefinition;
  placeholder?: string | number;
  disabled?: boolean;
  value?: string | number;
  label?: string;
  maxLen?: number
}

const Input: FC<InputProps> = (props) => {
  const isDisabled = props.disabled ? true : false;
  const inputValue = props.value ? props.value : "";

  return (
    <InputGroup className={styles.inputGroup}>
      <Form.Label className={styles.label}>{props.label}</Form.Label>
      <div className={styles.container}>
        {props.icon && (
          <div className={styles.inputIcon}>
            <FontAwesomeIcon icon={props.icon} />
          </div>
        )}
        <Form.Control
          defaultValue={inputValue}
          placeholder={props.placeholder?.toString()}
          className={styles.inputField}
          disabled={isDisabled}
        />
      </div>
    </InputGroup>
  );
};

export default Input;
