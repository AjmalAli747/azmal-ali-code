import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormData = () => {
  const [userNumber, setUserNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const formData = (e) => {
    e.preventDefault();

    console.log(userNumber, userPassword);

    if (!userNumber) {
        toast("Enter Number")
    } else if (userPassword === "") {
      toast("Enter Password")
    } else {
        toast(`Thanks  Number : ${userNumber} Password : ${userPassword}`);

      navigate("/page");
    }
  };
  return (
    <>
      <div className="form">
        <form action="" onSubmit={formData}>
          <input
            type="number"
            placeholder="Enter Number"
            onChange={(e) => setUserNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Passowrd"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default FormData;
