import { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./PopUp.module.scss";

interface PopUpProps {
  onHide?: () => void;
}

const Backdrop: FC<PopUpProps> = (props) => {
  return <div className={styles.backdrop} onClick={props.onHide} />;
};

const PopUpContent: FC<PopUpProps> = (props) => {
  return <div className={styles.popUp}>{props.children}</div>;
};

const PopUp: FC<PopUpProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHide} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <PopUpContent>{props.children}</PopUpContent>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default PopUp;
