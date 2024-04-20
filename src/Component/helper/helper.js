// AuthHelper.js

import { useState } from "react";

let isLoggedInGlobal = false;
let userNameGlobal = "";

export const handleLogin = (name) => {
  isLoggedInGlobal = true;
  userNameGlobal = name;
};

export const getIsLoggedIn = () => {
  return isLoggedInGlobal;
};

export const getUserName = () => {
  return userNameGlobal;
};
