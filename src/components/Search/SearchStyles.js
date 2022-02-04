import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  box-shadow: 4px 2px 5px 4px #ddd;
  height: fit-content;
`;
export const SearchInput = styled.input`
  width: 100%;
  font-size: 1.7em;
  max-width: 500px;
  text-align: center;
  outline: none;
  border: none;
  text-align: left;
  padding: 10px;
  &::placeholder {
    font-size: 0.8em;
    color: #ddd;
    font-weight: thin;
    text-align: left;
  }
`;
