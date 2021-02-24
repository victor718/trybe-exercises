import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../../App';

describe('Requisito 1 - Tela de inserção do email', () => {
  it('Verifica que há um campo input de email na tela', () => {
    // Acessar os elementos da sua tela
    // render(<App />); ---> retorna os seletores que foram renderizados na app
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    // Interagir com eles (Se HOUVER NECESSIDADE)

    // Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica que há dois botões', () => {
    // Acessar os elementos da sua tela
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    // Interagir com eles (Se HOUVER NECESSIDADE)

    // Fazer seu teste
    expect(button.length).toBe(2);
  });

  it('Verifica que há um botão "\\Enviar\\" ', () => {
    // Acessar os elementos da sua tela
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
    // Interagir com eles (Se HOUVER NECESSIDADE)

    // Fazer seu teste
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });
});

// test('', () => {
//   // Acessar os elementos da sua tela

//   // Interagir com eles (Se HOUVER NECESSIDADE)

//   // Fazer seu teste
// });
