import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./OrderItem.module.scss";
import { MealProps } from "../../../interfaces";

interface OrderItemProps extends MealProps {
  quantity: number;
}

const OrderItem: FC<OrderItemProps> = (props) => {
  return (
    <li className={styles.orderItem}>
      <div className={styles.orderItemContent}>
        <div className={styles.itemField}>
          <div className={styles.imageContent}>
            <img src={props.imageUrl} alt="" />
          </div>
          <div className={styles.textContent}>
            <h6>{props.title}</h6>
            <p>$ {props.price}</p>
          </div>
        </div>

        <div className={styles.itemField}>
          <Input value={2} disabled />
        </div>

        <div className={styles.itemField}>
          <p>$ {props.price * props.quantity}</p>
        </div>
      </div>

      <div className={styles.orderItemContent}>
        <Input placeholder="Order Note..." />
        <Button icon={faTrash} />
      </div>
    </li>
  );
};

export default OrderItem;
