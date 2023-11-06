import React from "react";
import "./Passbook.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createNewPassbook } from "../../services/userService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Passbook = (props) => {
  const [code, setCode] = useState("");
  const [type, setType] = useState("");
  const [username, setUsername] = useState("");
  const [cmnd, setCmnd] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const defaultValidInput = {
    isValidCode: true,
    isValidType: true,
    isValidCMND: true,
    isValidAddress: true,
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

    if (!type) {
      toast.error("Type is required!");
      setObjectCheckInput({ ...defaultValidInput, isValidphone: false });
      return false;
    }
    if (!cmnd) {
      toast.error("CMND is required!");
      setObjectCheckInput({ ...defaultValidInput, isValidphone: false });
      return false;
    }
    if (!address) {
      toast.error("Address is required!");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidAddress: false,
      });

      return false;
    }
    return true;
  };
  let handleCreate = async () => {
    let check = isValidInputs();
    if (check === true) {
      let response = await createNewPassbook({
        code: code,
        type: type,
        username: username,
        cmnd: cmnd,
        address: address,
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
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Passbook</div>
            <div className="detail">Create a new passbook</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Passbook</div>
            <div className="form-group">
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
            <div className="form-group">
              <label>Type of passbook:</label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidType
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Type of passbook"
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>User name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="User name"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CMND:</label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidCMND
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="CMND"
                value={cmnd}
                onChange={(event) => setCmnd(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidAddress
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <DatePicker
                className="form-control"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className="form-group">
              <label>Deposit:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Deposit"
                // onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={() => handleCreate()}>
              Create new passbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Passbook;
