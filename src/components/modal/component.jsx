import { useContext } from "react";
import { createPortal } from "react-dom";
import { AuthModal } from "../auth-form/component";
import { UserContext } from "../../contexts/user";

export const Modal = ({ state, setState }) => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      {state &&
        createPortal(
          <AuthModal
            onLogin={(authUser) => {
              setUser(authUser);
              setState(!state);
            }}
            onClose={() => setState(!state)}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
