import React from "react";
import "./ListPassbook.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createNewPassbook } from "../../services/userService";
import DatePicker from "react-datepicker";
const ListPassbook = (props) => {
  return (
    <div className="container">
      <table class="table caption-top">
        <caption className="title text-center">List of passbook</caption>
        <thead class="table-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Code</th>
            <th scope="col">Type</th>
            <th scope="col">User name</th>
            <th scope="col">Deposit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>300</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ListPassbook;
