import React, { useState } from "react";
import backgroundimage from "../assests/images/img1.png";
import { findByLabelText } from "@testing-library/react";

export default function Todo4() {
  const [formVal, setFormVal] = useState([{ name: "" }]);
  let[records, setRecords]=useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newRecard={...formVal, id : new Date().getTime().toString()}
    console.log(records);
    setRecords([...records,  newRecard])
     console.log(records);
     setRecords=({name : ""});

  };

  const addNestedItem = ()=> {
    setRecords([...formVal, records]);
    setRecords=({name : ""});

  }

  const addition = () => {
    setFormVal([...formVal, {name: "" }]);
  };

  const onRemove = (i) => {
    const newForm = [...formVal];
    newForm.splice(i, 1);
    setFormVal(newForm);
  };

  const onHandle = (e, i) => {
    const newForm = [...formVal];
    newForm[i][e.target.name] = e.target.value;
    setFormVal(newForm);
  };

  return (
    <>
      
    <div className="App">
    <form onSubmit={onSubmit}>
      <div className="app1 px-2 py-4">
        <h2 className="text-light text-center">Multi Todo App</h2>
        <h5 className="h text-light ">Add a Element</h5>
  
          {formVal.map((item, i) => (
            <div className="d-flex m-4">
              {/* <label>Name</label> */}

              <input
                type="text"
                className="put px-2"
                name="name"
                placeholder="write your task"
                value={item.name||""}
                onChange={(e) => onHandle(e, i)}
              />
              <button
                onClick={addition}
                className="  btn btn-dark  px-3 py-2 "   
              >
                +
              </button>
              {i == 0 ? (
                " "
              ) : (
                <button className="btn btn-dark" onClick={() => onRemove(i)}>
                  -
                </button>
              )}
            </div>
          ))}

          <button type="submit" className="px-4 mx-4 mb-4  btn btn-dark" onClick={addNestedItem}>
            Login
          </button>

          {
            records.map((currEle, id)=>{
            return(
                <>
                <div key={id}>
                  <p>{currEle.name||""}</p> 
                  <div className="d-flex">
                  </div> 
                </div>
                </>
            )
        })
      }


         
    </div>
   
          </form>
         
    </div>
    
          
         

     {/* <!-- Modal --> */}
{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
      </div> */}
  

     
      </>
  );
}
