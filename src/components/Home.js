import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteData, infoData } from "../Redux/actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const state = useSelector((state) => state.dataReducerPerform.items);
  //   console.log("State is :- " + state);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [searchData, setSearchData] = useState("");

  return (
    <>
      <div className="container">
        <div className="wrapper">
        <div className="UpperBar_info d-flex justify-content-between mt-3 mb-4">
        <div className="search_Bar_Warapper">
            <Form onSubmit={(e) => e.preventDefaul()}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Search..."
                  aria-label="search"
                  aria-describedby="basic-addon2"
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <Button variant="primary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="addDataButton_Wrapper">
            <button className="btn btn-success" onClick={()=>history("/add")}>Add Data</button>
          </div>
        </div>
          
          <h3 className="text-center">List of Registration Data</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state
                .filter((currentElement) => {
                  if (searchData === "") {
                    return currentElement;
                  } else if (
                    currentElement.fname
                      .toLowerCase()
                      .includes(searchData.toLocaleLowerCase())
                  ) {
                    return currentElement;
                  }
                })
                .map((currentElement, index) => {
                  const { id, fname, email, mobile } = currentElement;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{fname}</td>
                      <td>{email}</td>
                      <td>{mobile}</td>
                      <td>
                        <div className="">
                          <button
                            className="btn"
                            onClick={() => {
                              dispatch(infoData(id), history(`/view/${id}`));
                            }}
                          >
                            {/* view  */}
                            <FaEye />
                          </button>

                          <button
                            className="btn"
                            onClick={() => {
                              history(`/edit/${id}`);
                            }}
                          >
                            {/* Edit */}
                            <FaPen />
                          </button>

                          <button
                            className="btn"
                            onClick={() => {
                              dispatch(
                                deleteData(id),
                                toast.success("Deleted Succesfully", {
                                  autoClose: 3000,
                                })
                              );
                            }}
                          >
                            {/* Delete */}
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <ToastContainer theme="colored" />
          </Table>
        </div>
      </div>
    </>
  );
};

export default Home;
