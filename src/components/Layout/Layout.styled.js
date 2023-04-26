import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #2a363b;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #5ca7d3;
  width: 80px;

  &:hover,
  &:focus {
    color: #2196f3;
    border: 2px solid #2196f3;
  }
`;
