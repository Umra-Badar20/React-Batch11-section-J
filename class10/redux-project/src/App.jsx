import { useSelector, useDispatch} from "react-redux"
import { incNum, decNum} from "./actions/index"

function App() {
  const myState = useSelector((state)=>state.upDown)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <h2>Using React & Redux</h2>
        <button onClick={()=> dispatch(incNum(5))}>Increment</button>
        <input type="text" value={myState} />
        <button onClick={()=> dispatch(decNum())}>Decrement</button>
      </div>
    </>
  );
}
export default App;
