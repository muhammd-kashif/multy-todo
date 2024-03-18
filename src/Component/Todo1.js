import React, { useState } from "react";
import Todo from "./Todo";


// reset the input fields to their orignal state after ADD
// find another way to give unique id instead of using new Date()

export default function Todo1() {
  const [title, setTitle] = useState("");
  const [taskInputFields, setTaskInputFields] = useState([
    { id: new Date().getMilliseconds(), task: "" },
  ]);

  const [todos, setTodos] = useState([]);
  const addInputField = () => {
    setTaskInputFields([
      ...taskInputFields,
      { id: new Date().getMilliseconds(), task: "" },
     
    ]);
  };

  const removInputField = (id) => {
    console.log(id);
    const newArray = taskInputFields.filter((item) => item.id !== id);
    setTaskInputFields(newArray);
   
  };

  const handleSumbit = (e) => {
e.preventDefault();
// console.log('taskInputFields');

// const newEntry={ taskInputFields }
// setTaskInputFields([ newEntry]);

    // Filter out empty tasks before adding to todos
    const filteredTasks = taskInputFields.filter((task) => task.task.trim() !== '');
    setTodos([...todos, { id:  new Date().getMilliseconds(), title, tasks: filteredTasks }]);
    setTitle("");
    setTaskInputFields([{ id:  new Date().getMilliseconds(), task: "" }]); // Reset task input fields

  }

  const AddItem = () => {
    // setTodos([...todos, { taskInputFields, title }]);
    // setTitle("")
    // setTaskInputFields('');

    setTaskInputFields([
      ...taskInputFields,
      { id:new Date().getMilliseconds(), task: "" },
    ]);
  }

  // const handleUPdate = () => {
  //   setTodos([...todos, { taskInputFields, title }]);
  // };

  return (
    <>
   
      <Todo />
      <form   onSubmit={handleSumbit}>
      <div className="multi  bg-danger">
        {/* <img src={img1} alt="pic" /> */}
        <div className="todo ">
          <div className="todos">
            <h2 className="mt-4">Multi Todo App</h2>
            <div className="input pt-4 ">
              <h4 className=" label ">Title of List</h4>

              <input
                type="text "
                className="form-control "
                placeholder="write your task..."
                value={taskInputFields.title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <h4 className="py-2">Task of list</h4>
              {taskInputFields.map((taskInputField, index) => (
                <>
                  <div className="d-flex col-md-12 ">
                    <input
                      type="text "
                      className="form-control col-md-7 mb-3"
                      placeholder="write your task..."
                      value={taskInputField.task}
                      onChange={(e) => {
                        setTaskInputFields((prevFields) =>
                          prevFields.map((field) =>
                            field.id === taskInputField.id
                              ? { ...field, task: e.target.value }
                              : field
                          )
                        );
                      }}
                    />

                    <>
                      {taskInputFields.length - 1 === index && (
                        <button
                          className="btn btn-primary mx-2 mb-3"
                          onClick={addInputField}
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      )}

                      {taskInputFields.length !== 1 && (
                        <button
                          className="btn btn-primary mb-3"
                          onClick={() => removInputField(taskInputField.id)}
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      )}

                    </>
                  </div>
                </>
              ))}
            </div>
          </div>

          <button
            className="btn btn-primary px-5 mt-3 mb-2" type="submit"
            onSubmit={AddItem}
          >
            ADD
          </button>
          {todos?.list?.map((newtodo) => {
            return (
              <>
                <p>{newtodo.title}</p>
                <p>{newtodo.task}</p>
              </>
            );
          })}
        </div>
      </div>
          </form>
    </>
  );
}
