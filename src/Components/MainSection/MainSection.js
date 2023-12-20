import React from 'react'
import "./MainSection.css";
import Button from '../Button/Button';

const MainSection = () => {

  return (


    <div className='mainSection'>

    
      <img  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>

      <div>

   <h1>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/>Tempore, debitis.</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Aliquid, molestiae! Quidem est esse numquam odio deleniti,<br/> beatae, magni dolores provident quaerat totam eos, aperiam<br/> architecto eius quis quibusdam fugiat dicta.</p>

   <Button title="Get in Touch" customButtonStyle={{marginLeft:"70px",padding:"20px 50px", fontWeight:"Bolder",fontSize:"15px",backgroundColor:"#4F46E5",}}></Button>

 </div>

      
      </div>




     


  )
}

export default MainSection
