
import './App.css'
import LiftingStateUp from './assets/components/LiftingStateUp'
// import Time from './assets/components/Time'
// import UseEffect from './assets/components/UseEffect'
// import UseState from './assets/components/UseState'

function App() {
  const getData = (data)=>{
    console.log(data);
  }
  return (
    // <UseState />
    // <UseEffect />
    // <Time />
    <LiftingStateUp myData={getData}/>
  )
}

export default App
