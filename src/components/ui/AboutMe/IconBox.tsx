import {Discord, Instagram, Facebook, GitHub, LinkedIn} from '@/components/ui/Icons';

export default function IconBox(){
  return (
    <div className="hover-pop relative flex h-fit w-fit flex-row items-center justify-center gap-6 bg-[#343434] px-4 py-3 shadow-[4px_4px_3px_#1A1A1A] md:gap-[47px] md:px-[17px] md:py-[12px] md:shadow-[9px_9px_3px_#1A1A1A] [&_a]:h-6 [&_a]:w-6 md:[&_a]:h-[42px] md:[&_a]:w-[42px] [&_svg]:h-full [&_svg]:w-full">
        <a href='https://www.linkedin.com/in/yuan-panlilio/' className="icon-hop" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
        <a href='https://github.com/YUANQTIE' className="icon-hop" target="_blank" rel="noopener noreferrer"><GitHub/></a>
        <a href='https://www.facebook.com/yuan.yutwo.yuthree/' className="icon-hop" target="_blank" rel="noopener noreferrer"><Facebook/></a>
        <a href='https://www.instagram.com/yuan_twothree/' className="icon-hop" target="_blank" rel="noopener noreferrer"><Instagram/></a>
        <a href='https://discordapp.com/users/753609897425240225' className="icon-hop" target="_blank" rel="noopener noreferrer"><Discord/></a>
    </div>
  );
}
