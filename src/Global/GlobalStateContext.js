import React, { createContext, useContext } from "react";

const GlobalStateContext = createContext();
export default GlobalStateContext;

export const useGlobal = () => useContext(GlobalStateContext);
