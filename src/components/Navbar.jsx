import React, {useState} from 'react';
import  { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll'
import RM from '../assets/RM.jpg';
import CV from '../assets/RamziMerzouguiCV.pdf';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
            <div>
                <img src={RM} alt="Logo Image" style={{width: '80px'}} />
            </div>
     

     <div>
         <ul className='hidden md:flex'>
             <li>
             <Link to="home" smooth={true} duration={500}> Acceuil </Link>
             </li>
             <li><Link to="about" smooth={true} duration={500}> A Propos </Link></li>
             <li><Link to="skills" smooth={true} duration={500}> Competence </Link></li>
             <li><Link to="work" smooth={true} duration={500}> Projets </Link></li>
             <li><Link to="contact" smooth={true} duration={500}> Contacts </Link></li>

         </ul>
     </div>
     {/* Ham */}
     <div onClick={handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars /> : <FaTimes />}
     </div>

     {/*Mobile */}
     <div>
     <ul className= {!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
             <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}> Acceuil </Link></li>
             <li className='py-6 text-4xl'><Link onclick={handleClick} to="about" smooth={true} duration={500}>A propos </Link></li>
             <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}> Competence </Link></li>
             <li className='py-6 text-4xl'><Link onclick={handleClick} to="work" smooth={true} duration={500}> Projets r??alis??s </Link></li>
             <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link></li>

         </ul>
     </div>

     {/*Social */}
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
         <ul>
             <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                 <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/Merzouur">
                     Twitter <FaTwitter size={30} /> 
                 </a>
            </li>
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                 <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/merzouur/">
                     GitHub <FaGithub size={30} /> 
                 </a>
            </li>
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                 <a className='flex justify-between items-center w-full text-gray-300' href="mailto:merzou_r@etna-alternance.net">
                     Mail <HiOutlineMail size={30} /> 
                 </a>
            </li>
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                 <a className='flex justify-between items-center w-full text-gray-300' href={CV}>
                 CV <BsFillPersonLinesFill size={30} /> 
                 </a>
            </li>
            </ul> 

     </div>

     </div>
    
    


    )
}

export default Navbar
