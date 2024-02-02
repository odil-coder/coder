import React from "react";
import  Carousel  from "../carusel/index";
import MainCom from "../Main/main";
import Index from "../Main/index";
import Flowers from "../flowers";
import Posts from "../Posts";


export const Home = () => {
    return(
        <div>
        <Carousel />
          <MainCom/>
          <Index/>
          <Flowers/>
          <Posts/>
        </div>
    )
}