import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { Card } from "react-bootstrap";
import { MealProps } from "../../../interfaces";
import { addSelectedMealAction } from "../../../store/actions/mealsActions";
import { useAppDispatch } from "../../../store/store";
import Button from "../../UI/Button";
import styles from "./MenuItem.module.scss";

const MenuItem: FC<MealProps> = (props) => {
  const dispatch = useAppDispatch();

  const addSelectedMealHandler = () => {
    dispatch(addSelectedMealAction(props.id))
  };

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.imageContainer}>
        <Card.Img
          draggable={false}
          variant="top"
          src={props.imageUrl}
          className="img-responsive center-block"
        />
      </Card.Header>
      <Card.Body className={styles.body}>
        <Card.Title as="h3">{props.title}</Card.Title>
        <div>
          <Card.Text>$ {props.price}</Card.Text>
          <Card.Text className={styles.availability}>
            {props.availability}
            {props.availability === 1 ? " Bowl " : " Bowls "}
            available
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <Button icon={faShoppingBasket} variant="secondary" onClick={addSelectedMealHandler} />
      </Card.Footer>
    </Card>
  );
};

export default MenuItem;
