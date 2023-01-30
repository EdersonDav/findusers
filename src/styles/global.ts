import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --background: #f6f8fa;
    --green: #2c974b;
    --blue:#157cf2;
    --red:#ff303c;
    --txt-1:#2a292f;
    --txt-2:#767373;
    --txt-3:#24292f;
    --txt-4:#fff;
    --txt-5:#F8F8F8;
    --txt-6:#eee;
    --shape-black:#212121;
    --shape-white:#fff;
    --gray:#d8d8d8;
    --gray-black: #2d2f33;
  }
  /* --background: #212121;
    --purple: #7b66fb;
    --green: #00e0b8;
    --blue:#1ea1ef;
    --red:#ff303c;
    --txt-1:#fff;
    --txt-2:#F8F8F8;
    --txt-3:#eee;
    --shape:#fff;
    --gray:#d8d8d8;
    --gray-black: #2d2f33; */
  html{
    background: var(--background);
    padding: 5%;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }
  section{
    margin-bottom: 50px;
  }
  
  button{
    cursor: pointer;
  }

  h1,h2{
    color: var(--txt-1);
  }

  h2{
    font-weight: 500;
  }

  p, span, button{
    font-size: 18px;
  }

  ul{
    list-style: none;
  }

  a{
    list-style: none;
    font-style: normal;
    color: var(--txt-1);
    &:visited{
      color: var(--txt-1);
    }
  }
  .wrapper{
    max-width: 1280px;
    width: 100%;
    margin: auto;
    position: relative;
    @media(max-width: 1220px){
      width: 100%;
    }
  }
  input, button{
    border: 1px solid transparent;
  }

  input::placeholder{
    color: var(--txt-2)
  }
`