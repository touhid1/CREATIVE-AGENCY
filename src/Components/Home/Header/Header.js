import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import headerImage from '../../../images/logos/headerImage.png';
import './Header.css';
const Header = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    if(false){
        console.log(loggedInUser && setLoggedInUser);
    }
    return (
        <header className="pt-5 row justify-content-around container-fluid">
            <div className="col-md-4 mr-5 col-xs-12 my-4 p-3">
                <h1 style={{fontWeight: '1000',width: '95%',fontFamily: 'Poppins'}}>Let’s Grow Your Brand To The Next Level</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptates quos sequi, voluptatibus tempora accusantium!</p>
                <Link to={`/user/${user.title ? "admin" : "hire_us_for_your_service"}`} style={{width: '170px'}} className='btn btn-dark'>Hire Us</Link>
            </div>
            <div className="col-md-5 col-xs-12 pb-5 mb-4">
                <img className='img-fluid' src={headerImage} alt=""></img>
            </div>
        </header>
    );
};

export default Header;