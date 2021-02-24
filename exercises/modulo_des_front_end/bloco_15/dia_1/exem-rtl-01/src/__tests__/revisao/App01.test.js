import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('Teste <App />', () => {
  it('Verifica que há um campo input de email na tela', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica que há dois botões', () => {
    const { getAllByRole, getByRole } = render(<App />);
    expect(getByRole('button', { name: /enviar/i })).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('Verifica que há um botão  "\\Enviar\\" ', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');

    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });
});
