export const LOGIN = 'LOGIN';

const USER_1 = { email: 'meuemail2@gmail.com', password: 'abc123' };

export const isValidity = ({ user: { email, password } }) => {
  if (USER_1.email === email && USER_1.password === password) {
    return true;
  }
  return false;
};

export default function isAuthenticated(user) {
  // console.log(user);
  return {
    type: LOGIN,
    payload: {
      user,
    },
  };
}
