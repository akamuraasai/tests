import React, { Component } from 'react';
import IconList from './IconList';
import Test from "./Test";

import './App.css';

const icons = [
  { icon: '', text: 'Individual' },
  { icon: '', text: 'Familiar' },
  { icon: '', text: 'Empresarial' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Test />
        {/*<IconList icons={icons} />*/}
      </div>
    );
  }
}

export default App;
