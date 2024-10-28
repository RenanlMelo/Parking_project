import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import App from "./App";
import { Profile } from "./pages/Profile";
import { Map } from "./pages/Map";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
