import {createGlobalStyle} from "styled-components";

 const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: black;
        margin: 0px;
    }
    #root{
        margin:0 auto;
    }
`

export default Global;