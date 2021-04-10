import PropTypes from 'prop-types'
import {useState} from 'react'
import Logo from '../images/Logo.png'

const Header = () =>{
    const links =
        [
            {
                text: "Submit",
                link:"#"
            },
            {
                text: "Track",
                link:"#"
            }
            ,
            {
                text: "Card Account",
                link:"#"
            }
            ,
            {
                text: "FAQ",
                link:"#"
            }
            ,
            {
                text: "Rebate Form",
                link:"#"
            }
            ,
            {
                text: "Contact Us",
                link:"#"
            }
        ]
    


    return(
        <header className = 'header'>
            <span><p>Welcome</p><p><span>Log in</span></p></span>
            
           <img style = {{marginTop:"20px"}}src = {Logo} alt = "Elanco Logo" width="83" height="49"/>
           <nav id = "menu">
               {links.map((link) =>(<span className = "linkBox" ><a href = {link.link}>{link.text}</a></span>))}
           </nav>
           
        </header>
    )
}
export default Header