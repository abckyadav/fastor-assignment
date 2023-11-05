import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import OtpVerification from "./OtpVerification";
import RestroLists from "./RestroLists";
import SingleRestro from "./SingleRestro";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/restro-lists" element={<RestroLists />} />
      <Route path="/restro-details/:id" element={<SingleRestro />} />
    </Routes>
  );
};

export default Router;
