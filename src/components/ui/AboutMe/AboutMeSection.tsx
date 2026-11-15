import RightBox from '@/components/ui/AboutMe/RightBox';
import IconBox from '@/components/ui/AboutMe/IconBox';
import LeftBox from '@/components/ui/AboutMe/LeftBox';
import CategoryTab from '../CategoryTab';

export default function AboutMeSection() {

    return (
         <section className="flex w-full flex-col items-center justify-center gap-6 p-0 md:gap-[42px]">
            <div className="flex w-full flex-row items-start px-4 md:px-0">
              <CategoryTab />
            </div>
            

            {/* ABOUT ME GROUPING */}
            <div className="flex w-full flex-col items-stretch justify-between gap-6 px-4 lg:flex-row lg:items-start lg:gap-[48px] lg:px-[37px]">
              <LeftBox />
              <RightBox />
            </div>

            {/* FRAME 13 / ICON CONTAINER */}
            <div className="w-full px-4 md:px-0">
              <IconBox />
            </div>
        </section>
    );
}
