import React from "react";
import "./App.css";

function App() {
  return (
    <html lang="en">
      <header className="bg-dark header">
        <nav className="navbar">
          <div>
            <ul className="navbar">
              <li className="nav-item">Database</li>
              <li className="nav-item">Guide</li>
              <li className="nav-item">Calculator</li>
            </ul>
            <form className="navbar">
              <input placeholder="Search" />
              <button>
                <i>*Search Icon*</i>
              </button>
            </form>
            <ul className="navbar">
              <li className="nav-item">
                <a href="/login/">Log in</a>
              </li>
              <li className="nav-item">
                <a href="/sign-up/">Sign Up</a>
              </li>
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
