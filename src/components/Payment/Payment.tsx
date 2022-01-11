import { FC } from "react";
import styles from "./Payment.module.scss";
import Button from "./../UI/Button";
import Input from "../UI/Input";
import { faWallet, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Payment: FC = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentHeader}>
        <h3>Payment:</h3>
      </div>

      <div className={styles.paymentContainer}>
        <h4>Payment Method: </h4>
        <div className={styles.paymentMethods}>
          <Button icon={faCreditCard} variant="secondary" active={true}>
            Credit Card
          </Button>
          <Button icon={faWallet} variant="secondary">
            Cash
          </Button>
        </div>
        <div className={styles.paymentInfo}>
          <Input value="Levi Ackerman" label="Cardholder Name" />
          <Input value="2564 1421 0897 1244" label="Card Number" />
          <div className={styles.cardPrivateInfo}>
            <Input value="02/2022" label="Expiration Date" />
            <Input value="* * *" label="CVV" />
          </div>
        </div>
      </div>

      <div className={styles.paymentFooter}>
        <Button>Cancel</Button>
        <Button active={true}>Confirm Payment</Button>
      </div>
    </div>
  );
};

export default Payment;
