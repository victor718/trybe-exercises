import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('Requisito 2 - Tela de inserção - Testando evento', () => {
  it('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela ',
    () => {
      // Acessar os elementos da sua tela
      const { getByTestId, getByLabelText } = render(<App />);
      const emailInput = getByLabelText('Email');
      const sendButton = getByTestId('id-send');
      const userEmail = getByTestId('id-email-user');

      // Interagir com eles (Se HOUVER NECESSIDADE)
      fireEvent.change(emailInput, { target: { value: 'victorfelipe@gmail.com' } });
      fireEvent.click(sendButton);

      // Fazer seu teste
      expect(emailInput.value).toBe('');
      expect(userEmail.textContent).toBe('Valor: victorfelipe@gmail.com');
    });
});

// it('', () => {
//   // Acessar os elementos da sua tela

//     // Interagir com eles (Se HOUVER NECESSIDADE)

//   // Fazer seu teste
//   });
