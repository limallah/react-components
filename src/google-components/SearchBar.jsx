import React from 'react'
// // import useState from 'react'
import Icon from "../images/searcicon.png"
import Icon2 from "../images/camera.svg"
import Icon3 from "../images/googlemic.png"
import { useRef, useState } from "react"
// import { useState } from "react"

export const SearchBar = () => {
  const inputRef = useRef("");
  const [message, setMessage] = useState("");
  const handleEnter = (e) =>{
    // console.log(e);
    if(e.key === 'Enter'){
      setMessage(inputRef.current.value);
    }
  }
  return (
    <>
      <div className='search'>      
          <img src={Icon} alt="Search-Icon"  style={{hieght:"4px", color: "lightgrey"}}/>
          <input ref={inputRef} type="text" className='input' onKeyDown={handleEnter} style={{border: "none",}}/> 
      <div className="icons">
          <img src={Icon2} alt="Google-Lens" style={{hieght:"2px"}}/>
          <img src={Icon3} alt="Google-Mic"  style={{hieght:"2px"}}/> 
      </div>

      </div>
      <div className='display-searchkey'>{message}</div>
    </>
  )
}
export default SearchBar