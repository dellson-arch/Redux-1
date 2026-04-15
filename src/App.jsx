import {  useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/CounterSlice"

//in UI subscribe to store via useSelector

const App = () => {
  let dispatch = useDispatch()
  let {count} = useSelector((store)=>store.store)
  console.log(count)
  return (
    <div>
       <h1>Redux padhne wale hai ham</h1>
       <h1>count is-{count}</h1>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App


