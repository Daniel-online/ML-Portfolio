import logo from "./../../public/NeonLogo.png";
import './styles/Navbar.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const website = "https://danielisonline.vercel.app";
const github = "https://github.com/daniel-online";
const linkedin = "https://www.linkedin.com/in/affonso-online";
const instagram = "https://www.instagram.com/daniel_affonso1";

const Navbar = () => {
  return <nav className="navbar flex items-center justify-between py-4">
    <div className=" image flex flex-shrink-0 items-center">
      <a href={website}>
        <img className=" ml-4  w-20 h-20" src={logo} alt="logo" />
      </a>
    </div>
    <div className="media m-6 flex items-center justify-center gap-4 text-2xl">
      <a href={github}><FaGithub /></a>
      <a href={linkedin}><FaLinkedin /></a>
      <a  href={instagram}><FaInstagram /></a>
    </div>

  </nav>;
}

export default Navbar
