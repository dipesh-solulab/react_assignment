import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateDate } from "../Redux/actions";

const EditData = () => {
  const [updatedData, setUpdatedData] = useState("");
  const state = useSelector((state) => state.dataReducerPerform.items);
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const currentData = state.find((e) => e.id == id);
  //   const currentData = state.filter((e) => {
  //     return e.id == id;
  //   });
  console.log("currentDAta " + JSON.stringify(currentData));

  useEffect(() => {
    if (currentData) {
      setUpdatedData(currentData);
    }
  }, [currentData]);

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUpdatedData((prevValue) => {
      //   console.log(prevValue);
      return {
        ...updatedData,
        [name]: value,
      };
    });
  };
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
                // value="hey"
                value={updatedData.fname}
                onChange={inputHandler}
                // onChange={(e) => setUpdatedData(e.target.value)}
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
                value={updatedData.email}
                onChange={inputHandler}
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
                value={updatedData.mobile}
                onChange={inputHandler}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                dispatch(updateDate({ updatedData }), history("/"));
              }}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-primary ms-3"
              onClick={() => {
                history("/");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditData;
