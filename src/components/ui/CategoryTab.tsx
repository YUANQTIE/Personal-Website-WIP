import type { ReactNode } from 'react';
import {Smiley, Book, Envelope, Briefcase, Chat} from '@/components/ui/Icons';

type CategoryTabProps = {
    title?: 'About Me' | 'Education' | 'Contact Me' | 'Experience' | 'Projects' | 'Say Hi!';
    icon?: 'Smiley' | 'Book' | 'Envelope' | 'Briefcase' | 'Chat';
}

export default function CategoryTab({
  title = 'About Me',
  icon = 'Smiley',
}: CategoryTabProps) {
  const variantIcons: Record<NonNullable<CategoryTabProps['icon']>, ReactNode> = { 
    Smiley: <Smiley/>,
    Book: <Book/>,
    Envelope: <Envelope/>,
    Briefcase: <Briefcase/>,
    Chat: <Chat/>
  };

  return (
    <div className="relative flex h-[65px] w-full max-w-[434px] flex-row items-center gap-[8px] p-0 md:h-[142px]"> {/* Education Tab */}
        <div className="hover-pop group flex h-[65px] w-full flex-none flex-col items-start justify-center gap-[8px] bg-[#343434] py-0 pl-5 pr-4 shadow-[5px_5px_3px_#1A1A1A] md:h-[142px] md:w-[519px] md:pl-[42px] md:pr-[16px] md:shadow-[17px_17px_3px_#1A1A1A]"> {/* The Actual Box */} 
            <div className="flex h-fit w-fit flex-none flex-row items-center justify-center gap-3 p-0 md:h-[74px] md:gap-[30px]"> { /* Content Container */}
                <div className="relative flex h-fit w-fit flex-row items-center p-0 md:h-[74px]">
                    <h1 className="m-0 whitespace-nowrap font-pixel text-[clamp(17px,6vw,48px)] uppercase leading-[1.15] tracking-[-1px] text-[#8ace00] [text-shadow:3px_3px_0px_rgba(0,0,0,0.45)] max-[442px]:whitespace-normal">
                        {title}
                    </h1> {/* Education Text */}
                </div>  {/* Education Text Container */}
                
                <div className="flex h-10 w-10 flex-none flex-row items-center gap-[8px] p-0 md:h-[73px] md:w-[73px] [&_svg]:h-full [&_svg]:w-full">
                    {variantIcons[icon]}
                </div> {/* Icon Container */}
            </div>
        </div>
      </div>
  );
}



