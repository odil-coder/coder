import React from "react";
import { Container  } from "./style";
import { data } from "../mock/dataGallery";

const MainCom = () => {
  return (
    <Container>
      {data.map((value) => {
        return (
          <div>
            <img src={value.img} alt="" /> <br />
            <b> {value.name} </b> <br/>
            <h5> {value.price} </h5>
            
          </div>

        );
      })}
    </Container>
  );
    };

export default MainCom