import React from 'react'


const Link = ({title}) => {
  return (
    <div className="link">
        <a className='link__ancher' href={`#${title.toLowerCase()}`}>{title}</a>
    </div>
  )
}

export default Link