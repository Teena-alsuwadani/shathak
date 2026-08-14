import { Link } from "react-router-dom";
import "./Menu.css";
import Header from "./Header";

function Menu() {
  return (
    <div className="menu-page">


      <Header />


      {/* =====================================================
          MENU CONTENT
      ===================================================== */}

      <main className="menu-main">

        <div className="menu-heading">

          <span className="menu-number">
            03
          </span>

          <p>
            DISCOVER YOUR SCENT
          </p>

          <h1>
            ابدأ رحلتك
          </h1>

          <span>
            اختر المساحة التي تريد استكشافها
          </span>

        </div>


        <div className="cards-container">


          {/* =================================================
              LIBRARY CARD
          ================================================= */}

          <div className="menu-card">

            <div className="card-overlay"></div>

            <div className="card-details">

              <span className="card-number">
                01
              </span>

              <p className="text-title">
                مكتبتك العطرية
              </p>

              <p className="text-body">
                لتوثيق "هوية روحك"
              </p>

            </div>

            <Link
              to="/library"
              className="card-button"
            >
              استكشف
            </Link>

          </div>


          {/* =================================================
              EMERGENCY CARD
          ================================================= */}

          <div className="menu-card">

            <div className="card-overlay"></div>

            <div className="card-details">

              <span className="card-number">
                02
              </span>

              <p className="text-title">
                ركن الطوارئ
              </p>

              <p className="text-body">
                راقب الروائح... احمي صحتك
              </p>

            </div>

            <Link
              to="/emergency"
              className="card-button"
            >
              استكشف
            </Link>

          </div>


        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">

        <div className="footer-inner">


          {/* اسم المشروع */}

          <div className="footer-brand">

            <h2>
              Shathak
            </h2>

            <p>
              حيث تصبح الرائحة ذاكرة
            </p>

          </div>


          {/* روابط الموقع */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <Link to="/">
              الرئيسية
            </Link>

            <Link to="/#next">
              عن شذاك
            </Link>

            <Link to="/library">
              المكتبة العطرية
            </Link>

            <Link to="/emergency">
              ركن الطوارئ
            </Link>

          </div>


          {/* التواصل */}

          <div className="footer-column">

            <h3>
              Contact
            </h3>

            <a href="mailto:your@email.com">
              Email
            </a>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              X
            </a>

          </div>


          {/* عن المشروع */}

          <div className="footer-column">

            <h3>
              About
            </h3>

            <Link to="/#next">
              Our Project
            </Link>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>


        <div className="footer-line"></div>


        <div className="footer-bottom">

          <p>
            © 2026 Shathak. All rights reserved.
          </p>

          <p>
            Made with care for memories.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Menu;