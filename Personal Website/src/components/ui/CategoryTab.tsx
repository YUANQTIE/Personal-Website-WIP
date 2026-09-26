import type { ReactNode } from 'react';
import {Smiley, Book} from '@/components/ui/Icons';


type CategoryTabProps = {
    title?: 'About Me' | 'Education' | 'Contact Me' | 'Experience';
    icon?: 'Smiley' | 'Book' 
    
}

export default function CategoryTab({
  title = 'About Me',
  icon = 'Smiley',
}: CategoryTabProps) {
  const variantIcons: Record<
    NonNullable<CategoryTabProps['icon']>,
    ReactNode
  > = {
    Smiley: <Smiley/>,
    Book: <Book/>
  };

  return (
    <div className="relative flex h-[167px] w-[510px] flex-row items-center gap-[10px] p-0"> {/* Education Tab */}
        <div className="flex h-[167px] w-[611px] flex-none flex-col items-start justify-center gap-[10px] bg-[#343434] py-0 pl-[50px] pr-[19px] shadow-[20px_20px_4px_#1A1A1A]"> {/* The Actual Box */} 
            <div className="flex h-[87px] w-fit flex-none flex-row items-center justify-center gap-[35px] p-0"> { /* Content Container */}
                <div className="relative flex h-[87px] w-fit flex-row items-center p-0">
                    <h1 className="m-0 whitespace-nowrap font-['VCR OSD Mono'] text-[clamp(28px,6vw,56px)] uppercase leading-[1.15] tracking-[-1px] text-[#8ace00] [text-shadow:7px_7px_0px_rgba(1,1,1,0.35)] max-[520px]:whitespace-normal">
                        {title}
                    </h1> {/* Education Text */}
                </div>  {/* Education Text Container */}
                
                <div className="flex h-[86px] w-[86px] flex-none flex-row items-center gap-[10px] p-0">
                    {variantIcons[icon]}
                </div> {/* Icon Container */}
            </div>
        </div>
      </div>
  );
}



