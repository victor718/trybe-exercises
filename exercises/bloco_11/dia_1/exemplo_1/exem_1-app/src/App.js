import React, { Component } from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends Component {
  render() {
    const list = ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React', 'JQuery', 'Python', 'PHP', 'JAVA', 'Lua', 'Ruby', 'Perl', 'Angular', 'Laravel'];
    return list.map(el => task(el));
  }
}

export default App;