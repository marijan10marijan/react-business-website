import React, { useEffect, useState } from 'react'

const Main = () => {

  const [data, setData] = useState([
    {
      id : 1,
      title: 'Transform Business with Technology',
      text: 'Develop robust, fast, and secure web/mobile applications that can create a great impact on your business'
    },
    {
      id : 2,
      title: 'Scale your Infrastructure with Cloud',
      text: 'Automate, scale and deliver applications at high velocity without compromising security with the best Cloud DevOps practices'
    },
    { 
      id : 3,
      title: 'Design for Innovation',
      text: 'User-centric design process to deliver best user experience and fulfil business objectives in the best possible way'
    }
  ])
  const [index, setIndex] = useState(0)

  const changeItem = ()=>{
    setTimeout(()=>{
      if (data.length-1 <= index ){
        return setIndex(0)
      }else{
        setIndex(prev => {
          return prev + 1
        })
      }
    }, 3000)
  }

  useEffect(()=>{
    changeItem()
  },[index])

  return (
    <section className="main" id="main">
      <div className="container main__content">
        <div className="main__item" onLoad={changeItem}>
          <h1>{data[index].title}</h1>
          <p>{data[index].text}</p>
        </div>
        <a href="#subscribe"><button className="main__btn">Schedule a free consultation</button></a>
      </div>
    </section>
  )
} 

export default Main