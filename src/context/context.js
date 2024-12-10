"use client";

import React from "react";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  // bool
  const [filterModal, setFilterModal] = useState(false);

  //form
  const [signupField, setSignupField] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });
  const [resetField, setResetField] = useState({
    createPassword: "",
    confirmPassword: "",
  });

  return (
    <AppContext.Provider
      value={{
        signupField,
        setSignupField,
        loginField,
        setLoginField,
        resetField,
        setResetField,
        filterModal,
        setFilterModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
