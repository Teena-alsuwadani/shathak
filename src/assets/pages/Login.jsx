import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // مؤقتًا إلى أن نربط قاعدة البيانات
    navigate("/");
  };

  return (
    <main className="auth-page">

      <div className="auth-image">
        <img src="/bg.jpg" alt="Shathak" />
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
            WELCOME BACK
          </p>

          <h1>
            Sign in
          </h1>

          <p className="auth-description">
            Return to your scent memories.
          </p>


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="input-group">

              <div className="password-label">

                <label htmlFor="password">
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
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

            </div>


            <div className="form-options">

              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot password?
              </button>

            </div>


            <button
              type="submit"
              className="auth-submit"
            >
              Sign in
            </button>

          </form>


          <div className="auth-divider">
            <span>or</span>
          </div>


          <p className="auth-switch">
            Don't have an account?

            <Link to="/register">
              Create an account
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Login;