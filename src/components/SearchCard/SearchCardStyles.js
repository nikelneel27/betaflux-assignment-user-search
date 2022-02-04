import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 4px 2px 5px #ddd;
  max-width: 500px;
  text-align: left;
  max-height: 400px;
  overflow-y: scroll;
  outline: none;
`;
export const Card = styled.div`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.activeIndex === props.index && "#FFF8DC"};
  &:hover {
    cursor: pointer;
    background-color: #fffdd0;
  }
`;
export const Address = styled.div`
  font-size: 14px;
  color: #ccc;
  font-weight: 300;
`;
export const Id = styled.div`
  font-weight: 400;
`;
export const NoUserDiv = styled.div`
  padding: 30px;
  color: #ddd;
  font-size: 20px;
  font-weight: 300;
`;
