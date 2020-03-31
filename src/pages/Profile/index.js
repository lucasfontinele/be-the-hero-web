import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Header, Link, Content, Incidents } from './styles';

import { getName, logout } from '../../services/auth';
import api from '../../services/api';

import Incident from '../../components/Incident';

import logoImg from '../../static/assets/logo.svg';

export default function Profile() {
  const history = useHistory();
  const name = getName();
  const [incidents, setIncidents] = useState([]);

  async function getIncidents() {
    const response = await api.get('/profile');

    if (response.status === 200) {
      setIncidents(response.data);
    }
  }

  function handleLogout() {
    logout();

    history.push('/');
  }

  useEffect(() => {
    getIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="Be The Hero" />
          <span>Bem-vinda, {name}</span>
        </div>
        <div>
          <Link to="/incidents/new">Cadastrar novo caso</Link>
          <button type="button" onClick={handleLogout}>
            <FiPower color="#E02041" size={24} />
          </button>
        </div>
      </Header>
      <Content>
        <h1>Casos cadastrados</h1>
        <Incidents>
          {incidents.map((item) => (
            <Incident
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              value={item.value}
              onDelete={() => getIncidents()}
            />
          ))}
        </Incidents>
      </Content>
    </Container>
  );
}
