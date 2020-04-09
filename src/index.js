// ソースコード
// https://github.com/ProgrammingSamurai/react-recipes/tree/master/react-context-api

import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter'
import Counter from './components/counter'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      // Providerコンポーネント
      // wrapしたコンポーネントに、何かしらの値(今回はvalue)を渡すことができる。
      // CounterContextは、createContext()によって作成したコンテクストオブジェクト。
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
