import styled from "styled-components";

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormSearch = styled.form`
  position: relative;
  height: 64px;
  width: 500px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
  background: var(--shape-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  label{
    width: 0;
    overflow: hidden;
    opacity: 0;
    position: absolute;
  }

  @media(max-width: 690px){
    width: 100%;
  }
`

export const InputSearch = styled.input`
  height: 100%;
  background: transparent;
  font-size: 20px;
`

export const ButtonSearch = styled.button` 
  height: 100%;
  width: 40px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 20px;
    color: var(--txt-3);
  }
`