function techList(list, name) {
  list.sort();
  if (list.length === 0) return 'Vazio!';
  const result = list.reduce((acc, iten) => {
    acc.push({tech: iten, name: name});
    return acc;
  }, [])
  return result;
}

module.exports = techList;

