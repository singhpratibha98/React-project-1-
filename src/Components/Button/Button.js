
import './Button.css'
function Button(props){


    return(

     //style is going to take an object of css

       <button style={props.customButtonStyle} id="buttonStyles">{props.title}</button>

       

       

    )
}

export default Button;