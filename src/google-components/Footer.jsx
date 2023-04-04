import Location from "./Location"
import { NavItems } from "./NavItems"
import "../style.css/footer.css"

export const Footer = () => {
  return (
    <div className="footer">
        <div className='location'>
           <Location/> 
        </div>
        <div className="bottom-menu">
           <div className="leftmenu">
                <NavItems title={"About"}/>
                <NavItems title={"Advertising"}/>
                <NavItems title={"Business"}/>
                <NavItems title={"How Search Works"}/>
           </div>

           <div className="middlemenu">
                <NavItems title={"Carbon neutral since 2007"}/>
           </div>
           <div className="rightmenu">
                <NavItems title={"Privacy"}/>
                <NavItems title={"Terms"}/>
                <NavItems title={"Settings"}/>
           </div>
        </div>
    </div>
  )
}
export default Footer
