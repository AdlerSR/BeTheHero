import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 24px;
`;

export const Logo = styled.img`

`;

export const UserMessage = styled.span`
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const IncidentLink = styled(Link)`
  width: 260px;
  margin-left: auto;
  margin-top: 0 !important;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  text-decoration: none;
  &:hover{
    filter: brightness(90%);
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: solid 1px #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;
  &:hover{
    border-color: #999;
  }
`;

export const IconButton = styled(FiPower)`
  font-size: 18px;
  color: #e02041;
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const List = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  p + strong{
    margin-top: 32px;
  }
`;

export const ListItem = styled.strong`
  display: block;
  margin-bottom: 10px;
  color: #41414d;
`;

export const ListText = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;
`;

export const ListIcon = styled(FiTrash2)`
  font-size: 20px;
  color: #a8a8b3;
`;

export const ListButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;
  transition: opacity 2s;
  &:hover{
    opacity: 0.8;
  }
`;