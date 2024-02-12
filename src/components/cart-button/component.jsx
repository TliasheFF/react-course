import { useState } from "react";
import { Button } from "../button/component";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import styles from "./styles.module.scss";
import { useRef } from "react";

export const CartButton = ({ amount }) => {
  const [coordinates, setCoordinates] = useState(null);
  const buttonRef = useRef();

  const toggleCartModal = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const { bottom, left } = buttonRef.current.getBoundingClientRect();
    setCoordinates({ left, top: bottom });
  };

  return (
    <div className={styles.root}>
      {amount > 0 && (
        <Button rootRef={buttonRef} onClick={() => toggleCartModal()}>
          {amount} pcs.
        </Button>
      )}
      {coordinates &&
        amount > 0 &&
        createPortal(
          <div style={coordinates} className={styles.container}>
            <CartContainer />
          </div>,
          document.getElementById("cart-popup")
        )}
    </div>
  );
};
