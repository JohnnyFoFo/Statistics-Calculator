import React, { useEffect } from 'react';
import './CalculatorSideBar.css';
import {useState} from 'react';
import HelpIcon from '@mui/icons-material/Help';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Help from '@mui/icons-material/Help';
 
 
 
export default function CalculatorSideBar({calculation,buttons,help}) {

 const [inputs, setInputs] = useState([]);
 const [buttonClick, setbuttonClick] = useState(false);
 
 useEffect(()=>{
   setbuttonClick(false);
   setInputs([]);
   console.log(inputs[0]+ inputs[1] + inputs[2]);
   
  
 },[calculation])
 

 
function isValidInput() {
	let allInputsValid = inputs.every(input => {
		if (Array.isArray(input)) {
			let containsOnlyNumbers = input.every(child => !isNaN(parseFloat(child)));
			let lengthGreaterThanOne = input.length > 1;
			return containsOnlyNumbers && lengthGreaterThanOne;
		} else {
			let isNotArrayOrNumber = !isNaN(parseFloat(input));
			return isNotArrayOrNumber;
		}
	});
  if(calculation.name=='compareTwoSamples'){
    return inputs[0].length == inputs[1].length;
  }
	
	return inputs.length > 0 && allInputsValid;
}
 
 
  function errorMsg() {
    return (
      <div>
        {
          buttonClick && 
            <div className='errorMessage'>
              <h3>There seems to be a problem. Check here for Help</h3>
              <HelpIcon onClick={help} classsName='help'/>
            </div>
        }
      </div>
    )
  }
 
 function runDisplay(arr) {
  
  for (let i = 0; i < inputs.length; i++) {
    if (Array.isArray(inputs[i])) {
      inputs[i] = inputs[i].map(input => (parseFloat(input)))
    } else {
      inputs[i] = parseFloat(inputs[i]);
    }
  }
    
  if (!arr) {
    return objectDisplay(calculation.func(inputs[0],inputs[1],inputs[2]))
  } else {
    return objectDisplay(calculation.func([inputs[0],inputs[1]]))
  }
 }
 
 function objectDisplay(obj){
   console.log(obj)
  
   return Object.keys(obj).map((key)=>{
    
     console.log(key + ':' + obj[key])
     return(
       <div className='result'>
         <h4>{key +':   ' + obj[key]}</h4>
    
       </div>
     )
   }
   )
  
 }
 
 return (
   <div className='CalculatorSideBar'>
    <h1>{calculation.name}</h1>
    {
      calculation.args.map((arg,i)=>{

         return(
           <div className='Inputs'>
          <label>{arg}</label>
          <input type = 'text'  value={inputs[i]} autocomplete='off' id='textBox' placeholder={  arg.indexOf('data') != -1 ? 'comma between values' : arg == 'integer' ? ' enter integer' : ' enter decimal'} onChange={(input) => {
              setbuttonClick(false);
              let inputsCopy = [...inputs];
              if(arg.indexOf('data') != -1){
                let arr = input.target.value.split(',');
                inputsCopy[i] = arr.map((ind)=> (ind));
              }
              else {      
                 inputsCopy[i] =(input.target.value);
              }
              setInputs(inputsCopy);
             
            }}/>
           
           
          </div> 
         )
        
        }
     
      )
    }
    {
    buttons && 
    <div className = 'buttonBox'>
    <CheckBoxIcon className='button' onClick={() => setbuttonClick(true)}  style={ {color: buttonClick ? 'green' : 'grey'}} />  
    </div>
    }
 
      {
      buttonClick && isValidInput() ? calculation.name == 'linearRegression' ? <div>{runDisplay(true)}</div>: <div>{runDisplay(false)}</div>  :<div>{errorMsg()}</div> }
      {
        <div className='description'>
        <p>{calculation.description}</p>
      </div>
  
       }
 
     
 
   
 
 
 
   
 
   
 
   </div>
     
 )
}
 
 


