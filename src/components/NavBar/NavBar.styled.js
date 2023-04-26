import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const HeaderWrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 20px;
  &:hover,
  &:focus {
    color: #2196f3;
  }
  &.active {
    color: #2a1ff7;
  }
`;
