import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__nav-item"><Link to="/">Name Search</Link></div>|
        <div className="header__nav-item"><Link to="type_search">Type Search</Link></div>
      </div>
    </div>
  );
};
export default Header;
