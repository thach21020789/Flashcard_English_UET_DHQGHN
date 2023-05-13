import React from 'react'
import Rule from "../rule.jpg"
import "../Help.scss"

const Help = ({open, onClose}) => {
    if (!open) return null
  return (
    <>
        <div  className='overlay'>
            <div className='help-container'>
                <img src={Rule} alt='' />
                <div className='help-right'>
                    <p onClick={onClose} className='fa-solid fa-rectangle-xmark'></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Help