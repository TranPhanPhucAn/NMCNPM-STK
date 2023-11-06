import "./App.scss";
import Nav from "./components/Navigation/Nav";
import { Routes, Route } from "react-router-dom";
import Passbook from "./components/Passbook/Passbook";
import PutMoney from "./components/PutMoney/PutMoney";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Withdrawn from "./components/Withdrawn/Withdrawn";
import ListPassbook from "./components/ListPassbook/ListPassbook";
import _ from "lodash";
function App() {
  return (
    <>
      <div className="app-header">
        <Nav />
      </div>
      <div className="app-container">
        <Routes>
          <Route path="/about">about</Route>
          <Route path="/create" element={<Passbook />} />
          <Route path="/putMoney" element={<PutMoney />} />
          <Route path="/withdrawn" element={<Withdrawn />} />
          <Route path="/listPassbook" element={<ListPassbook />} />

          <Route path="/">home</Route>
          <Route path="*">404 not found</Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
