import React, {useState} from 'react'

export default function DLmode(props) {
   const [MyStyle, setMyStyle]= useState({
    backgroundColor:"white",
    color:"black"
})
const [btnText,setbtnText]=useState("Enable Dark Mode")
   const toggle=()=>{
if(MyStyle.color==="white"){
    setMyStyle({
        backgroundColor:"white",
        color:"black"
    })
    setbtnText("Enable Dark Mode")
}
else{
    setMyStyle({
        backgroundColor:"black",
        color:"white"
    })
    setbtnText("Enable Light Mode")
}
   }
   

  return (
    <div>
<div className="accordion" id="accordionExa mple"  style={MyStyle}>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       {/* {props.dikkat} */}Accordion Item 1#
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
      
    </div>
  </div>
</div>
{/* <div className="form-check form-switch form-check-reverse">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
  <label className="form-check-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
</div> */}
<div>
<button onClick={toggle}>{btnText}</button>
</div>
    </div>
    
  )
}