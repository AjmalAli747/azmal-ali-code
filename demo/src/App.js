import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormData from "./FormData";
import Page from "./Page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormData />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
