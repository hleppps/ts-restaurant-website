import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DUMMY_MEALS from "../../../data/dummyMeals";
import MenuItem from "../MenuItem";
import styles from "./MenuList.module.scss";

const MenuList: FC = () => {
  const meals = useState(DUMMY_MEALS)[0];

  return (
    <Row xs={1} md={1} lg={2} xl={3} xxl={4} className={styles.mealsList}>
      {meals.map((meal) => (
        <Col className={styles.mealsListColumn} key={meal.id}>
          <MenuItem
            imageUrl={meal.imageUrl}
            title={meal.title}
            price={meal.price}
            availability={meal.availability}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MenuList;
