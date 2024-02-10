import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { decrement, increment, selectDishAmountById } from "../../redux/ui/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDishById } from "../../redux/entities/dish/thunks/get-dishes";

export const Dish = ({ dishId, className }) => {
  const dish = useSelector(selectDishById(dishId));
  const amount = useSelector((state) => selectDishAmountById(state, dishId));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dispatch, dishId]);

  return (
    <div className={classNames(className)}>
      <div>
        <Button
          disabled={amount === 0}
          className={styles.dishButton}
          onClick={() => {
            dispatch(decrement(dishId));
          }}
        >
          -
        </Button>
        {amount}
        <Button
          disabled={amount === 5}
          className={styles.dishButton}
          onClick={() => {
            dispatch(increment(dishId));
          }}
        >
          +
        </Button>
      </div>
      {dish && (
        <div>
          <div>
            {dish.name} - {dish.price}$
          </div>
        </div>
      )}
    </div>
  );
};
