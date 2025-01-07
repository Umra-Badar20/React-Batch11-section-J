import React from 'react'
import './index.css'

const Card = (p) => {
    // console.log(props);
    // {pPrice,pName,pImage}
    
  return (
    // <div
    // className='card-sec'>
    //     <h1>{pName}</h1>
    //     <h3>{pPrice}</h3>
    //     <img src={pImage} alt="" />
    // </div>


    <div
    className='card-sec'>
        <h1>{p.value}</h1>
       
    </div>
    
  )
}

export default Card