import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import {useDispatch} from 'react-redux'
import { decrement, increment } from '../redux/slice'


export const Test = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state)
  console.log('the count is: ', count)

  
  const increase = () => {
    dispatch(increment())
  }

  const decrease = () => {
    dispatch(decrement())
  }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Subtract</button>
    </div>
  )
}
