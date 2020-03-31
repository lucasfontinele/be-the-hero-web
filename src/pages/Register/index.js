import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import { Container, Content, InfoContainer, Link, FormWrapper } from './styles';

import api from '../../services/api';

import logoImg from '../../static/assets/logo.svg';

export default function Register() {
  const history = useHistory();
  const { addToast } = useToasts();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        whatsapp: e.target.whatsapp.value,
        city: e.target.city.value,
        uf: e.target.uf.value,
      };

      const response = await api.post('/ongs', data);

      if (response.status === 201) {
        addToast(`Ong cadastrada com sucesso. Seu id é ${response.data.id}`, {
          appearance: 'success',
          autoDismiss: false,
        });

        history.push('/');
      }
    } catch ({ response }) {
      if (response.status === 400) {
        addToast('Por favor, preencha todos os dados.', {
          appearance: 'error',
        });
      }
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Be The Hero" />
          <InfoContainer>
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>
          </InfoContainer>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </div>
        <div>
          <FormWrapper onSubmit={handleRegister}>
            <input placeholder="Nome da ONG" name="name" required />
            <input placeholder="E-mail" name="email" required />
            <input placeholder="WhatsApp" name="whatsapp" required />
            <div className="address">
              <input placeholder="Cidade" name="city" required />
              <input placeholder="UF" name="uf" required />
            </div>
            <button type="submit">Cadastrar</button>
          </FormWrapper>
        </div>
      </Content>
    </Container>
  );
}
