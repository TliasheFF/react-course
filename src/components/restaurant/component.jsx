import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <Menu className={styles.restaurant_menu} menu={restaurant.menu} />
      <h3>Отзывы:</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
