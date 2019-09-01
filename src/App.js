import React from "react";
import "./App.css";

function App() {
  return (
    <html lang="en">
      <header className="bg-dark header">
        <nav className="navbar">
          <div>
            <ul className="navbar">
              <div className="nav-item">Database</div>
              <div className="nav-item">Guide</div>
              <div className="nav-item">Calculator</div>
            </ul>
          </div>
          <div>
            <form className="navbar">
              <input placeholder="Search" />
              <button>
                <i>*Search Icon*</i>
              </button>
            </form>
          </div>
          <div>
            <ul className="navbar">
              <div className="nav-item">
                <a href="/login/">Log in</a>
              </div>
              <div className="nav-item">
                <a href="/sign-up/">Sign Up</a>
              </div>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div>
          <ul>
            <i>Add New Item</i>
          </ul>
          <ul>
            <i>Calculate</i>
          </ul>
        </div>
      </main>

      <footer className="bg-dark">
        <div>
          <a href="/contact/">Contact</a> | <a href="/about-us/">About Us</a> |{" "}
          <a href="privacy-policy/">Privacy Policy</a>
        </div>
        <div> ZoraGuide - Ragnarok Mobile Fansite</div>
      </footer>
    </html>
  );
}

export default App;
