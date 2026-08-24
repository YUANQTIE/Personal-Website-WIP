import "./css/App.css";
import PixelBlast from "@/components/PixelBlast.jsx";

export default function YuanPortfolioHome() {
  return (
    <div className="page">
      <div className="pixel-background">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#8ACE00"
          patternScale={2}
          patternDensity={1}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent
          edgeFade={0.5}
        />
      </div>

      <div className="portfolio">
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
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  HI, I AM <em>YUAN!</em>
                </h1>
                <p>STUDENT, DEVELOPER, CUTIEPIE</p>
              </div>

              {/* Glowing Green Hexagon */}
              <div className="hexagon-wrapper">
                <svg
                  viewBox="0 0 100 115"
                  className="hexagon-svg"
                  aria-hidden="true"
                >
                  <polygon points="50,5 95,30 95,85 50,110 5,85 5,30" />
                </svg>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}