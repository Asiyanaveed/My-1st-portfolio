import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#8f8375] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#584c3d]'>{props.textName}</button>
    </>
  )
}

export default Button