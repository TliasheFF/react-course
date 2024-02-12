import { useSelector } from "react-redux";
import { selectCartDishIds } from "../../redux/ui/cart";
import { Cart } from "./components";

export const CartContainer = () => {
  const dishIds = useSelector(selectCartDishIds);
  return <Cart dishIds={dishIds} />;
};
