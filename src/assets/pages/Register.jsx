import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // مؤقتًا إلى أن نربط قاعدة البيانات
    navigate("/login");
  };

  return (
    <main className="auth-page">

      <div className="auth-image">
        <img src="/shathak/register.jpg" alt="Shathak" />
        <div className="auth-image-overlay"></div>

        <div className="auth-brand">
          <span>Shathak</span>
          <small>where scent becomes memory</small>
        </div>
      </div>


      <section className="auth-card">

        <Link to="/" className="auth-back">
          ← Back to Shathak
        </Link>


        <div className="auth-content">

          <p className="auth-kicker">
            BEGIN YOUR JOURNEY
          </p>

          <h1>
            Create account
          </h1>

          <p className="auth-description">
            Start building your personal scent library.
          </p>


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label htmlFor="name">
                Full name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="input-group">

              <label htmlFor="register-email">
                Email
              </label>

              <input
                id="register-email"
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="input-group">

              <div className="password-label">

                <label htmlFor="register-password">
                  Password
                </label>

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
                minLength="6"
              />

            </div>


            <label className="terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the terms and privacy policy.
              </span>

            </label>


            <button
              type="submit"
              className="auth-submit"
            >
              Create account
            </button>

          </form>


          <div className="auth-divider">
            <span>or</span>
          </div>


          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Sign in
            </Link>

          </p>

        </div>

      </section>

    </main>
  );
}

export default Register;