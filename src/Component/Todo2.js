import React, { useState } from "react";

export default function Todo2() {
  const [inputList, setInputList] = useState([{ firstName: "", }]);

 const handleaddclick=()=>{
    setInputList([...inputList, {firstName: ""  }]);
  }

  const handleinputchange=(e,index)=>{
const {name, value}=e.target;
const list=[...inputList];
list[index][name]=value;
setInputList(list);
  }
  const handleremove=index=>{
    const list=[...inputList];
    list.splice(index, 0);
    setInputList(list);
  }

 

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("submit", inputList)

    const newEntry={ inputList }
    setInputList([  newEntry]);
   }
  // const submit=()=>{
  //   console.log("please enter a correct value",  inputList)
  // }

  return (
    <form action=""  onSubmit={onSubmit}>
    <div className="content">
      <div className="row">
        <div className="col-sm-12">
          <h5 className="fw-bold mt-3 mb-4">
            Dynamically add/remove input fiuld in react js
          </h5>
          
          {inputList.map((x, i)=>{
            return(
            
          <div className="row mb-3">
            <div className="form-group col-md-4">
            
              <label>First Name</label>
              <input
                type="text"
                name="FirstName"
                class="Form-control"
                placeholder="Enter First Name"
                autoComplete='off'
               
                onChange={e=>handleinputchange(e,i)}
              />
            </div>
            {/* <div className="form-group1 col-md-4">
              <label>Last Name</label>
              <input
                type="text"
                name="LastName"
                class="Form-control"
                placeholder="Enter Last Name"
                onChange={e=>handleinputchange(e,i)}
              />
            </div> */}
            
            <div className="form-group2 col-md-6">
            {inputList.length!==1&&
              <button className="btn btn-danger"onClick={()=>handleremove(i)}>Remove</button>
            }
            {inputList.length-1 ==i &&
              <button className="btn btn-success"onClick={handleaddclick}>Add More</button>
            }
            <p>{x.FirstName}</p>
            </div>
          </div>)
         
        })}
      

        </div>
      </div>
    </div>
    <button type="submit" >submit</button>
   
    </form>
  );
}
