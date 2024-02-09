import styles from "./styles.module.scss";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/reataurant/selectors";

export const Restaurant = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <div className={classNames(styles.root, className)}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Menu:</h3>
      <Menu className={styles.restaurant_menu} menuIds={restaurant.menu} />
      <h3>Reviews:</h3>
      <Reviews reviewsIds={restaurant.reviews} />
    </div>
  );
};
