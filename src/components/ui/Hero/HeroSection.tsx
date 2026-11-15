import HexagonFrame from "./HexagonFrame";
import TextType from '../ReactBits/TextType';


const heroButton =
    "bg-[#8ace00] px-5 py-3 font-pixel text-[13px] uppercase text-black shadow-[3px_3px_0px_#1A1A1A] transition-all duration-100 hover:-translate-y-[2px] hover:bg-[#a6f500] hover:shadow-[5px_5px_0px_#1A1A1A] motion-reduce:hover:translate-y-0 md:px-7 md:text-[17px]";

export default function HeroSection() {
    const words = [
        "A CS STUDENT AT DLSU",
        "INTO DATA & AI",
        "SQL CERTIFIED",
        "OPEN TO OPPORTUNITIES"
    ];
    return (
        <section className=" flex flex-col items-center justify-center gap-6 md:gap-[42px] p-0 w-full self-stretch flex-none"> {/* Middle Frame */}  
                <div className="  flex flex-col items-center justify-center gap-[8px] p-0 w-full max-w-[204px] sm:max-w-[323px] md:max-w-[434px] aspect-[511/490] flex-none"> {/* Picture Frame */}
                    <HexagonFrame />
                </div>

                <div className="  flex flex-col items-center justify-center gap-[8px] p-0 w-full min-h-[156px] flex-none">  {/* Text Container Frame */}

                    <h1 className="font-['VCR_OSD_Mono'] text-[22px] leading-[1.1] sm:text-[36px] md:text-[82px] md:leading-[73px] font-normal uppercase text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.6)] flex flex-wrap justify-center items-center text-center gap-x-3 md:gap-[17px] w-fit max-w-full min-h-[74px] flex-none">
                        <span>Hi, I am </span>
                        <span className="text-[#8ace00]">
                             Yuan!
                        </span>
                    </h1> {/* Hi I am Yuan */}

                    <h2 className="font-['VCR_OSD_Mono'] text-[14px] leading-[1.3] sm:text-[24px] md:text-[54px] md:leading-[73px] font-normal uppercase text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.6)] flex flex-wrap justify-center items-start md:items-center text-center gap-x-2 md:gap-[17px] w-full md:w-fit max-w-full min-h-[54px] md:min-h-[74px] flex-none">
                        <span>I am </span>

                        <span className="text-[#8ace00]">
                            <TextType 
                                text={words}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="_"
                                deletingSpeed={50}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.5}
                            />
                        </span>
                    </h2> {/* I am A */}

                    <div className="mt-5 flex flex-wrap justify-center gap-3 md:mt-8 md:gap-5">
                        <a href="#projects" className={heroButton}>
                            View Projects
                        </a>
                        <a href="#contact" className={heroButton}>
                            Contact Me
                        </a>
                        <a href="/Panlilio_CV.pdf" target="_blank" rel="noopener noreferrer" className={heroButton}>
                            View CV
                        </a>
                    </div>

                </div>
        </section>
    );
}