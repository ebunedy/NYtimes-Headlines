import React from 'react'

export default function Title({name, title}) {
  return (
    <div className='row'>
      <div className='col-10 text-center my-2 mx-auto text-title' >
        <h1 className='text-capitalize font-weight-bold'>
          {name} <strong className='text-main-brown'>{title}</strong>
          </h1>
      </div>
    </div>
  )
}
