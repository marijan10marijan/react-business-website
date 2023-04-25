import React from 'react'
import Card from '../../components/card/Card';


const Solutions = () => {
  return (
    <section className="solution" id='solutions'>
      <div className="container solution__div">
        <p className='solution__text'>End-to-End Solutions</p>
        <h1 className="solution__title">We're a design led software product development company
          focused on creating digital experiences.</h1>
        <Card  
                title='User experience design' 
                boxTwoTitle='U/X STRATEGY'
                boxThreeTitle='PRODUCT DESIGN'
                bgColor='#99dde8'
                userTitleColor = '#15444b'
                ArrayTwo = {['Design Sprint', 'UX Audit', 'Product Market-Fit']}
                ArrayThree = {['Interaction Design', 'UI Design', 'User Research', 'UX Writting', 'Brand Strategy and Identity Design']}
                ArrayFour = {[]}
        
        />
        <Card 
              title='Digital Product Development'
              boxTwoTitle='MOBILE DEVELOPMENT'
              boxThreeTitle='WEB DEVELOPMENT'
              boxFourTitle='BACKEND DEVELOPMENT'
              bgColor='#f9d376'
              userTitleColor = '#5e4b1c'
              ArrayTwo = {['React Native', 'Flutter', 'iOS', 'Android']}
              ArrayThree = {['Angular JS', 'React.JS', 'Svelte', 'Vue.JS', 'Three.JS']}
              ArrayFour = {['Java','Node.JS','Python']}

        />

        <Card
              title='Cloud Engineering'
              boxTwoTitle='CLOUD ENGINEERING'
              bgColor='#c473e1'
              userTitleColor = '#3d114d'
              ArrayTwo = {['Cloud Consulting', 'Cloud Native Development', 'Cloud Migration', 'Cloud Security & Compilance']}              
              ArrayThree={[]}
              ArrayFour={[]}
        />
      </div>
    </section>
  )
}

export default Solutions