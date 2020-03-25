import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import LogoImage from '../../assets/logo.svg';

import api from '../../services/api';

import { 
        Container,
        Header,
        Logo,
        UserMessage,
        IncidentLink,
        Button,
        IconButton,
        List,
        ListContainer,
        ListItem,
        ListText,
        Title,
        ListIcon,
        ListButton
      } from './styled';
import GlobalStyle from '../../GlobalStyle';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(()=> {
    if(!ongId){
      history.push('/')
    }
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(res => {
      setIncidents(res.data)
    })
  }, [history, ongId]);
  
  async function handleDeleteIncident(id){
    
    try{
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id));
    }
    catch{
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }
  return (
    <Container>
      <GlobalStyle/>
      <Header>
        <Logo src={LogoImage}/>
        <UserMessage>Bem vindo(a), {ongName}</UserMessage>
        <IncidentLink to="/incidents/new">Cadastrar novo caso</IncidentLink>
        <Button onClick={handleLogout}><IconButton/></Button>
      </Header>
      <Title>Casos Cadastrados</Title>
      <ListContainer>
        {incidents.map(incident => (
          <List key={incident.id}>
            <ListItem>Caso:</ListItem>
            <ListText>{incident.title}</ListText>
            <ListItem>Descrição:</ListItem>
            <ListText>{incident.description}</ListText>
            <ListItem>Valor:</ListItem>
            <ListText>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</ListText>
            <ListButton onClick={() => handleDeleteIncident(incident.id)}><ListIcon/></ListButton>
          </List>
        ))}
      </ListContainer>
    </Container>
  );
}
