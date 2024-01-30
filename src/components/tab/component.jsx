import { Restaurant } from "../restaurant/component";

export const Tab = ({ restaurant }) => {
  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
};
