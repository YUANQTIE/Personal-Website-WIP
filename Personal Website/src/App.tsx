import "./css/App.css";
import PixelBlast from "@/components/PixelBlast.jsx";
import AboutMeSection from "./components/ui/AboutMe/AboutMeSection";
import HeroSection from "./components/ui/Hero/HeroSection";

export default function YuanPortfolioHome() {
  return (
    <div className="page">
      <div className="pixel-background">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#334d00"
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
            <a href="">HOME</a>
            <a href="">ABOUT ME</a>
            <a href="">EDUCATION</a>
            <a href="">EXPERIENCE</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACT ME</a>
          </nav>
        </header>

        <main className="main">
          <div className="hero">
            <div className="hero-content">
                <HeroSection/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}