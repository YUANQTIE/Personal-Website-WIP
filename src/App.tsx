import "./css/App.css";
import PixelBlast from "@/components/PixelBlast.jsx";
import AboutMeSection from "./components/ui/AboutMe/AboutMeSection";
import HeroSection from "./components/ui/Hero/HeroSection";
// import Header from "./components/ui/Header/Header";
import EducationSection from "./components/ui/Education/EducationSection";
import ProjectsSection from "./components/ui/Projects/ProjectsSection";
import BlogSection from "./components/ui/Blog/BlogSection";
import ContactSection from "./components/ui/Contact/ContactSection";

export default function YuanPortfolioHome() {
  return (
    <div className="flex flex-col items-center w-full h-full self-stretch overflow-x-hidden pt-4 pb-12 md:pt-[24px] md:pb-[74px]"> {/* Desktop */}
      {/*<Header />*/}
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
      <div id="home" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full px-4 pt-4 pb-8 md:px-[26px] md:pt-[16px] md:pb-[48px]">{/* Hero */}
        <HeroSection/>    
      </div>
      <div id="about" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full pt-2 pb-8 md:px-[26px] md:pt-[12px] md:pb-[48px]">{/* About Me */}
        <AboutMeSection/>
      </div>
      <div id="education" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full py-8 md:px-[26px] md:py-[48px]">{/* Education */}
        <EducationSection/>
      </div>
      <div id="projects" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full py-8 md:px-[26px] md:py-[48px]">{/* Projects */}
        <ProjectsSection/>
      </div>
      <div id="blog" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full py-8 md:px-[26px] md:py-[48px]">{/* Blog */}
        <BlogSection/>
      </div>
      <div id="contact" className="relative z-10 scroll-mt-20 w-full max-w-[1200px] h-full py-8 md:px-[26px] md:py-[48px]">{/* Contact Me */}
        <ContactSection/>
      </div>
    </div>
  );
}