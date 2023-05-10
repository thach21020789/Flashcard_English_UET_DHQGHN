import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './User.scss';
import { useHistory, withRouter } from 'react-router-dom';

function User() {
    const [user, setUser] = useState('');

    // check login
    const history = useHistory();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/user`, { withCredentials: true });
                const user = response.data.user;
                if (!user) {
                    history.push("/login");
                } else {
                    console.log(user)
                    setUser(user)
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkAuth();
    }, [history]);

    const handleClick = async () => {
        try {
          const response = await axios.get('http://localhost:3001/logout', {withCredentials: true});
          
          console.log(response)
          history.push("/login");
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="user-info">
            <img
                src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
                alt="User Avatar"
            />
            <h2>{user.fullname}</h2>
            <p>Email: {user.email}</p>

            <button className='logout-btn' onClick={handleClick}>Log out</button>
        </div>
    );
};

export default User;