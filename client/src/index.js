import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.js";
import UserList from "./components/userList/userList";
import Form from "./components/form_container/form";
import "./index.css";
import UpdateForm from "./components/update_form/UpdateForm.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/update_user/:id" element={<UpdateForm />} />
    </Routes>
  </BrowserRouter>
);
