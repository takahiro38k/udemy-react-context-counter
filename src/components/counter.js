import React from 'react'
import CounterContext from '../contexts/counter';

// () => {} ではなく () => () であることに注意。
const Counter = () => (
  // Consumerコンポーネント
  // 関数をwrapして、Providerコンポーネントから渡ってきた値を引数として受け取る。
  <CounterContext.Consumer>
    {
      ({ count, increment, decrement }) => {
        return (
          <React.Fragment>
            <div>count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </React.Fragment>
        )
      }
    }
  </CounterContext.Consumer>
)

export default Counter

