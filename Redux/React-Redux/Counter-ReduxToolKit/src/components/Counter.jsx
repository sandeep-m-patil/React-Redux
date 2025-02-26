import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  const {counterVal} = useSelector(store => store.counter)
  return (
    <div>
      <p>Count : {counterVal}</p>
    </div>
  )
}

export default Counter
