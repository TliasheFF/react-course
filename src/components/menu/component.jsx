import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
  return (
    <ul className={styles.root}>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish className={styles.dishes} dish={dish} />
        </li>
      ))}
    </ul>
  );
};
