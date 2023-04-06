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
        <div className='search-icon'> 
          <img src={Icon} alt="Search-Icon"/>
        </div> 

        <div className='input-wrap'>
          <input ref={inputRef} type="text" onKeyDown={handleEnter}/> 
        </div>

        <div className="icons">
          <img src={Icon2} alt="Google-Lens" />
          <img src={Icon3} alt="Google-Mic" /> 
        </div>
      </div>

      <div className='display-searchkey'>{message}</div>
    </>
  )
}
export default SearchBar