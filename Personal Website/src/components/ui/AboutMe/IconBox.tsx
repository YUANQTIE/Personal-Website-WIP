import {Discord, Instagram, Facebook, GitHub, LinkedIn} from '@/components/ui/Icons';

export default function IconBox(){
  return (
    <div className="relative flex h-fit min-h-[100px] w-fit min-w-[944px] flex-row items-start gap-[111px] bg-[#343434] px-[40px] py-[27px] shadow-[20px_20px_4px_#1A1A1A]">
        <a href='https://www.linkedin.com/in/yuan-panlilio/' target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
        <a href='https://github.com/YUANQTIE' target="_blank" rel="noopener noreferrer"><GitHub/></a>
        <a href='https://www.facebook.com/yuan.yutwo.yuthree/' target="_blank" rel="noopener noreferrer"><Facebook/></a>
        <a href='https://www.instagram.com/yuan_twothree/' target="_blank" rel="noopener noreferrer"><Instagram/></a>
        <a href='https://discordapp.com/users/753609897425240225' target="_blank" rel="noopener noreferrer"><Discord/></a>
    </div>
  );
}
