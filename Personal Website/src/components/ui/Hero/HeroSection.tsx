import HexagonFrame from "./HexagonFrame";
import TextType from '../ReactBits/TextType';


export default function HeroSection() {
    const words = [
        "A DEVELOPER!",
        "YOUR FRIEND!",
        "EXCITED TO MEET YOU!",
        "READY TO WORK WITH YOU!",
        "READY TO MAKE A POSITIVE IMPACT IN OUR WORLD!"
    ];
    return (
        <section className=" flex flex-col items-center justify-center gap-[10px] p-0 w-full min-h-[820px] self-stretch flex-none">
            <div className=" flex flex-col items-center justify-center gap-[64px] p-0 w-full min-h-[738px] flex-none">

                <div className=" flex flex-col items-center justify-center gap-[10px] p-0 w-full max-w-[511px] aspect-[511/490] flex-none">
                    <HexagonFrame />
                </div>

                <div className=" flex flex-col items-center justify-center gap-[10px] p-0 w-full min-h-[184px] flex-none">

                    <h1 className="font-['VCR_OSD_Mono'] text-[96px] leading-[86px] font-normal uppercase text-white drop-shadow-[12px_12px_0px_rgba(192,192,192,0.25)] flex items-center gap-[20px] w-fit min-h-[87px] flex-none">
                        <span>Hi, I am </span>
                        <span className="text-[#8ace00]">
                             Yuan!
                        </span>
                    </h1>

                    <h2 className="font-['VCR_OSD_Mono'] text-[64px] w-max- leading-[86px] font-normal uppercase text-white drop-shadow-[12px_12px_0px_rgba(192,192,192,0.25)] flex items-center gap-[20px] w-fit min-h-[87px] flex-none">
                        <span>I am </span>

                        <span className="cursor-pointer text-[#8ace00]">
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
                    </h2>

                </div>
            </div>
        </section>
    );
}