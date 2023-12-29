import  { useState, useEffect, useContext } from 'react';
import logo from '../assets/deal-stamps-logo.png';
import userIco from '../assets/user.png';
import hbg from '../assets/menu.svg';
import { Link } from 'react-router-dom';
import { UserContext } from './Context/User';
import Logout from '../Components/signing/Logout'; // adjust the path according to your project structure
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchText, setSearchText] = useState('');
    const [active, setActive] = useState(false);
    const { currentUser, isUserPremium, UserCompanyName } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        setActive(window.innerWidth < 1023);
    }, [window.innerWidth]);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleClick = () => {
        setActive(!active);
    }

    console.log(active)


    const handleGoToProfile = () => {
        navigate(`/profile/${currentUser}/${UserCompanyName}`);
    }

    const handleGoToHome = () => {
        navigate(`/`);
    }


    return (
        <>
            <div className={`${active ? 'flex flex-col gap-5 items-center justify-center bg-white-100 mb-4 text-black' : 'flex flex-row gap-5 items-center p-2 mb-4 justify-center bg-white-100 text-black'}`}>
                <img src={logo} className='w-18 h-16 cursor-pointer' alt='Deal Stamps Logo' onClick={handleGoToHome} />
                <img src={hbg} className={`${!active ? 'hidden' : 'w-12 h-12  bg-black-100 p-2'}`} onClick={handleClick} alt='Hamburger Menu' />

                {!active && (
                    <>
                        <section className={`${active ? 'flex flex-row gap-10 justify-center items-center' : 'flex gap-5 flex-row'}`}>
                            <input
                                className='border border-gray-400 rounded-md w-80 h-10 p-2 mt-2'
                                type='text'
                                placeholder='Search...'
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Emergency# </a>
                            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Popular Ads </a>
                            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Find ATM </a>
                        </section>

                        <section className='ml-10'>
                            {currentUser === null ? (
                                <>
                                    <Link to="/signup">Sign Up</Link>
                                    <Link to="/login">Log In</Link>
                                </>
                            ) : (
                                <>
                                    <img src={userIco} className='w-12 h-12 rounded-full cursor-pointer'  onClick={handleGoToProfile}/>
                                    <Logout />
                                </>
                            )}
                        </section>
                    </>
                )}
            </div>
        </>
    );
}