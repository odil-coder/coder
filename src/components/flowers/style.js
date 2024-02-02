import styled from "styled-components";

const Box = styled.div`
    padding-top: 150px !important;
    display: flex !important;
div{
display: flex;
text-align: end;
}
b{
    font-size: 24px;
}
button{
    text-align: end;
    width: 150px;
    height:40px;
    background-color:green;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
}
button>img{
    display: flex !important;
    justify-content: center;
    align-items: center;
    color: #fff;
}
`

export default Box;