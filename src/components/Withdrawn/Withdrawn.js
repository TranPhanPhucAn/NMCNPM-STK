import React from "react";
import "./Withdrawn.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { putMoney } from "../../services/userService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Withdrawn = (props) => {
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState(new Date());
  const defaultValidInput = {
    isValidCode: true,
    isValidUsername: true,
    isValidMoney: true,
  };
  const [objectCheckInput, setObjectCheckInput] = useState(defaultValidInput);
  useEffect(() => {}, []);
  const isValidInputs = () => {
    setObjectCheckInput(defaultValidInput);
    if (!code) {
      toast.error("Code is required!");
      setObjectCheckInput({ ...defaultValidInput, isValidCode: false });
      return false;
    }

    if (!username) {
      toast.error("Type is required!");
      setObjectCheckInput({ ...defaultValidInput, isValidUsername: false });
      return false;
    }
    if (!money) {
      toast.error("Address is required!");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidMoney: false,
      });

      return false;
    }
    return true;
  };
  let handlePutMoney = async () => {
    let check = isValidInputs();
    if (check === true) {
      let response = await putMoney({
        code: code,
        username: username,
        date: date,
        money: money,
      });
      let serverData = response.data;
      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
      } else {
        toast.error(serverData.EM);
      }
    }
  };
  return (
    <div className="container">
      <div className="text-center mb-3 title">Withdrawn</div>
      <div className="row mb-3">
        <div className="col-6 form-group">
          <label>Code:</label>
          <input
            type="text"
            className={
              objectCheckInput.isValidCode
                ? "form-control"
                : "form-control is-invalid"
            }
            placeholder="Code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
        <div className="col-6 form-group">
          <label>User name:</label>
          <input
            type="text"
            className={
              objectCheckInput.isValidUsername
                ? "form-control"
                : "form-control is-invalid"
            }
            placeholder="User name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="col-6 form-group">
          <label>Date:</label>
          <DatePicker
            className="form-control"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="col-6 form-group">
          <label>Deposit:</label>
          <input
            type="text"
            className={
              objectCheckInput.isValidMoney
                ? "form-control"
                : "form-control is-invalid"
            }
            placeholder="Deposit"
            value={money}
            onChange={(event) => setMoney(event.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => handlePutMoney()}>
        Withdrawn
      </button>
    </div>
  );
};
export default Withdrawn;
