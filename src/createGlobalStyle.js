import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  .project-image {
    float: right;
    width: 60%;
    padding-bottom: 130px;
  }

  .project-tech-stack {
    clear: both;
    margin-bottom: 20px;
    list-style: none;
  }

  .project-tech {
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
    list-style: none;
    width: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: middle;

    img {
      width: 100%;
    }
  }
`;

export default GlobalStyle;