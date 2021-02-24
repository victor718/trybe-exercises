export const DELETE = 'DELETE';

export const isDeleteItem = ({ client }, { id }) => client.filter((el) => el.id !== id);

export default function deleteClient(id) {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
}
