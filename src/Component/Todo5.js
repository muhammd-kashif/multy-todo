// ... (import statements)
import { useState } from "react";

export default function Todo5() {
  const [title, setTitle] = useState("");
  const [taskInputFields, setTaskInputFields] = useState([
    { id:new Date().getMilliseconds(), task: "" },
   
  ]);
  const [todos, setTodos] = useState([]);
  const [inputErrors, setInputErrors] = useState({});

  const addInputField = () => {
    setTaskInputFields([
      ...taskInputFields,
      { id:new Date().getMilliseconds(), task: "" },
     
    ]);
  };

  const removInputField = (id) => {
    const newArray = taskInputFields.filter((item) => item.id !== id);
    setTaskInputFields(newArray);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    // Check for empty title
    if (title.trim() === "") {
      setInputErrors((prevErrors) => ({ ...prevErrors, title: "Please fill out this field" }));
      return;
    } else {
      setInputErrors((prevErrors) => ({ ...prevErrors, title: "" }));
    }

    // Check for empty tasks
    const areTasksEmpty = taskInputFields.some((task) => task.task.trim() === "");
    if (areTasksEmpty) {
      setInputErrors((prevErrors) => ({ ...prevErrors, tasks: "Please fill out all task fields" }));
      return;
    } else {
      setInputErrors((prevErrors) => ({ ...prevErrors, tasks: "" }));
    }

    const filteredTasks = taskInputFields.filter((task) => task.task.trim() !== '');
    setTodos([...todos, { id:new Date().getMilliseconds(), title, tasks: filteredTasks }]);
    setTitle("");
    setTaskInputFields([
      { id:new Date().getMilliseconds(), task: "" },
     
    ]);
  };

  return (
    <>
      {/* ... (other components or elements) */}
      <form onSubmit={handleSumbit}>
        {/* ... (other form elements) */}
        <h4 className=" label ">Title of List</h4>
        <input
          type="text"
          className={`form-control ${inputErrors.title ? 'is-invalid' : ''}`}
          placeholder="write your task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setInputErrors((prevErrors) => ({ ...prevErrors, title: "" }));
          }}
        />
        {inputErrors.title && <div className="invalid-feedback">{inputErrors.title}</div>}

        <h4 className="py-2">Task of list</h4>
        {taskInputFields.map((taskInputField, index) => (
          <div key={taskInputField.id} className="d-flex col-md-12">
            <input
              type="text"
              className={`form-control col-md-7 mb-3 ${inputErrors.tasks ? 'is-invalid' : ''}`}
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
                setInputErrors((prevErrors) => ({ ...prevErrors, tasks: "" }));
              }}
            />
            {taskInputFields.length - 1 === index && (
              <button
                className="btn btn-primary mx-2 mb-3"
                type="button"
                onClick={addInputField}
              >
                <i className="fas fa-plus"></i>
              </button>
            )}
            {taskInputFields.length !== 1 && (
              <button
                className="btn btn-primary mb-3"
                type="button"
                onClick={() => removInputField(taskInputField.id)}
              >
                <i className="fas fa-minus"></i>
              </button>
            )}
          </div>
        ))}
        {inputErrors.tasks && <div className="invalid-feedback">{inputErrors.tasks}</div>}

        {/* ... (other form elements) */}
        <button className="btn btn-primary px-5 mt-3 mb-2" type="submit">
          ADD
        </button>
      </form>
    </>
  );
}
