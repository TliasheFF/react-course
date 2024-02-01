import { useState } from "react";
import { Button } from "../button/component";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Dish = ({ dish, className }) => {
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
