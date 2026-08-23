import React from "react";

import "./css/App.css";

export default function YuanPortfolioHome() {
  return (
    <div className="portfolio">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <header className="header">
        <nav className="nav" aria-label="Primary">
          <a href="#home" className="active">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#education">EDUCATION</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT ME</a>
        </nav>
      </header>

      <main className="main">
        <div className="hero">
          <h1>
            HI, I AM <em>YUAN!</em>
          </h1>
          <p>STUDENT, DEVELOPER, CUTIEPIE</p>
        </div>
      </main>
    </div>
  );
}
