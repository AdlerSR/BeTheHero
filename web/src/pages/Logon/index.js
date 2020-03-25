import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import HeroesImage from '../../assets/heroes.png';
import LogoImage from '../../assets/logo.svg';

import api from '../../services/api'
import GlobalStyle from '../../GlobalStyle';

import { 
          Container, 
          FormSection, 
          FormImage, 
          Logo, 
          Form,
          FormTitle,
          Input,
          Button,
          LinkSub,
          LinkIcon 
        } from './styled';

export default function Logon(){

  const [ id, setId ] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    if(!id){
      alert('Preencha todos os campos');
    }
    else{
      try{
        const res = await api.post('/sessions', {id});

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', res.data.name);

        history.push('/profile')
      }
      catch{
        alert('Error');
      }
    }
  }

  return(
    <Container>
      <GlobalStyle/>
      <FormSection>
        <Logo src={LogoImage} alt="Be The Hero"/>
        <Form onSubmit={handleLogin}>
          <FormTitle>Faça seu logon</FormTitle>
          <Input 
            type="text" 
            placeholder="Insira o seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <LinkSub to="/register"><LinkIcon/>Não tenho cadastro</LinkSub>
        </Form>
      </FormSection>
      <FormImage src={HeroesImage} alt="Heroes"/>
    </Container>
  );
}