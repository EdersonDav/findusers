import styled from "styled-components";

export const UserContainer = styled.section`
  p{
    font-size: 16px;
    color: var(--txt-1);
    text-align: center;
    font-style: italic;
  }

  .infos{
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    margin: auto;
    align-items: center;
    margin-top: 20px;
    span{
      font-size: 14px;
      color: var(--txt-2);
      margin-right: 40px;
      display: flex;
      align-items: center;
      svg{
        margin-right: 10px;
        font-size: 16px;
      }
    }
    @media(max-width: 1000px){
      flex-direction: column;
      align-items: flex-start;
      span{
        margin-bottom: 10px;
      }
    }
  }

  strong{
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: var(--txt-1) ;
    display: flex;
    align-items: center;
    justify-content: flex-end ;
    svg{
      font-size: 20px;
      margin-right: 5px;
    }
    @media(max-width: 1000px){
      justify-content: flex-start ;
    }
  }
`

export const Avatar = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column ;
  height: 300px;
  img{
    height: 250px;
    width: auto;
    max-height: 80%;
    align-self: center;
    border-radius: 50%;
    border: solid 1px var(--gray-light);
  }
  h1{
    margin-top: 10px;
    display: flex;
    a{
      margin-left: 10px;
      color: var(--txt-1);
      &:visited{
        color: var(--txt-1);
      }

    }
  }
`
