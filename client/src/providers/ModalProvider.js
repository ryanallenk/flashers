import { createContext, useState } from "react";

export const modalContext = createContext();

// creates global context to turn location modal off/on
export default function ModalProvider(props) {
  const [showModal, setShowModal] = useState(false);

  const providerData = { showModal, setShowModal };

  return (
    <modalContext.Provider value={providerData}>
      {props.children}
    </modalContext.Provider>
  );
}
