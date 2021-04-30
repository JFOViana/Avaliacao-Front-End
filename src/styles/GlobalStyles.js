import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;

}

    h1, h2, h3, h4, h5,h6 {
color:#1c1c1c;
}

#root{
    --corPrincipal: #49bf9d;
    --defaultSize:50px;
    
  
    }

@media screen and (min-width: 900px){
    #root{
        --defaultSize: 200px;
    }
    
}

body{
    width: 100%;


}

`;
