import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Container, FormSection, Form } from './styles';

import { login } from '../../services/auth';
import api from '../../services/api';

import logoImg from '../../static/assets/logo.svg';
import heroesImg from '../../static/assets/heroes.png';

export default function Logon() {
  const { addToast } = useToasts();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        id: e.target.id.value,
      };

      const response = await api.post('/sessions', data);

      if (response.status === 200) {
        login(data.id, response.data.name);
        history.push('/profile');
      }
    } catch ({ response }) {
      if (response.status === 400) {
        addToast('Nenhuma ONG cadastrada com esse id.', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    }
  }

  return (
    <Container>
      <FormSection>
        <img className="logo" src={logoImg} alt="Be The Hero" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" name="id" required />
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </FormSection>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
