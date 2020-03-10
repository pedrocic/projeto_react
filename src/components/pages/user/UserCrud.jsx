import React from 'react';
import Main from '../../templates/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir',
};


export default function user() {
  return (
    <Main {...headerProps}>
      Cadastro de Usuário
    </Main>
  );
}
