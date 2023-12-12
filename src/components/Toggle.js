import React, {useState} from "react";

function Toggle() {

const[toggleOn, setToggleOn] = useState(false)
//addevent, call back function, inside handletoggle, setstate with settottleon, update text
function handleToggle(){
  setToggleOn(!toggleOn)
}

  return (
  <button style={{background: toggleOn? 'red':'white'}} onClick={handleToggle}>{toggleOn? 'On':'Off'}</button>
  )
}

export default Toggle;


