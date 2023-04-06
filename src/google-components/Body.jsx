import React from 'react'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import { Button } from './Button'
import { NavItems } from './NavItems'
import "../style.css/body.css"

export const Body = () => {
  return (
    <div className='bodysection'>
        <div className='logo'>
          <Logo/>
        </div>
        
        <div className='searchbar'>
            <SearchBar/>
        </div>
        <div className='body-button'>
            <Button title={"Google Search"} className='btn'/>
            <Button title={"I'm Feeling Lucky"}/>
        </div>
        <div className='languages'>
                <div className='offer' style={{color: "#000001"}}>Google offer in:</div>
                <NavItems title={"Hausa"}/>
                <NavItems title={"Igbo"}/>
                <NavItems title={"Ede Yoruba"}/>
                <NavItems title={"Nigeria Pidgin"}/> 
        </div>
    </div>
  )
}
export default Body