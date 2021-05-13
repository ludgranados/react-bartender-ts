import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' style={{marginTop: '1%', opacity: '.7'}}>
      {/* Logo */}
      <div style={{marginLeft: '1%'}}>
        <Link to='/' className='navbar-brand'>
        
        <img src="https://i.ibb.co/BKm0F8M/drinkify.png" alt="Drinkify-Logo" height= '60' />
      </Link>
      </div>
      

      {/* Menu */}
      <div className='collapse navbar-collapse' style={{marginLeft: '3%', fontSize: '200%'}}>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
      </div>

      <div style={{marginLeft: '1%'}}>
        <Link to='/' className='navbar-brand'>
        <img src="https://i.ibb.co/bgZvjsP/drinkify-tiki-bar.png" alt="Drinkify-round-tiki-bar-Logo" height= '70' />
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;