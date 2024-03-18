import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";

export default function Todo7({ todo, onRemove }) {
  const [title, setTitle] = useState("");
  const [taskInputFields, setTaskInputFields] = useState([
    { id: new Date().getMilliseconds(), task: "" },
  ]);
  const [todos, setTodos] = useState([]);
  console.log(todos, "<<<<<<<<<<<<<<<<<<<");
  const [editIndex, setEditIndex] = useState(null);
  // const [editTodo, setEditTodo] = useState({ tasks: [] });
  const [editTodo, setEditTodo] = useState({
    title: '', // Add title property if necessary
    tasks: [
      { id: 1, task: '' },
      // Add more tasks as needed
    ],
  });
  

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  //plus btn
  const addInputField = () => {
    setTaskInputFields([
      ...taskInputFields,
      { id: new Date().getMilliseconds(), task: "" },
    ]);
  };
  //delete btn
  const handleDelete = (id) => {
    let reducedTodo = [...todos];
    reducedTodo = reducedTodo.filter((todo) => todo.id !== id);
    setTodos(reducedTodo);
  };

  // const handleEdit = (newtodo, index) => {
  //   setEditIndex(index);
  //   setEditTodo(newtodo);
  //   toggle();
  // };
  //Edit buutton
  const handleEdit = (newtodo) => {
    console.log("newtodo", newtodo);

    setEditTodo(newtodo);
    toggle();
  };
  //remove btn
  const removInputField = (id) => {
    const newArray = taskInputFields.filter((item) => item.id !== id);
    setTaskInputFields(newArray);
  };
  //submit btn
  const handleSumbit = (e) => {
    e.preventDefault();
    const filteredTasks = taskInputFields.filter(
      (task) => task.task.trim() !== ""
    );
    setTodos([
      ...todos,
      { id: new Date().getMilliseconds(), title, tasks: filteredTasks },
    ]);
    setTitle("");
    setTaskInputFields([{ id: new Date().getMilliseconds(), task: "" }]);
  };

  const handleSumbitModal = (e) => {
    e.preventDefault();
    const filteredTasks = taskInputFields.filter(
      (task) => task.task.trim() !== ""
    );
    const updatedTodos = [...todos];
    console.log('editIndex: ', editIndex);
    updatedTodos[editIndex] = {
      id: new Date().getMilliseconds(),
      title,
      tasks: filteredTasks,
    };
    console.log('updatedTodos: ', updatedTodos);
    setTodos(updatedTodos);
    setTitle("");
    setTaskInputFields([{ id: new Date().getMilliseconds(), task: "" }]);
    toggle();
  };

  
  //add...........................
  const handleAddTask = (index) => {
    const updatedTasks = [...editTodo.tasks];
    updatedTasks.splice(index + 1, 0, {
      id: new Date().getMilliseconds(),
      task: "",
    });
    setEditTodo((prevEditTodo) => ({ ...prevEditTodo, tasks: updatedTasks }));
  };

  const handleRemoveTask = (index) => {
    if (editTodo.tasks.length > 1) {
      const updatedTasks = editTodo.tasks.filter((_, i) => i !== index);
      setEditTodo((prevEditTodo) => ({ ...prevEditTodo, tasks: updatedTasks }));
    }
  };
  const handleTaskChange = (e, index) => {
    const updatedTasks = [...editTodo.tasks];
    updatedTasks[index] = { ...updatedTasks[index], task: e.target.value };
    setEditTodo((prevEditTodo) => ({ ...prevEditTodo, tasks: updatedTasks }));
  };

  return (
    <>
      {/* <Todo /> */}

      <form onSubmit={handleSumbit}>
        <div className="multi  bg-danger">
          <div className="todo ">
            <div className="todos">
              <h2 className="mt-4">Multi Todo App</h2>
              <div className="input pt-4 ">
                <h4 className=" label ">Title of List</h4>

                <input
                  type="text "
                  className="form-control"
                  placeholder="write your task..."
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  // setInputErrors((prevErrors) => ({ ...prevErrors, title: "" }));
                />

                <h4 className="py-2">Task of list</h4>
                {taskInputFields.map((taskInputField, index) => (
                  <div key={taskInputField.id} className="d-flex col-md-12">
                    <input
                      type="text "
                      className={"form-control col-md-7 mb-3 "}
                      placeholder="write your task..."
                      value={taskInputField.task}
                      required
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
                          <i className="fas fa-plus"></i>
                        </button>
                      )}

                      {taskInputFields.length !== 1 && (
                        <button
                          className="btn btn-primary mb-3"
                          onClick={() => removInputField(taskInputField.id)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                      )}
                    </>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-primary px-5 mt-3 mb-2" type="submit">
              ADD
            </button>
            {todos.map((newtodo) => (
              <div key={newtodo.id}>
                <h3>{(0) +  " " + newtodo.title}</h3>
                {newtodo.tasks.map((task, index) => (
                  <h5 style={{ margin: "1rem" }} key={index}>
                    {`${index} - ${task.task}`}
                    {/* {index + 1 + " " + task.task} */}
                  </h5>
                ))}
                <div className="del-writ-icons ms-5">
                  <button
                    className="justify-content-center align-items-center"
                    onClick={() => handleDelete(newtodo.id)}
                    style={{ color: "red" }}
                  >
                    <i className="fas fa-trash  fs-5 ms-2 "></i>
                  </button>

                  <button
                    className="justify-content-center align-items-center"
                    onClick={() => handleEdit(newtodo)}
                    style={{ color: "yellow" }}
                  >
                    <i className="fas fa-edit fs-5  ms-2 "></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
      <Modal size="lg" isOpen={open}>
        <ModalBody>
          <Form className="sm"  onSubmit={handleSumbitModal}>
            <div
              className=" align-items-center justify-content-center "
              style={{ marginLeft: "225px" }}
            >
              <FormGroup>
                <Input
                  type=""
                  className=" align-items-center d-flex justify-content-center  w-50"
                  id=""
                  name="name"
                  placeholder="Title"
                  value={editTodo?.title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>{" "}
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <FormGroup>
                {editTodo.tasks.map((task, index) => (
                  <div className="d-flex" key={task.id}>
                    <Input
                      className="mb-3 w-100"
                      name="name"
                      placeholder="task"
                      type="text"
                      value={task.task}
                      required
                      onChange={(e) => handleTaskChange(e, index)}
                    />
                    {editTodo.tasks.length - 1 === index && (
                      <>
                        <button
                          className="btn btn-primary mx-2 mb-3"
                          onClick={() => handleAddTask(index)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </>
                    )}
                    {editTodo.tasks.length > 1 && (
                      <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleRemoveTask(index)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                    )}
                  </div>
                ))}
              </FormGroup>
            </div>

            <Button type="submit">Update</Button>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
