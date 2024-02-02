import React from "react";
import Box from "./style";
import g01 from "../assest/img/01.png";
import g02 from "../assest/img/02.png";
import g03 from "../assest/img/03.png";
import g04 from "../assest/img/04.png";

const Posts = () => {
  return (
    <Box>
      <div>
        <h1>Our Blog Posts</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div id="Pasts">
        <div className="gul">
          <img src={g01} alt="" />
          <h5>September 12 I Read in 6 minutes</h5>
          <h2>Cactus & Succulent <br/> Care Tips</h2>
          <p>Cacti are succulents are easy care <br /> plants for any home or patio.</p>
          <a href="#">Read More
            </a>
        </div>
        <div className="gul">
        <img src={g02} alt="" />
          <h5>September 13  I Read in 2 minutes</h5>
          <h2>Cactus & Succulent <br/> Care Tips</h2>
          <p>Cacti are succulents are easy care <br /> plants for any home or patio.</p>
          <a href="#">Read More
            </a>
        </div>
        <div className="gul">
        <img src={g03} alt="" />
          <h5>September 15  I Read in 3 minutes</h5>
          <h2>Cactus & Succulent <br/> Care Tips</h2>
          <p>Cacti are succulents are easy care <br /> plants for any home or patio.</p>
          <a href="#">Read More
            </a>
        </div>
        <div className="gul">
        <img src={g04} alt="" />
          <h5>September 15  I Read in 2 minutes</h5>
          <h2>Cactus & Succulent <br/> Care Tips</h2>
          <p>Cacti are succulents are easy care <br /> plants for any home or patio.</p>
          <a href="#">Read More
            </a>
        </div>
      </div>
    </Box>
  );
};

export default Posts;
