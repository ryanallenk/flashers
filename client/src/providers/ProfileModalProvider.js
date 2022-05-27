import { createContext, useState } from "react";

export const profileModalContext = createContext();

// creates global context to turn the profile modal off/on
export default function ProfileModalProvider(props) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const providerData = { showProfileModal, setShowProfileModal };

  return (
    <profileModalContext.Provider value={providerData}>
      {props.children}
    </profileModalContext.Provider>
  );
}
