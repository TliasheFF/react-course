import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/reataurant/selectors";

export const RestaurantTabs = ({ onSelect }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={styles.root}>
      {restaurantIds.map((id) => (
        <Tab key={id} id={id} onClick={() => onSelect(id)} />
      ))}
    </div>
  );
};
