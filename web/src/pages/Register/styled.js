import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentSection = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const SectionTitle = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const SectionSubtitle = styled.h1`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  input + input{
    margin-left: 8px;
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

export const LinkIcon = styled(FiArrowLeft)`
  font-size: 16px;
  color: #e02041;
  margin-right: 8px;
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

export const Logo = styled.img`

`;
