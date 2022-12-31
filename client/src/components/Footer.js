import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "lightBlue", height: 200, width: 800, color: "black"}}>
      <div styel={{color: "black", fontWeight: "600"}}>
        <h3>A Project by Aaron Elias</h3>
      </div>
        <br />
        <br />
      <div>
        <SocialIcon url="https://github.com/AaronE007" />
      </div>
    </div>
  )
}

export default Footer