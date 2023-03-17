import React, { useState } from "react";
// import React, { useState } from 'react';



export default function Form(props) {
    const ToUpperCase = ()=>{
          console.log('convert into ToUpperCase' + text) // react hooks
          let newText = text.toUpperCase();
          setText(newText)
          props.koibhi('converted to uppercase');

    }
    const ToLowerCase = ()=>{
        console.log('convert into ToLowerCase' + text) // react hooks
        let newText = text.toLowerCase();
        setText(newText)
    }
   const clear = ()=>{
    console.log('clear text' + text) 
    let newText = text.slice(text.length);    //
    setText(newText)
   }

   const CopyToClipbord =() =>{
    let newText= document.getElementById('exampleFormControlTextarea1')
    newText.select()
    navigator.clipboard.writeText(newText.value);
   }
 

   const Remove =() =>{
 // console.log('remove' + text); /
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
    }
    const Bold = ()=>{
      let newText = document.getElementById("exampleFormControlTextarea1");
      newText.document.style.fontWeight="bold";
      setText(newText);
      // setText((newText).style.fontWeight="bold");
      // document.text.style.fontWeight= "bold";
    }

const CapFirst =() =>{
let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
setText(newText);
}

    const OnChange = (event)=>{
        console.log('OnChange')
        setText(event.target.value)
    }

    const BackGroundRed =() =>{ 
        document.body.style.backgroundColor = "red";
    }
  const BackGroundWhite = () =>{
    document.body.style.backgroundColor = "white";
  }

    const[text, setText] = useState('Enter your Text here')
    return(
        <div>
 <div classNameName="mb-3" style ={{color:props.Mode==='dark'?'white':'black'}}>
  <label for="exampleFormControlTextarea1" classNameName="form-label"></label>
  <h1>Example TextArea</h1>
  <textarea classNameName="form-control" id="exampleFormControlTextarea1"cols="180" rows="3" value={text} onChange={OnChange}></textarea>
  <button type="button" classNameName="btn btn-warning" onClick={ToUpperCase} >convert To Uppercase</button>
  <button type="button" classNameName="btn btn-success" onClick={ToLowerCase} >convert To Lowercase</button>
  <button type="reset" classNameName="btn btn-light" onClick={clear} >clear Text</button>
  <button type="button" className="btn btn-warning" onClick={CopyToClipbord}>Copy Text</button>
  <button type="button" className="btn btn-warning" onClick={Remove}>Remove Blank Space</button>
  <button type="button" className="btn btn-warning" onClick={CapFirst}>Frist Latter Capital</button>
  <button type="button" className="btn btn-warning" onClick={Bold}>Bold</button>
<h1>Word Counter</h1>
<p>{text===''?0:text.split(" ").length}Word & {text.length} Charactors </p>
  <h1>Time</h1>
<p>{text.length*0.008}</p>
<h1>Preview</h1>
<p>{text}</p>
<button type="button" className="btn btn-info" >Sky Blue</button>
<button type="button" className="btn btn-light" onClick={BackGroundWhite} >White</button>
<button type="button" className="btn btn-danger" onClick={BackGroundRed} >Red</button>
<button type="button" className="btn btn-warning">Yellow</button>
<button type="button" className="btn btn-primary">Blue</button>
</div>  
</div>
    )
} 


