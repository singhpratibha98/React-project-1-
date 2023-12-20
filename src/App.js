import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import HeroSection from './Components/HeroSection/HeroSection';
import MainSection from './Components/MainSection/MainSection';
import FeedbackSection from './Components/FeedbackSection/FeedbackSection';
import FooterSection from './Components/FooterSection/FooterSection';



function App() {
  return (
    
    //JSX

    <div id="app">

      <Header/>


      {/* <Button title="Search Here" customButtonStyle={{color:"cyan"}}/>
      <Button title ="Know more" customButtonStyle={{backgroundColor:"red"}}/>
      <Button title="Click Here"/>

      <Button/> */}
      
      <HeroSection/>
      <MainSection/>
      <FeedbackSection/>
      <FooterSection/>




    </div>
  );
}

export default App;
