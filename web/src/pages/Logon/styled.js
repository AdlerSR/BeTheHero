import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const Input = styled.input`

`;

export const Button = styled.button`
  width: 100%;
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
  &:hover{
    filter: brightness(90%);
  }
`;

export const LinkSub = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  &:hover{
    opacity: 0.8;
  }
`;

export const LinkIcon = styled(FiLogIn)`
  font-size: 16px;
  color: #e02041;
  margin-right: 8px;
`;

export const Logo = styled.img`

`;

export const FormImage = styled.img`

`;