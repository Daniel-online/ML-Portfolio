import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Logo-Dannyfied.jpg';
import LogoSubtitle from '../../assets/images/LogoSubtitle.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Sidebar = ()=>{
  return ( <>
    
    <div className='nav-bar'>
            <Link className='logo' to={'/'}>
                <img src={LogoS} alt='logo'/>
                <img src={LogoSubtitle} alt='subtitle'/>
            </Link> 
    </div>
    <nav className='nav'>
    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon  color='#58a847' />
        </NavLink>

        <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active projects-link' : 'projects-link')}>
          <FontAwesomeIcon  color='#58a847' />
        </NavLink>

        <NavLink to='/aboutme' className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')}>
          <FontAwesomeIcon color='#58a847' />
        </NavLink>

        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}>
          <FontAwesomeIcon color='#58a847' />
        </NavLink>
    </nav>
    </>
  )
}

export default Sidebar;