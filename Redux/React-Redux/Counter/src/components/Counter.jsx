import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  const counter = useSelector(store => store.counter)
  return (
    <div>
      <p>Count : {counter}</p>
    </div>
  )
}

export default Counter
