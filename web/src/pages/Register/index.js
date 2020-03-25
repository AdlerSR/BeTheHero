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
        InputGroup, 
        Button 
      } from './styled';

import LogoImage from '../../assets/logo.svg';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    if(!name || !email || !whatsapp || !city || !uf){
      alert('Preencha todos os campos')
    }
    else{
      try {
        const res = await api.post('/ongs', data)

        alert(`Seu ID de acesso: ${res.data.id}`);

        history.push('/');
      }
      catch{
        alert('Error');
      }
    }
  }
  return (
    <Container>
      <GlobalStyle/>
      <Content>
        <ContentSection>
          <Logo src={LogoImage} alt="Be The Hero"/>
          <SectionTitle>Cadastro</SectionTitle>
          <SectionSubtitle>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</SectionSubtitle>
          <LinkSub to="/"><LinkIcon/>Tenho um cadastro</LinkSub>
        </ContentSection>
        <Form onSubmit={handleRegister}>
          <Input 
            type="text" 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="text"  
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <InputGroup>
            <Input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input 
              placeholder="UF" 
              style={{width: 80}}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
