import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Menu = ({ menu, className }) => {
  return (
    <ul className={classNames(className)}>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish className={styles.dishes} dish={dish} />
        </li>
      ))}
    </ul>
  );
};
