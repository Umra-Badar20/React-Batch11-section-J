import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [ amount, setAmount] = useState(0)
  return (
    <>
      <button onClick={()=>{dispatch(decrement())}}> - </button>
      <span>Count: {count}</span>
      <button onClick={()=>{dispatch(increment())}}> + </button> <br />
      <button onClick={()=>{dispatch(reset())}}> Reset </button> <br />
      <input type="Number" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
      <button onClick={()=>{dispatch(incrementByAmount(amount))}}>Increment by Amount</button>

    </>
  )
}

export default App
