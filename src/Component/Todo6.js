import React, { useState } from "react";
import {FaTrash } from "react-icons/fa";

export default function Todo6() {
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== " ") {
      setTodos([...todos, { text: todo.trim(), checked: false }]);
      setTodo(" ");
    }
  };

  return (
    <div className="App  ">
      <div className="todoo rounded-top my-4">
        <div className="container  ">
          <div className="row ">
            <div className="col-md-12 justify-content:center text-center text-light mt-4">
              <h3 className=" ">Todo List</h3>
            </div>
          </div>
          <div className="row cenet rounded-bottom">
            <div className="col-md-12 "></div>
          </div>
          <div className="puts">
            <div className="row ">
              <div className=" wrapp col-md-12  my-4  ">
              <div className="wrapper justify-content-center d-flex">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  className="form-control mt-2 w-75"
                  placeholder="What would you like to do?"
                />
                </div>

                <div className="bat  justify-content-center d-flex ">
                  <button
                    className="btn btn-danger my-2 px-4 "
                    onClick={addTodo}
                  >
                    <span className="px-4"> Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12  ">
              <ul class="list-group my-4 ">
                <li class="list-group-item disabled" aria-disabled="true">
                  <h4>Todo List</h4>
                </li>
                <li class="list-group-item ">
                  <span className=" list-unstyled  d-flex justify-content-between ">
                    <li className="">List</li>
                    <li className=" ">Status</li>
                    <li className=" ">Close</li>
                  </span>
                </li>
                <li class="list-group-item list-unstyled     d-flex justify-content-between">
                  <li> 
                  <div className="check ">
                    <input
                    className="me-3  "
                      type="checkbox"

                    />
                      </div>
                      </li>
                      <li>Text</li>
                      <li>
                      <div className="delet ">
                    <button className="delete  border-0 text-danger "
                      style={{ marginTop: "5px", marginBottom: "5px" }}
                    >
                     <FaTrash /> 
                    </button>
                    </div>
                      </li>
                  

                </li>
                <li class="list-group-item list-unstyled     d-flex justify-content-between">
                  <li> 
                  <div className="check ">
                    <input
                    className="me-3  "
                      type="checkbox"
                     
                    />
                      </div>
                      </li>
                      <li>Text</li>
                      <li>
                      <div className="delet ">
                    <button className="delete text-danger  border-0"
                      style={{ marginTop: "5px", marginBottom: "5px" }}
                    >
                 <FaTrash /> 
                    </button>
                    </div>
                      </li>
                </li>
                <li class="list-group-item list-unstyled     d-flex justify-content-between">
                  <li> 
                  <div className="check ">
                    <input
                    className="me-3  "
                      type="checkbox"
                     
                    />
                      </div>
                      </li>
                      <li>Text</li>
                      <li>
                      <div className="delet ">
                    <button className="delete text-danger  border-0 "
                      style={{ marginTop: "5px", marginBottom: "5px" }}
                    >
                    <FaTrash /> 
                    </button>
                    </div>
                      </li>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
