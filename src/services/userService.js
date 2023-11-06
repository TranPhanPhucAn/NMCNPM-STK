import axios from "axios";
const createNewPassbook = (data) => {
  return axios.post("http://localhost:8080/api/create-new-passbook", data);
};
const putMoney = (data) => {
  return axios.post("http://localhost:8080/api/create-new-passbook", data);
};
export { createNewPassbook, putMoney };
