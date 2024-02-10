import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishAmountById } from "../../redux/ui/cart";
import styles from "./styles.module.scss";

export const CartItem = ({ dishId }) => {
  const dish = useSelector(selectDishById(dishId));
  const amount = useSelector((state) => selectDishAmountById(state, dishId));

  return (
    <div className={styles.root}>
      {dish && (
        <>
          <span style={{ fontStyle: "italic" }}>{dish.name}:</span> {amount} pcs.
        </>
      )}
    </div>
  );
};
