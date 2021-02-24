import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Teste as funcionalidades do COMPONENT ValidEMail', () => {
  it('Testando um componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
    expect(isValid).toHaveStyle('color: blue');
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
    expect(isValid).toHaveStyle('color: red');
  });

  it('Teste o componente, caso seja passado input vazio', () => {
    // Acessar os elementos da sua tela
    const EMAIL_USER = '';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);

    // Interagir com eles (Se HOUVER NECESSIDADE)
    const isValid = getByText('Informe um email!');

    // Fazer seu teste
    expect(isValid).toBeInTheDocument();
    expect(isValid).toHaveStyle('color: orange');
  });
});

// test('has correct welcome text', () => {
//   render(<Welcome firstName="John" lastName="Doe" />)
//   expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe')
// })

// it('', () => {
//   // Acessar os elementos da sua tela

//     // Interagir com eles (Se HOUVER NECESSIDADE)

//   // Fazer seu teste
//   });
