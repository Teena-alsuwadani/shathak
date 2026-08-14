import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">

      {/* =========================
          LOGO + NAME
      ========================= */}

      <Link to="/profile" className="brand">

        <div className="logo">

          <div className="head"></div>

          <div className="body"></div>

        </div>

        <span className="brand-name">
          Shathak
        </span>

      </Link>


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="main-nav">

        <Link to="/">
          الرئيسية
        </Link>

        <Link to="/library">
          المكتبة العطرية
        </Link>

        <Link to="/emergency">
          ركن الطوارئ
        </Link>

      </nav>


      {/* =========================
          LOGIN
      ========================= */}

      <Link
        to="/login"
        className="login-link"
      >
        تسجيل دخول
      </Link>

    </header>
  );
}

export default Header;