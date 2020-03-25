import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import GlobalStyle from '../../GlobalStyle';
import { 
        Container, 
        Content,  
        ContentSection, 
        SectionTitle, 
        SectionSubtitle, 
        LinkSub, 
        LinkIcon, 
        Form, 
        Logo, 
        Input, 
        InputArea, 
        Button 
      } from './styled';

import LogoImage from '../../assets/logo.svg';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ value, setValue ] = useState('')
  const history = useHistory();

  async function handleIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }
    if(!title || !description || !value){
      alert('Preencha todos os campos');
    }
    else{
      try{
        await api.post('/incidents', data, {
          headers: {
            authorization: ongId
          }
        });
        history.push('/profile');
      }
      catch{
        alert('Error')
      }
    }
  }
  return (
    <Container>
      <GlobalStyle/>
      <Content>
        <ContentSection>
          <Logo src={LogoImage} alt="Be The Hero"/>
          <SectionTitle>Cadastrar Novo Caso</SectionTitle>
          <SectionSubtitle>Descreva o caso detalhadamente para encontrar um herói para resolver isso</SectionSubtitle>
          <LinkSub to="/profile"><LinkIcon/>Voltar para home</LinkSub>
        </ContentSection>
        <Form onSubmit={handleIncident}>
          <Input 
            type="text" 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <InputArea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input 
            type="text" 
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
