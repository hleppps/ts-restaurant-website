import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  active?: boolean;
  disabled?: boolean
  variant?: "primary" | "secondary" | undefined;
  icon?: IconDefinition;
  onClick?: () => void
}

const Button: FC<ButtonProps> = (props) => {
  const activeBtnStyles = props.active ? styles.active : "";
  const variantStyles =
    props.variant === "secondary" ? styles.secondary : styles.primary;

  const buttonStyles = `${styles.btn} ${activeBtnStyles} ${variantStyles}`;

  return (
    <>
      <button className={buttonStyles} onClick={props.onClick} disabled={props.disabled}>
        {props.icon && (
          <FontAwesomeIcon className={styles.icon} icon={props.icon} />
        )}
        {props.children && <p className={styles.text}>{props.children}</p>}
      </button>
    </>
  );
};

export default Button;
