import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./pages/restaurant-page/component";

export const App = () => {
  return (
    <Layout className="layout">
      <div className="container">
        <RestaurantPage/>
      </div>
    </Layout>
  );
};
