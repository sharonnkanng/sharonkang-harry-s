import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = ({isLogin, setIsLogin}) => {

    const logisticsList = ["JOIN CORE", "ABOUT"];
    const menuList = ["Get Started", "Shave", "Face Care", "Body Care", "Deodorant", "Hair Care", "Accessories", "Bundles", "Surplus Store", "Shop All"]
    
    const navigate = useNavigate();

    const goToLogin = () => {
       if (isLogin) {
            setIsLogin(false);
        } else {
            navigate('/login');
        }
    }

    const search = (event) => { 
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }
  
    return (
    
    <div>

        <div className="nav-section">
            <a href="/"><img className="logo" width={120} src="https://imgtr.ee/images/2023/03/30/UJvVl.png" /></a>
        
            <ul className='menu-list'>
                <div>
                    <FontAwesomeIcon className="searchPic" icon={faSearch} />
                    <input type="text" placeholder="Search" onKeyDown={(event) => search(event)}/>
                </div>
                {logisticsList.map(logistic => 
                <li>{logistic}</li>)}
                <li onClick={goToLogin}>{isLogin ? "SIGN OUT": "SIGN IN"}</li>
                <div className='cart'><FontAwesomeIcon icon={faCartShopping} size="2x" /></div>
            </ul>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu, index) => 
                <li key={index}>
                <a href="#" key={index}>
                {menu}
                </a>
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default Navbar