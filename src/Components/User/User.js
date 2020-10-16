import React from 'react';
import logo from '../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Customer from './Customer/Customer';
import { Link, useParams } from 'react-router-dom';
import Admin from './Admin/Admin';

const User = () => {
    const [loggedInUser, setLoggedInUser, user] = useContext(UserContext);
    // useEffect use kore (loggedInUser er email diye) server theke (email gulor shathe match kore ) verify korte hobe je user ta (customer or admin). Er jonno Server (admins) namer 1ta collection thkte hobe. email match na korle user="customer" na hole user="admin"
    // const [user, setUser] = useState("")
    // const [user, setUser] = useState("customer");
    const userServiceKey = useParams();
    // console.log(userServiceKey,user);

    return (
        <div className="p-5">
            <Link to='/'>
                <img src={logo} className='m-2' style={{height: '50px'}} alt=""/>
            </Link>
            {
                user.title === "Admin"
                ? <Admin loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} user={user} ></Admin>
                : <Customer userServiceKey={userServiceKey.userServiceKey}></Customer>
            }
            {/* <Admin loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} ></Admin> */}
        </div>
    );
};

export default User;