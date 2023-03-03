import React from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider value={"Test ABC"}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
