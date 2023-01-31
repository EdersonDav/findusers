import styled from "styled-components";
import Pagination from 'react-responsive-pagination';

export const PaginationResults = styled(Pagination)`
  display: inline-flex;
  gap: 10px;
  @media(max-width: 690px){
    gap: 0px;
    font-size: 14px;
  }
  li{
    font-weight: 500;
    display: flex;
    align-items: center;
    span, a{
      display: flex;
      align-items: center;
      position: relative;
    }
    &.active{
      span{
        display: none;
      }
      a{
        background: var(--blue);
        color: var(--txt-4);
      }
    }
    [aria-hidden="true"]{
      display: none;
    }
    [aria-label="Previous"], [aria-label="Next"]{
      display: flex;
      align-items: center;
      color: var(--blue);
      border-radius: 10px;
      cursor: pointer;
      margin: 0 10px;
      padding: 8px;
      border: 1px solid transparent;
      &:hover{
        border-color: var(--gray);
      }
      @media(max-width: 690px){
        margin: 0 5px;
        &::before, &::after{
          display: none;
        }
      }
    }
    [aria-label="Previous"]::before{
      content: "<";
      margin-right: 5px;
    }
    [aria-label="Next"]::after{
      content: ">";
      margin-left: 5px;
    }

    a{
      border: 1px solid transparent;
      color: var(--txt-1);
      padding: 5px 8px;
      border-radius: 5px;

      &:hover{
        border-color: var(--gray);
      }
    }
  }
  
`