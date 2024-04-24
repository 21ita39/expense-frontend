import Image from '../assets/react.svg'
import './Header.css';
function Header()
{
    return (
        <div className='header-container'
        style={{
            display:"flex",
            justifyContent : "space-between",
            backgroundColor : "grey",
            padding : "5px",
        }}
        >
            <img src = {Image}/>
            <nav>
                <ul>
                    <li class ='d'><a href='#'>Home</a></li>
                    <li class ='d'><a href='#'>About us</a></li>
                    <li class = 'd'><a href='#'>Contact us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;