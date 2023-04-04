import { NavItems } from "./NavItems"
import { GoogleLauncher } from "./GoogleLauncher"
import { Button } from "./Button"
import "../style.css/header.css"

export const Header = () => {
  return (
    <div className='header-menu'>
        <div className='header-nav'>
            <NavItems title={"Gmail"} style={{fontsize: "small"}}/>
            <NavItems title={"Images"} style={{fontsize: "small"}}/>
            <GoogleLauncher/>
                <Button title={"Sign in"} className="login"/>
            
        </div>
    </div>
  )
}
export default Header