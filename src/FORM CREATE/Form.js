import React, { useState } from 'react'

const Form = () => {
    const [firstInpVal, setFirstInp] = useState("");
    const [secondInpVal, setSecondInp] = useState("");
    const [inputEmpty, setInputEmpty] = useState(false);

    //input get values....................................
    
    const sameInput = (e) => {
       if(e.target.name == "inp-1"){
          setFirstInp(e.target.value);
       }
       else{
        setSecondInp(e.target.value);
       }
    }

    //submit action.........................................

    const submitHandle = (e) => {
       e.preventDefault();

       setInputEmpty(true);

       let a =[{
        name:firstInpVal,
        description:secondInpVal,
        isComplete:true
       }];

      a.forEach((values) => {
        console.log(values.name, values.description, values.isComplete);
      })
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
          <input name='inp-1' onChange={sameInput}></input>
            {firstInpVal == "" && inputEmpty && <div>Please Fill the box</div>}
          <input name='inp-2' onChange={sameInput}></input>
            {secondInpVal == "" && inputEmpty && <div>Please Fill the second box</div>}
          <input name ="check" type="checkbox"></input>
          <input type='submit' ></input>
        </form>
    </div>
  )
}

export default Form