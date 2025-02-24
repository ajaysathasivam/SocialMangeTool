import React, { useState } from 'react'

const Button = ({content}) => {
    const style = {
        width: "168px",
        height:"2.125rem",
        borderRadius:"2px"
    }
  return (
   <button className={`btn m-3 p-0 text-start  border social-btn`} style={style}>
        <i className='me-2'>icons</i>
        {content || "text"}
    </button>
  )
}

export default Button