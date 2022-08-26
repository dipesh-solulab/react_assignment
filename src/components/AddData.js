import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../Redux/actions";

const AddData = () => {
  const [inputData, setInputdata] = useState({
    id: Math.floor(Math.random() * 100),
    fname: "",
    email: "",
    mobile: "",
  });
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setInputdata((prevValue) => {
      //   console.log(prevValue);
      return {
        ...inputData,
        [name]: value,
      };
    });
  };
  const history = useNavigate();

  return (
    <>
      <div className="container">
        <div className="wrapper_div mt-3">
          <h3 className="text-center">Registration Form</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                placeholder="Enter Name"
                value={inputData.fname}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={inputData.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
                maxLength={10}
                value={inputData.mobile}
                onChange={inputHandler}
                require
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                dispatch(
                  addData(inputData),
                  setInputdata({ fname: "", email: "", mobile: "" }),
                  history("/")
                );
              }}
            >
              Submit Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
