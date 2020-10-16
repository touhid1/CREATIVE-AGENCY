import React from 'react';
import './MyNav.css';
import logo from '../../../images/logos/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
const MyNav = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    // console.log(loggedInUser,"\n",user);
    if(false){
        console.log(setLoggedInUser);
    }
    return (
        <Navbar className='container-fluid' collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand className='ml-5'>
                <Link to='/home'>
                    <img src={logo} width="150" height="47" className="d-inline-block align-top" alt="home" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-bar" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mt-2 mr-2">
                    <Link to="/home" className='mx-3 nav-link'>Home</Link>
                    <Link to="/portfolio" className='mx-3 nav-link'>Our Portfolio</Link>
                    <Link to="/team" className='mx-3 nav-link'>Our Team</Link>
                    <Link to="/contact" className='mx-3 nav-link'>Contact Us</Link>
                    {
                        loggedInUser.email 
                        ? <Link to='/' className='name-link text-decoration-none'>
                            <img src={loggedInUser.photoURL} style={{height: '40px',borderRadius: '50px'}} alt=""/> <span className='pic-name text-info'>{loggedInUser.name.split(' ')[0]}</span>
                        </Link>

                        : user.title === 'Admin'

                        ? <Link to="/user/admin" className='mx-3 nav-link btn btn-outline-info'>Admin</Link>

                        : <Link to="/login" className='mx-3 nav-link btn btn-dark'>Login</Link>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNav;