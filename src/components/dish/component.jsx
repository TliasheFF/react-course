import { useState } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const [count, setCount] = useState(0);

  return (
    <div className={classNames(className)}>
      <div>
        <Button disabled={count === 0} className={styles.dishButton} onClick={() => setCount(count - 1)}>
          -
        </Button>
        {count}
        <Button disabled={count === 5} className={styles.dishButton} onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <div>
        {dish.name} - {dish.price}$
      </div>
    </div>
  );
};
