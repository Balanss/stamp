import fb from '../../assets/icons/facebook.png'
import yt from '../../assets/icons/youtube.png'
import linkedIn from '../../assets/icons/linkedin.png'
import logo from '../../assets/deal-stamps-logo.png'

export default function Footer() {
  return (
    <div className='bg-gray-300 '>
        <div className='flex flex-col items-center justify-center cap:flex-row gap-10 cap:items-start cap:justify-evenly p-10'>
            <img src={logo} alt='' className='w-17 h-14'/>
            <section>
                <h1>Categories</h1>
                <ul>
                    <li>Food</li>
                    <li>Electronics</li>
                    <li>Travel</li>
                    <li>Health</li>
                    <li>Education</li>
                    <li>Entertainment</li>
                    <li>Shopping</li>
                    <li>Services</li>
                    </ul>
            </section>

            <section>
                <h1>Company</h1>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    </ul>
            </section>

            <section>
                <h1>Follow Us</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    </ul>
                    </section>
        </div>

        <hr className='w-[75vw] m-auto'/>

<div className='flex flex-col cap:flex-row gap-10 cap:items-start cap:justify-evenly p-10'>

<section >
                <select>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                </select>
            </section>

            <div className='flex flex-row items-center justify-evenly '>
            <p>© 2024 Deal Stamps. All Rights Reserved.</p>
            <p>Terms of Use | Privacy Policy</p>
            </div>

            <section className='flex flex-row gap-4'>
                <h1>Follow Us</h1>
                <ul className='flex flex-row gap-1'>
                    <li>
                        <a href='https://www.facebook.com'>
                            <img src={fb} alt='' className='w-5 h-5'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com'>
                            <img src={yt} alt='' className='w-5 h-5'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com'>
                            <img src={linkedIn} alt='' className='w-5 h-5'/>
                        </a>
                    </li>
                </ul>
            </section>

            </div>
    </div>
  )
}
