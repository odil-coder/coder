import styled from "styled-components";

const Container = styled.div``;
const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 9fr;
  div > div {
    display: flex;
    align-items: center;
    gap: 80px;
  }
  div > h5 {
    color: #46a358;
    font-family: Cera Pro;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
  div > p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  p > h6 {
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  div > h2 {
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  div > p {
    color: #727272;
    font-family: Cera Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  div > h1 {
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
  }
  main {
    display: flex;
    gap: 10px;
  }
  main > button {
    background-color: green;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
  }
  footer {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
  }
  footer > div {
    display: flex;
    gap: 10px;
  }

  .btn1 {
    background-color: green;
    border-radius: 10px;
    width: 130px;
    height: 40px;
    border: none;
    color: #fff;
  }
  .btn2 {
    border-radius: 10px;
    width: 130px;
    height: 40px;
    border: none;
    color: #000;
    border: 1px solid green;
    background-color: #fff;
  }
  .btn3 {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    background-color: #fff;
    width: 40px;
    height: 40px;
  }
`;
const ContainerProduct = styled.div`
  h1 {
    color: #46a358;
    font-family: Cera Pro;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
  h1 > b {
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  p {
    color: #727272;
    font-family: Cera Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    width: 1199px;

    flex-shrink: 0;
  }
.level>h1{
  color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
}
.level>p{
  margin-bottom:0px;
  color: #727272;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
}
`;

export { Container, ContainerDiv, ContainerProduct };
