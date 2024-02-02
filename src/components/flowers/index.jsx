import React from "react";
import Box from "./style";
import Blushing from "../assest/img/Blushing.png";
import Violet from "../assest/img/Violet.png";

const Flowers = () => {
  return (
    <Box>
      <div>
        <div className="gul">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"height="116" viewBox="0 0 57 116" fill="none">
            <circle cx="-71" cy="128" r="127.5" stroke="#46A358" />
          </svg>
          <img src={Blushing} alt="" />
          <p>
            <b>
              SUMMER CACTUS <br/>& SUCCULENTS
            </b>
            <br/>
            <b></b>
            We are an online plant shop offering a wide <br />
            range of cheap and trendy plants
            <br/>
            <button>
              Find Mode
              <img width="30" height="30"
                src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png"
                alt="long-arrow-right--v1"/>
            </button>
          </p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="57"height="116"viewBox="0 0 57 116"fill="none">
            <circle cx="-71" cy="128" r="127.5" stroke="#46A358" />
          </svg>
          <img src={Violet} alt="" />
          <p>
            <b>
                SUMMER CACTUS <br/>& SUCCULENTS
            </b>
            <br/>
            <b></b>
                We are an online plant shop offering a wide <br />
                range of cheap and trendy plants
            <br/>
            <button>
              Find Mode
                <img width="30"height="30"
                src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png"
                alt="long-arrow-right--v1"/>
            </button>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Flowers;
