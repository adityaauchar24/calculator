import React from 'react'

function Button({num, onClick}) {

    return (
        <button style={{backgroundColor:isNaN(num) ?  '#fe9505' : '#a5a5a5', color : num == "C" ? "red" : "#242424"}} onClick={() => onClick(num)} className='cursor-pointer text-2xl m-2 font-bold text-white rounded-full h-21 w-21 align-text-top'>
            {num} 
        </button>
    )
}

export default Button;