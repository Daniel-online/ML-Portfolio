import logo from "./../assets/images/Logo-Dannyfied_resized.jpg";
import './Navbar.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className = "navbar flex items-center justify-between py-6">
    <div className = " image Nav bg-black flex flex-shrink-0 items-center">
      <img className="m-6" src={logo} alt="logo"/>
    </div>
    <div className="media m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub/>
        <FaLinkedin/>
        <FaInstagram/>
    </div>
  
  </nav>;
}

export default Navbar
