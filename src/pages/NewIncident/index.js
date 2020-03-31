import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { Container, Content, Link, Form, BackButton } from './styles';
import api from '../../services/api';

import logoImg from '../../static/assets/logo.svg';

export default function NewIncident() {
  const { addToast } = useToasts();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      value: e.target.value.value,
    };

    const response = await api.post('/incidents', data);

    if (response.status === 201) {
      addToast('Caso adicionado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  return (
    <Container>
      <Content>
        <div className="info">
          <img src={logoImg} alt="Be The Hero" />
          <div className="container-register">
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso.
            </p>
          </div>
          <Link to="/profile">
            <FiArrowLeft size={24} color="#E02041" />
            Voltar para home
          </Link>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <input placeholder="Título do caso" name="title" />
            <textarea
              placeholder="Descrição"
              className="description"
              name="description"
            />
            <input placeholder="Valor em reais" name="value" type="number" />
            <div className="button-area">
              <BackButton to="/profile">Cancelar</BackButton>
              <button type="submit">Cadastrar</button>
            </div>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
