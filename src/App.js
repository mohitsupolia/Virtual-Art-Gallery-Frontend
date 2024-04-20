import Navbar from "./Component/Navbar";
import HomePage from "./Component/Pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import GoogleAuth from "./Component/auth/GoogleAuth";
import Login from "./Component/Login";
import ProductListingPage from "./Component/Pages/ProductListingPage";
import RegistrationForm from "./Component/RegistrationForm";
import BlogPage from "./Component/Pages/BlogPage";
import { useState } from "react";

function App() {
  // <>
  //   <BrowserRouter>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/" element={<HomePage />}></Route>
  //       <Route path="/auth" element={<GoogleAuth></GoogleAuth>}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // </>

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shop" element={<ProductListingPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/signup" element={<RegistrationForm />}></Route>
          <Route path="/auth" element={<GoogleAuth></GoogleAuth>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
