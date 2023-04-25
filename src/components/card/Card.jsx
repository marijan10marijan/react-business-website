import React from 'react'

const Card = ({title, boxTwoTitle, boxThreeTitle, boxFourTitle, bgColor, ArrayTwo, ArrayThree, ArrayFour, userTitleColor}) => {

  return (
    <div className="card" style={{backgroundColor: `${bgColor}`, color: '#444343' }}>
      <div className="card__firstBox">
        <h1 style={{color: `${userTitleColor}` }}>{title}</h1>
        <a href="#contact">View More</a>
      </div>
      <div className="card__secondBox">
        <h2>{boxTwoTitle}</h2>
        {ArrayTwo.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
      <div className="card__thirdBox">
        <h2>{boxThreeTitle}</h2>
        {ArrayThree.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
      <div className="card__fourthBox">
        <h2>{boxFourTitle}</h2>
        {ArrayFour.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default Card