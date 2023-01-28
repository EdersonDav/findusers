import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/:user" />
      </Routes>
    </BrowserRouter>
  );
};
