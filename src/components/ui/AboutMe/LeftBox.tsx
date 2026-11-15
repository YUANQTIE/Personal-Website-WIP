export default function LeftBox(){
  return (
    <div className="hover-pop relative flex h-fit w-full flex-col items-start gap-[8px] bg-[#343434] lg:w-fit lg:min-w-[425px] px-4 py-4 shadow-[5px_5px_3px_#1A1A1A] md:px-[34px] md:py-[23px] md:shadow-[17px_17px_3px_#1A1A1A]">
        <p className="m-0 h-fit w-fit max-w-full flex-none font-pixel text-[14px] font-normal leading-[1.9] text-white md:text-[22px]">
            <span className="text-[#8ace00]">Age:</span> 21
        </p>
        <p className="m-0 h-fit w-fit max-w-full flex-none font-pixel text-[14px] font-normal leading-[1.9] text-white md:text-[22px]">
            <span className="text-[#8ace00]">Location:</span> Valenzuela, PH
        </p>
        <p className="m-0 h-fit w-fit max-w-full flex-none font-pixel text-[14px] font-normal leading-[1.9] text-white md:text-[22px]">
            <span className="text-[#8ace00]">School:</span> DLSU
        </p>
        <p className="m-0 h-fit w-fit max-w-full flex-none font-pixel text-[14px] font-normal leading-[1.9] text-white md:text-[22px]">
            <span className="text-[#8ace00]">Program:</span> BS CS - ST
        </p>
    </div>
  );
}

