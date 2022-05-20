import { createContext, useState } from "react";

export const editFormModalContext = createContext();

export default function EditFormModalProvider(props) {
  const [showEditFormModal, setShowEditFormModal] = useState(false);

  const providerData = { showEditFormModal, setShowEditFormModal };

  return (
    <editFormModalContext.Provider value={providerData}>
      {props.children}
    </editFormModalContext.Provider>
  );
}
