import { Menu } from "../menu/component";
import { Review } from "../review/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Review reviews={restaurant.reviews} />
    </div>
  );
};
