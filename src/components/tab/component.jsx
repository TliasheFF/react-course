import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/reataurant/selectors";

export const Tab = ({ id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <Button className={styles.tabsButton} size="l" onClick={onClick}>
      {restaurant.name}
    </Button>
  );
};
