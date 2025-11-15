import './Style/Header.css'
import profileImg from './assets/react.svg'   // ✅ import it

function Header() {
  return (
    <header className="Header">

      {/* LEFT SIDE: IMAGE */}
      <div className="header-image">
        <img src={profileImg} alt="profile" />  {/* ✅ use imported variable */}
      </div>

      {/* RIGHT SIDE */}
      <div className="header-content">
        <h2>Kanuz</h2>
        <h3>Web Developer</h3>

        <div className="header-buttons">
          <button>Download</button>
          <button>Hire Me</button>
        </div>

      </div>

    </header>
  );
}

export default Header;
