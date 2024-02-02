import React from 'react';
import { Carousel } from 'antd';
import { Box } from './style';
import img from '../assest/img/gul.jpg'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Com = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
    <Box>
        <div >
          <p>Welcome to GreenShop</p>
          <h1>
            LET’S MAKE A BETTER <b>PLANET</b>
          </h1>
          <h6>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </h6>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        
      </Box>
    </div>
    <div style={contentStyle}>
    <p>Hali tayor emas</p>
    </div>
  </Carousel>
);
export default Com;