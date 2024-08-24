import React, { useState } from 'react'

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const handleweight = ()=>{
    if(weight && height){
      const BMI = weight/(height*height);
      setBmi(BMI);
      if(BMI < 18.5){
        setMessage("Underweight");
      }else if(BMI > 18.5 && BMI < 25){
        setMessage("You are healthy");
      }else if(BMI > 25 && BMI <30){
        setMessage("You are overweight");
      }else if(BMI > 30){
        setMessage("You are obese");
      }
    }
  }

  return (
    <div className='container'>
      <h3 className='text-center my-3'>Calculator</h3>
      <div>
        <input type='number' placeholder='Enter weight' className='form-control' id='num1' onChange={(e)=>setWeight(e.target.value)} />
        <input type='number' placeholder='Enter height' className='form-control' id='num2' onChange={(e)=>setHeight(e.target.value)} />
      </div>
    </div>
  )
}

export default Calculator
