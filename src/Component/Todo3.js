import React, { useState } from 'react'

export default function Todo3() {
  const[fName, setFName]=useState("");
  const[lName, setLName]=useState("");
  const[allEntry, setAllEntry]=useState([]);

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("submit", allEntry)
    const newEntry={fName:fName, lName:lName}
    setAllEntry([...allEntry,  newEntry]);
  }

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor='fName'>First Name</label>
          <input type='text' name='fName' id='fName'value={fName}
           onChange={(e)=>setFName(e.target.value)} autoComplete='off'/>
              <button  type='btn'>+</button>
        </div>
     
        <div>
          <label htmlFor='lName'>Last Name</label>
          <input type='text' name='lName' id='lName' value={lName}
           onChange={(e)=>setLName(e.target.value)}  autoComplete='off'/>
        </div>

        
        <button type='submit'>submit</button>
      </form>

      <div>
        {
          allEntry.map((currEle)=>{
            return(
              <div className='list' style={{display:"flex", justifyContent:"center", 
              textAlign:"center", gap:"10px"}}>
                <p>{currEle.fName}</p>
                <p>{currEle.lName}</p>
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}
