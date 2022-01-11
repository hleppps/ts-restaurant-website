import { FC, useState } from "react";
import DUMMY_MEALS from "../../../data/dummyMeals";
import OrderItem from "../OrderItem";
import styles from "./OrdersList.module.scss";

const OrdersList: FC = () => {
  const meals = useState(DUMMY_MEALS)[0];
  const quantity = 2;
  let totalPrice = 0;

  return (
    <>
      <ul className={styles.ordersList}>
        {meals.map((meal) => {
          totalPrice += meal.price * quantity;
          return (
            <OrderItem
              key={meal.id}
              imageUrl={meal.imageUrl}
              title={meal.title}
              price={meal.price}
              quantity={quantity}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <p>Discount</p>
        <p>$ 0</p>
        <p>Sub total</p>
        <p>$ {totalPrice}</p>
      </div>
    </>
  );
};

export default OrdersList;
