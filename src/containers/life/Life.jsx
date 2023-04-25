import React, { useState } from 'react'
import LifeOne from '../../assets/life1.webp'
import LifeTwo from '../../assets/life2.webp'
import LifeThree from '../../assets/life3.webp'
import LifeFour from '../../assets/life4.webp'
import LifeFive from '../../assets/life5.webp'
import LifeSix from '../../assets/life6.webp'
import LifeSeven from '../../assets/life7.webp'
import LifeEight from '../../assets/life8.webp'
import LeftArrow from '../../assets/left-arrow.webp'
import RightArrow from '../../assets/right-arrow.webp'

const Life = () => {

  const [data, setData] = useState([
    {id: 1, image: LifeOne, text: 'BRAINSTORMING SESSIONS'},
    {id: 2, image: LifeTwo, text: 'BLUE DAY'},
    {id: 3, image: LifeThree, text: 'OFFICE OUTINGS'},
    {id: 4, image: LifeFour, text: 'TEAM DISCUSSIONS'},
    {id: 5, image: LifeFive, text: 'GREEN DAY'},
    {id: 6, image: LifeSix, text: 'TEAM BUILDING ACTIVITIES'},
    {id: 7, image: LifeSeven, text: 'TEAM OUTING'},
    {id: 8, image: LifeEight, text: 'YELLOW DAY'}
  ])

  const [index, setIndex] = useState(0)

  const decreaseIndex = ()=>{
    if(index > 0){
      setIndex(prev => {
        return prev - 1
      })
    }
  }

  const increaseIndex = ()=>{
    if(data.length-1 > index + 2){
      setIndex(prev => {
        return prev + 1
      })
    }
  }

  return (
    <section className="life" id="life">
      <div className="container life__div">
        <h3 className='life__smallPargraph'>Art of Balancing Work and Fun</h3>
        <div className='life__title'>Life at <br/> <span className='life__title-span'>Fibonalabs</span></div>
        <div className="life__box">
          <div className="life__box-div">
            <img src={data[index].image} alt="image of our team" />
            <h1 className='life__box-text'>{data[index].text}</h1>
          </div>
          <div className="life__box-div">
            <img src={data[index+1].image} alt="image of our team" />
            <h1 className='life__box-text'>{data[index+1].text}</h1>
           </div>
          <div className="life__box-div" >
            <img src={data[index+2].image} alt="image of our team" />
            <h1 className='life__box-text'>{data[index+2].text}</h1>
          </div>
        </div>
        <div className="life__buttons">
          <button onClick={decreaseIndex}>
            <img src={LeftArrow} alt="left arrow" />
          </button>
          <button onClick={increaseIndex}>
            <img src={RightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Life