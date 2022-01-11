import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  active?: boolean | undefined;
  variant?: "primary" | "secondary" | undefined;
  icon?: IconDefinition;
}

const Button: FC<ButtonProps> = (props) => {
  const activeStyles = props.active ? styles.active : "";
  const variantStyles =
    props.variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <>
      <button className={`${styles.btn} ${activeStyles} ${variantStyles}`}>
        {props.icon && (
          <FontAwesomeIcon className={styles.icon} icon={props.icon} />
        )}
        {props.children && <p className={styles.text}>{props.children}</p>}
      </button>
    </>
  );
};

export default Button;
