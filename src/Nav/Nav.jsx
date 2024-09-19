import './nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <h1 className='price-plaza-title'>PRICE SLASH PLAZA 101</h1>
        <div className='search-bar'>
          <input className='search-box' placeholder='Search for anything' />

          <button className='search-button'></button>
        </div>
        <div className='nav-icons'>
 
        </div>
      </div>
      <div className='nav-container2'>
        <ul className='nav-list'>
          <li key='1'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li key='2'>
            <a className='nav-link' href='#'>
              {"Men's Clothing"}
            </a>
          </li>
          <li key='3'>
            <a className='nav-link' href='#'>
              {"Woman's Clothing"}
            </a>
          </li>
          <li key='4'>
            <a className='nav-link' href='#'>
              Electronics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;