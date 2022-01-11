import { FC } from "react";
import OrdersList from "./OrdersList";
import Button from "../UI/Button";
import styles from "./Orders.module.scss";

const Orders: FC = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.ordersListHeader}>
        <h4>Order info:</h4>
        <div>
          <h5 className={styles.itemField}>Item</h5>
          <h5 className={styles.qtyField}>Qty</h5>
          <h5 className={styles.priceField}>Price</h5>
        </div>
      </div>

      <div className={styles.ordersListContainer}>
        <OrdersList />
      </div>

      <div className={styles.ordersFooter}>
        <Button>Continue to Payment</Button>
      </div>
    </div>
  );
};

export default Orders;
