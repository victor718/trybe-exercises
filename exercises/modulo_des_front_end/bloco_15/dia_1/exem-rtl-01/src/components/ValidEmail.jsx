import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  if (verifyEmail(email)) {
    return (
      <div>
        <span data-testid="id-email-user">{`Valor: ${email}`}</span>
        <h1 style={ { color: 'blue' } }>Email Valido</h1>
      </div>
    );
  }

  return (
    <div>
      <span data-testid="id-email-user">{`Valor: ${email}`}</span>
      {email === ''
        ? <h2 style={ { color: 'orange' } }>Informe um email!</h2>
        : <h2 style={ { color: 'red' } }>Email Inválido</h2>}

    </div>
  );

  // return (
  //   <div>
  //     <h3 style={ { color: 'orange' } }>Informe um email!</h3>
  //     <span data-testid="id-email-user">{`Valor: ${email}`}</span>
  //   </div>
  // );
};

export default ValidEmail;
