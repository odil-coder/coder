import React from "react";
import Box from "./style";
import Bir from '../assest/img2/bir.png'
import Ikki from '../assest/img2/ikki.png'
import Uch from '../assest/img2/uch.png'

const Footer = () => {
  return (
    <Box>
    <div id="id">
    <div className="bir">
      <img height='200px' src={Bir} alt="" />
    </div>

    <div className="border1"></div>

    <div className="ikki">
      <img height='200px' src={Ikki} alt="" />
    </div>

    <div className="border1"></div>

    <div className="uch">
        <img height='200px' src={Uch} alt="" />
    </div >

    <div className="Would">
    <h2>Would you like to join newsletters?</h2>
    <input type="text" value={'enter your email address...'} /> <button>JOIN</button>
        <p>We usually post offers and challenges in newsletter. We’re <br/>
         your online houseplant destination. We offer a wide range <br/>
          of houseplants and accessories shipped directly from our <br/>
        (green)house to yours!</p>
    </div>
    </div>
    </Box>
  );
};

export default Footer;
