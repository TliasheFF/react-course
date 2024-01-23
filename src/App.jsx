import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <Layout>
      <div className="grid_container">
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </Layout>
  );
};
