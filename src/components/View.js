import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";

const View = () => {
  const [viewData, setViewDAta] = useState([]);

  const { id } = useParams();
  console.log("Product Id is :- " + id);

  const state = useSelector((state) => state.dataReducerPerform.items);
  //   console.log(state);

  const perticularData = () => {
    let viewByData = state.filter((e) => {
      return e.id == id;
    });
    // console.log("ViewData: " + JSON.stringify(viewByData));
    setViewDAta(viewByData);
  };

  useEffect(() => {
    perticularData();
  }, [id]);

  const history = useNavigate();
  return (
    <>
      <div className="container">
        <div className="table_wrapper mt-3">
          <Table bordered className="mb-0">
            {viewData.map((currentElement) => {
              const { id, fname, email, mobile } = currentElement;
              return (
                <tbody key={id}>
                  <tr>
                    <th>Name</th>
                    <td>{fname}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th>Mobile No.</th>
                    <td>{mobile}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
          <div className="text-center mt-2">
            <h2>
              <button className="btn btn-success" onClick={() => history("/")}>
                Go Back
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
