import React from "react";
import { Carousel } from "antd";
import Box from "./style";
import { Shops } from "../../mocks/DataGallary";

const contentStyle = {
  // height: '160px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};
const CardCom = () => (
  <Carousel autoplay>
    <Box>
      <div style={contentStyle}>
        {Shops.map((value) => {
          return (
            <div>
              <img src={value.img} alt="" /> <br />
              <b> {value.name} </b> <br />
              <h5> {value.price} </h5>
            </div>
          );
        })}
      </div>
    </Box>
    {/* <Box>
      <div style={contentStyle}>
        {Shops.map((value) => {
          return (
            <div>
              <img src={value.img} alt="" /> <br />
              <b> {value.name} </b> <br />
              <h5> {value.price} </h5>
            </div>
          );
        })}
      </div>
    </Box> */}
  </Carousel>
);
export default CardCom;
