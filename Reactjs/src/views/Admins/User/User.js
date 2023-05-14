import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './User.scss';
import Modal from './Modal'
import { useHistory, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function User() {
    const [user, setUser] = useState('');
    const [showModal, setShowModal] = useState(false);

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

    function handleOpenModal() {
        console.log("open")
        setShowModal(true);
    }

    function handleCloseModal() {
        console.log("close")
        setShowModal(false);
    }

    function handleViewCollection() {
        history.push("/User/Collection");
    }

    const handleClickLogout = async () => {
        console.log("logout")
        try {
            const response = await axios.get('http://localhost:3001/logout', { withCredentials: true });

            history.push("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div><Helmet><title>User</title></Helmet>
                <div className="user-info">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
                        alt="User Avatar"
                    />
                    <h2>{user.fullname}</h2>
                    <p>Email: {user.email}</p>

                    <button className='view-collection-btn' onClick={handleViewCollection}>View collection</button>
                    <button className='change-password-btn' onClick={handleOpenModal}>Change password</button>
                    <button className='logout-btn' onClick={handleClickLogout}>Log out</button>
                </div>

                {showModal && <Modal show={showModal} handleCloseModal={handleCloseModal} />}
            </div>
        </>

    );
};

export default User;