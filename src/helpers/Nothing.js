import React from 'react'
import noresults from '../assets/noresults.png'

const Nothing = () => {
  return (
    <div className='text-center'>
        <img style={{marginTop: "84px"}} src={noresults} alt="" />
        <h6 style={{marginTop: "4rem"}}>Nothing found</h6>
    </div>
  )
}

export default Nothing