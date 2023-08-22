import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bugs, Home, Layout, Login, Profile, Error, Demo } from "../pages";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bugs" element={<Bugs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="demo" element={<Demo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
