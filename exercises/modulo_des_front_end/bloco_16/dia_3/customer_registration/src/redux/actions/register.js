export const REGISTER = 'REGISTER';

export default function registerClient(client) {
  return {
    type: REGISTER,
    payload: {
      client,
    },
  };
}
