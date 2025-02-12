import './Header.css';
import emabraceLogo from '../../assets/images/embrace_logo.svg';

const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='logo'>
        <img src={emabraceLogo} alt='Embrace Allied Health Logo'></img>
      </div>
    </header>
  );
};

export default Header;
