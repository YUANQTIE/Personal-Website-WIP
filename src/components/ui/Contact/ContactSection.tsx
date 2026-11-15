import CategoryTab from '../CategoryTab';

type ContactSectionProps = {
  email?: string;
  phone?: string;
};

// TODO: pass your real email and number, e.g. <ContactSection email="..." phone="..." />
export default function ContactSection({
  email = 'yuanpanlilio@gmail.com',
  phone = '+63 977 255 5811',
}: ContactSectionProps) {
  const rows = [
    { label: 'Email', value: email  },
    { label: 'Contact No.', value: phone },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-6 p-0 md:gap-[42px]">
      <div className="flex w-full flex-row items-start px-4 md:px-0">
        <CategoryTab title="Contact Me" icon="Envelope" />
      </div>

      <div className="w-full px-4 font-pixel lg:px-[37px]">
        <div className="hover-pop flex flex-col gap-5 bg-[#343434] p-4 shadow-[5px_5px_3px_#1A1A1A] md:gap-8 md:p-[34px] md:shadow-[17px_17px_3px_#1A1A1A]">
          <p className="m-0 font-body text-[14px] leading-[1.6] text-white/85 md:text-[18px]">
            Want to work together or just chat? Reach me through any of these:
          </p>

          <dl className="m-0 flex flex-col gap-4 md:gap-6">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
                <dt className="text-[11px] uppercase text-[#8ace00] md:w-[187px] md:text-[20px]">{r.label}</dt>
                <dd className="m-0">
                  <span className="break-all font-body text-[15px] text-white underline decoration-[#8ace00] underline-offset-4 transition-all hover:text-[#8ace00] hover:underline-offset-8 md:text-[18px]">
                    {r.value}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <a href="/Panlilio_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-fit bg-[#8ace00] px-5 py-2 text-[12px] uppercase text-black shadow-[3px_3px_0px_#1A1A1A] transition-all duration-100 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#a6f500] hover:shadow-[5px_5px_0px_#1A1A1A] motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 md:py-3 md:text-[17px]">
              View CV
          </a>
        </div>
      </div>
    </section>
  );
}
