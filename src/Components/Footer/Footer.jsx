import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4></h4>
            <h1 className="list-unstyled">
              
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4></h4>
            <ui className="list-unstyled">
              
            </ui>
          </div>
        
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PET A DOG | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;