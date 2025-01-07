import React from 'react'
import Nav from './assets/Components/Nav'
import LearnJSX from './assets/Components/LearnJSX'
import LearnProp1 from './assets/Components/LearnProp1'
import Events from './assets/Components/Events'
const App = () => {
  const myTopic = "Hooks"
  return (
    <>
    <Nav />
    <LearnJSX />
  <LearnProp1 topic={"Props"}/>
  <LearnProp1 topic={"States"} />
  <LearnProp1 topic={myTopic} />
  <Events />
  
  </>
  )
}

export default App
