
import './Header.css';
import Button from '../Button/Button';

function Header(){

// Header menu List

    let menuList =["Home","Quote","Resturant","Foods","contact"];

    return(
        
         <div className="header__container">

          {/* Header logo & name */}

            <div>

            <img style={{cursor:"pointer"}} src="https://flowbite.com/docs/images/logo.svg"></img>

             <h1  style={{cursor:"pointer"}}>GeekFoods</h1>
             
             </div>

             {/* Header menu */}
            
            <ul>
                {
                    menuList.map((list)=><li>{list}</li>)

                    //style={object of css}

                }

            </ul>

            <Button title="Get started"/>

            </div>


            


            

            
        
        
    );
}

export default Header;