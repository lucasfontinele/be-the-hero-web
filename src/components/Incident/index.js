import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { Container, TrashButton } from './styles';

import api from '../../services/api';

export default function Incident({ id, title, description, value, onDelete }) {
  const { addToast } = useToasts();

  async function handleDelete() {
    try {
      const response = await api.delete(`/incidents/${id}`);

      if (response.status === 204) {
        addToast('Caso deletado com sucesso!', { appearance: 'success' });
        onDelete();
      }
    } catch ({ response }) {
      addToast('Ocorreu um erro ao deletar este caso.', {
        appearance: 'error',
      });
    }
  }

  return (
    <Container>
      <TrashButton type="button" onClick={handleDelete}>
        <FiTrash2 size={24} color="#A8A8B3" />
      </TrashButton>
      <div>
        <p>Caso</p>
        <p>{title}</p>
      </div>
      <div>
        <p>Descrição</p>
        <p>{description}</p>
      </div>
      <div>
        <p>Valor</p>
        <p>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </p>
      </div>
    </Container>
  );
}

Incident.defaultProps = {
  title: 'Cadelinha atropelada',
  description:
    'A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.',
  value: 1200,
};

Incident.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};
