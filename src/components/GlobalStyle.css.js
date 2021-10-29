import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-size: 16px;
        line-height: 1.4;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
    }
    ul{
        padding:0;
        margin:0;
    }
    li{
        list-style: none;
    }
    h1{
        font-size: 2rem;
        max-width: 1200px;
        margin:0 auto 2rem;
      
    }
`;
