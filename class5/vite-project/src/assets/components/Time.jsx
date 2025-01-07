import React, { useEffect, useState } from 'react'

const Time = () => {
    const [date, setDate] = useState(0)
    useEffect(()=>{
    setInterval(()=>{
        const updatedDate = new Date()
        setDate(updatedDate.toLocaleTimeString())
    },1000)
    },[])
  return (
    <>
    <h1>Time</h1>
    <p>{date}</p>
    </>
  )
}

export default Time