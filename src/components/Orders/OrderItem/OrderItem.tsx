import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { MealProps } from "../../../interfaces";
import { removeSelectedMealAction } from "../../../store/actions/mealsActions";
import { useAppDispatch } from "../../../store/store";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./OrderItem.module.scss";

interface OrderItemProps extends MealProps {
  quantity: number;
}

const OrderItem: FC<OrderItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const removeSelectedMealHandler = () => {
    dispatch(removeSelectedMealAction(props.id));
  };

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
          <Input placeholder={props.quantity} disabled />
        </div>

        <div className={styles.itemField}>
          <p>$ {(props.price * props.quantity).toFixed(2)}</p>
        </div>
      </div>

      <div className={styles.orderItemContent}>
        <Input placeholder="Order Note..." />
        <Button icon={faTrash} onClick={removeSelectedMealHandler} />
      </div>
    </li>
  );
};

export default OrderItem;
