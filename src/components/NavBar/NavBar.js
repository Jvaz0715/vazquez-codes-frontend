import React from 'react';
import "./NavBar.css";

function NavBar(){
   return (
      <div className="navbar">
         
         <div className="navbar-left">
            vazquez.codes
         </div>

         <div className="navbar-right">
            <div>
               About
            </div>
            <div>
               C/V
            </div>
            <div>
               Projects
            </div>
         </div>
      </div>
   )
}

export default NavBar;