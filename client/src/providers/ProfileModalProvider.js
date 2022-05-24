import { createContext, useState } from "react";

const axios = require("axios").default;

export const profileModalContext = createContext();


export default function ProfileModalProvider(props) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const providerData = { showProfileModal, setShowProfileModal };

  return (
    <profileModalContext.Provider value={providerData}>
      {props.children}
    </profileModalContext.Provider>
  );
}
