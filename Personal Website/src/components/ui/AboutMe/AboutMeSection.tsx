import RightBox from '@/components/ui/AboutMe/RightBox';
import IconBox from '@/components/ui/AboutMe/IconBox';
import LeftBox from '@/components/ui/AboutMe/LeftBox';
import CategoryTab from '../CategoryTab';

export default function AboutMeSection() {
  return (
    <section className="flex w-full w-fit flex-col gap-[72px] p-0">
      <CategoryTab />

      {/* ABOUT ME GROUPING */}
      <div className="outline-2 outline-red-500 flex w-full flex-row items-start justify-between gap-[150px] px-[44px]">
        <LeftBox />
        <RightBox />
      </div>

      {/* FRAME 13 / ICON CONTAINER */}
      <div className="flex w-full flex-col items-center gap-[10px]">
        <IconBox />
      </div>
    </section>
  );
}