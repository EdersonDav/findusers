import styled from "styled-components";

export const RepositoriesContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const ReposCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
  margin-bottom: 20px;
  background: var(--shape-white);
`

export const ReposHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  @media(max-width: 690px){
    h2{
      font-size: 20px;
    }
  }
`

export const ReposBody = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 690px){
    overflow: hidden;
  }
  p{
    margin-bottom: 20px;
    @media(max-width: 690px){
      font-size: 16px;
    }
  }
  button{
    color: var(--txt-2);
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: transparent;
    span{
      font-size: 14px;
      &.clone{
        display: none;
      }
      @media(max-width: 690px){
        overflow: hidden;
        &.cloneUrl{
          display: none;
        }
        &.clone{
          display: block;
        }
      }
    }
    svg{
      margin-left: 10px;
      font-size: 16px;
      
    }
  }
  strong{
    display: flex;
    align-items: center;
    font-style: normal;
    padding: 5px;
    font-size: 14px;
    border: solid 1px var(--blue);
    border-radius: 5px;
    width: fit-content;
    color: var(--blue);
    font-weight: 500;
    svg{
      margin-right: 10px;
      font-size: 16px;
    }
  }
`