import React from 'react';
import { fireEvent, getByLabelText, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Testando comportamentos da <App />', () => {
  it('Verifica que, ao inserir um email e clicar em "\\Enviar\\" 0 email aparece na tela',
    () => {
      const { getByTestId, getByRole } = render(<App />);
      const emailInput = getByRole('textbox', {
        name: /email/i,
      });
      const sendButton = getByTestId('id-send');
      const userEmail = getByTestId('id-email-user');

      fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
      fireEvent.click(sendButton);
      expect(emailInput.value).toBe('');
      expect(userEmail.textContent).toBe('Valor: email@gmail.com');
    });

  // it('', () => {

  // });
});
