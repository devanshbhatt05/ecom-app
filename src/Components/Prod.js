import React from 'react'

const Prod = ({prod,size}) => {
  return (
    <>
    <div className='myproduct'>
        <div className="card prodcard" style={{width: size}}>
 
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">{prod.description}</p>
    <p className="card-text">{prod.price}</p>
    
  </div>
 </div>
    </div>
    </>
  )
}

export default Prod