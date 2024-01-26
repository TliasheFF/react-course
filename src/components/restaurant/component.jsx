import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Restaurant = ({ restaurant, activeTab, className }) => {
  return (
    <div className={classNames(styles.root, activeTab === restaurant.id ? className.tabActive : className.tabDefault)}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <Menu menu={restaurant.menu} />
      <h3>Отзывы:</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
