import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {

    const [show,handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
window.addEventListener('scroll',transitionNavBar);
return ()=>window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={()=>{history.push("/")}}
          className="nav__logo"
          src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
          alt=""
        />
        <img
          onClick={()=>{history.push("/profile")}}
          className="nav__avatar"
          src="https://tse1.mm.bing.net/th?id=OIP.zy6BhWHEXLpYtRTxldiaoAHaHa&pid=Api&P=0&h=180"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
