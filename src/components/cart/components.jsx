import { CartItem } from "../cart-item/component";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: 0 }}>Your cart</h2> <hr />
      {dishIds?.length && dishIds.map((dishId) => <CartItem dishId={dishId} key={dishId} />)}
    </div>
  );
};
