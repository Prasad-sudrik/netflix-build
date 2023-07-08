import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav';
import "./Nav.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { signOut,auth } from './firebase.js';

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src='https://tse1.mm.bing.net/th?id=OIP.zy6BhWHEXLpYtRTxldiaoAHaHa&pid=Api&P=0&h=180' alt='logo' />
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                    <h3>Plans</h3>
                    <button onClick ={()=>signOut(auth)} className='profileScreen__signOut'>Sign Out</button>
                </div>
            </div>
        </div>
            </div >
    </div>
  )
}

export default ProfileScreen;