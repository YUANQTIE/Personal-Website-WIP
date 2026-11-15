import CategoryTab from '../CategoryTab';

type EducationEntry = {
  school: string;
  level: string;
  dates: string;
  points: string[];
};

// TODO: double-check these against your real records — transcribed from the mockup.
const education: EducationEntry[] = [
  {
    school: 'De La Salle University',
    level: 'College',
    dates: 'September 2024 - September 2028',
    points: [
      'Currently studying BS Computer Science - Software Technology.',
      'Participates in organizational experiences for Data Science Society (DSS), The Society of Proactive Role Models Inspiring Total Development (SPARKT), CATCHERS, and Computer Studies Government (CSG).',
      'My relevant coursework includes Programming Fundamentals, database systems, data structures and algorithms, software project management, web development, and machine learning.',
      "A DOST-SEI Merit scholar and currently a consistent dean's lister with a CGPA of above 3.5.",
    ],
  },
  {
    school: 'De La Salle University - IS',
    level: 'Senior High School',
    dates: 'September 2022 - September 2024',
    points: [
      'Took the Science, Technology, Engineering, and Mathematics (STEM) Strand.',
      'Graduated with a Silver Medal.',
    ],
  },
  {
    school: 'De La Salle Araneta University',
    level: 'Junior High School',
    dates: 'June 2018 - May 2022',
    points: [
      'Graduated with High Honors recognition.',
      'Won Silver for Science Feature Writing during NAPSA 2020 and Bronze for Sports Feature Writing during NAPSA 2021.',
    ],
  },
];

const shadow = 'shadow-[5px_5px_3px_#1A1A1A] md:shadow-[17px_17px_3px_#1A1A1A]';

export default function EducationSection() {
  return (
    <section className="flex w-full flex-col items-center gap-6 p-0 md:gap-[42px]">
      <div className="flex w-full flex-row items-start px-4 md:px-0">
        <CategoryTab title="Education" icon="Book" />
      </div>

      <ol className="relative mx-4 flex w-[calc(100%-2rem)] flex-col gap-10 border-l-2 border-dashed border-white/70 pl-6 font-pixel md:mx-[51px] md:w-[calc(100%-102px)] md:gap-[51px] md:pl-[42px]">
        {education.map((e) => (
          <li key={e.school} className="group relative flex flex-col items-start gap-3 md:gap-5">
            {/* Timeline marker */}
            <span className="absolute -left-[31px] top-2 h-5 w-5 border-2 border-dashed border-white bg-black transition-colors group-hover:border-solid group-hover:border-[#8ace00] group-hover:bg-[#8ace00] md:-left-[55px] md:top-4 md:h-7 md:w-7" />

            <h3 className={`hover-pop m-0 border-2 border-[#8ace00] bg-[#343434] px-3 py-2 text-[14px] uppercase text-[#8ace00] md:px-5 md:py-3 md:text-[27px] ${shadow}`}>
              {e.school}
            </h3>

            <p className={`hover-pop m-0 bg-[#343434] px-3 py-2 font-body text-[13px] text-white/80 md:px-5 md:py-3 md:text-[17px] ${shadow}`}>
              {e.level}: {e.dates}
            </p>

            <ul className={`hover-pop m-0 ml-3 w-[calc(100%-0.75rem)] list-disc space-y-2 bg-[#343434] py-4 pl-8 pr-4 font-body text-[13px] leading-[1.7] text-white/90 md:ml-[34px] md:w-[calc(100%-34px)] md:space-y-3 md:py-[23px] md:pl-[51px] md:pr-[34px] md:text-[17px] ${shadow}`}>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
