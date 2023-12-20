import React from 'react'

import "./HeroSection.css";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className='heroSection'>
      
      <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>

      <div className='Hero'>
        <h1>Let us find your <br/>
           <span> Forever Food.</span></h1>

        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</h3>

        <Button title="Search Now" customButtonStyle={{backgroundColor:"#E11D48", color:"white",padding: "15px 30px",marginLeft:"-40px"}}></Button>
        <Button title="Know more" customButtonStyle={{backgroundColor:"white", color:"#E11D48",padding: "15px 30px"}}></Button>

          </div>

    </div>









  )
}

export default HeroSection
