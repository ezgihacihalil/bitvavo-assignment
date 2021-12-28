import './index.scss';

const Header = () => {
  const logout = () => {
    localStorage.setItem('user', '');
    window.location.reload();
  };

  return (
    <header className="header">
      <span>Hello</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;