import styled from "styled-components";

export const ConteinerCep = styled.div`
  width: 100%;
`;
export const StyledDiv = styled.div`
  border: 1px solid #ffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  border-radius: 0.8rem;
  width: 100%;
  max-width: 30rem;

  padding: 2.4rem 3.2rem;
  margin: 0 auto;

  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(23, 23, 23);
`;

export const Tittle = styled.h2`
  color: white;
  font-family: "Inter", cursive;
  font-size: 1.9rem;
`;

export const StyledForm = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 26rem;
  height: 1.8rem;
  font-size: 1.2rem;
  margin-top: 1.2rem;

  padding: 0.4rem 1.6rem;
  border-radius: 0.4rem;
  border: rgb(82 82 91);
  color: #ffff;

  background-color: rgb(39 39 42);

  &::placeholder {
    color: #a3a3a3;
  }

  &:focus-within {
    outline: 1px solid #ffff;
  }
`;

export const StyledSelect = styled.select`
  width: 29.2rem;
  height: 2.4rem;
  font-size: 1.2rem;
  margin-top: 1.2rem;

  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  border: none;
  color: #fff;

  background-color: rgb(39, 39, 42);

  &::placeholder {
    color: #a3a3a3;
  }

  &:focus {
    outline: 1px solid #fff;
  }

  option {
    background-color: rgb(39, 39, 42);
    color: #fff;
  }
  
  option.placeholder-option {
    color: #fff; /* Define a cor mais escura para o texto do placeholder */
  }
`;  


export const StyledSpan = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  width: 100%;
  margin-top: 0.6rem;
  color: red;
  font-family: "Inter";
`;

export const StyledButton = styled.button`
  background-color: #7dd87d;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  margin-top: 1.4rem;

  height: 3rem;

  border: none;
  border-radius: 0.4rem;

  &:hover {
    filter: brightness(60%);
    transition: filter 0.4s;
  }
`;
