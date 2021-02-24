import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Teste joke', () => {
  it('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
    const joke = {
      id: '7h3oGtr0fxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    const { findByText } = render(<App />);
    // await waitFor(() => findByText('Whiteboards ... are remarkable.'))
    await findByText('Whiteboards ... are remarkable.');
  });
});
