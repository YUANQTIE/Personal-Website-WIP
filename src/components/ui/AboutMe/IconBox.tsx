import {Discord, Instagram, Facebook, GitHub, LinkedIn} from '@/components/ui/Icons';

export default function IconBox(){
  return (
    <div className="hover-pop relative flex h-fit w-full flex-row items-center justify-between gap-3 bg-[#343434] px-4 py-4 shadow-[5px_5px_3px_#1A1A1A] md:min-h-[85px] md:w-fit md:min-w-[802px] md:items-start md:justify-start md:gap-[94px] md:px-[34px] md:py-[23px] md:shadow-[17px_17px_3px_#1A1A1A] [&_a]:h-9 [&_a]:w-9 md:[&_a]:h-[85px] md:[&_a]:w-[85px] [&_svg]:h-full [&_svg]:w-full">
        <a href='https://www.linkedin.com/in/yuan-panlilio/' className="icon-hop" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
        <a href='https://github.com/YUANQTIE' className="icon-hop" target="_blank" rel="noopener noreferrer"><GitHub/></a>
        <a href='https://www.facebook.com/yuan.yutwo.yuthree/' className="icon-hop" target="_blank" rel="noopener noreferrer"><Facebook/></a>
        <a href='https://www.instagram.com/yuan_twothree/' className="icon-hop" target="_blank" rel="noopener noreferrer"><Instagram/></a>
        <a href='https://discordapp.com/users/753609897425240225' className="icon-hop" target="_blank" rel="noopener noreferrer"><Discord/></a>
    </div>
  );
}
