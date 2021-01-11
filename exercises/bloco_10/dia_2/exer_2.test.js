const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }
    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Requisito 1.', () => {
  it('Usúario encontrado.', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    });
  });
});

describe('Requisito 2.', () => {
  it('Usúario não encontrado.', () => {
    expect.assertions(1);
    return getUserName(6).catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    });
  });
});

describe('Requisito 3.', () => {
  it('Usúario encontrado:', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('Usuario não encontrado encontrado:', async () => {
    try {
      await getUserName(99);
    } catch (e) {
      expect(e).toEqual({
        error: 'User with 99 not found.' 
      });
    }
  });
});
