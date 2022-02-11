import { FC, useState } from "react";
import DUMMY_MEALS from "../../../data/dummyMeals";
import OrderItem from "../OrderItem";
import styles from "./OrdersList.module.scss";
import { useAppSelector } from "../../../store/store";

const OrdersList: FC = () => {
  const selectedMeals = useAppSelector((state) => state.meals.selectedMeals);


  let quantity
  let totalPrice = 0;

  return (
    <>
      <ul className={styles.ordersList}>
        {selectedMeals.map((meal) => {
          quantity = meal.quantity ? meal.quantity : 1
          totalPrice += meal.price * meal.quantity!;
          return (
            <OrderItem
              key={meal.id}
              id={meal.id}
              imageUrl={meal.imageUrl}
              title={meal.title}
              price={Number(meal.price.toFixed(2))}
              quantity={quantity}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <p>Discount</p>
        <p>$ 0</p>
        <p>Sub total</p>
        <p>$ {totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};

export default OrdersList;
