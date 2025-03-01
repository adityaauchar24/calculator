import React from 'react'

function Input({ placeholder, value} = {}) {
  return (
        <input value={value} placeholder={placeholder} type="text" style={{width : "100%"}} className='text-white outline-none border-b-1 bg-stone-9600 mt-4 text-[36px] ...  font-[Open_Sans] ...'/>
    )
}

export default Input;