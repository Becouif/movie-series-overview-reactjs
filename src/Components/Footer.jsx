import React from "react";
import "./Assets/footer.css";

function Footer(){
  const time = new Date().getFullYear();
  return (
    <div className="footer-container">
          <footer>copyright &#169; {time} by<a href="https://github.com/Becouif"> Becouif</a> All Rights Reserved</footer>
    </div>

  )
}

export default Footer;