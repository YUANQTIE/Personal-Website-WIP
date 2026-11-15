import CategoryTab from '../CategoryTab';

type Project = {
  name: string;
  description: string;
  image?: string; // put images in /public and use e.g. '/projects/quiver.png'
  link?: string;
};

// TODO: replace with your real projects (3 slots).
const projects: Project[] = [
  { name: 'Project One', description: 'A brief description of what this project does and what you built it with.' },
  { name: 'Project Two', description: 'A brief description of what this project does and what you built it with.' },
  { name: 'Project Three', description: 'A brief description of what this project does and what you built it with.' },
];

function ProjectCard({ name, description, image, link }: Project) {
  const card = (
    <article className="hover-pop group flex h-full flex-col bg-[#343434] shadow-[5px_5px_3px_#1A1A1A] md:shadow-[17px_17px_3px_#1A1A1A]">
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden border-b-2 border-[#8ace00] bg-[#1A1A1A]">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none" />
        ) : (
          <span className="transition-colors group-hover:text-[#8ace00] text-[12px] uppercase text-white/40 md:text-[17px]">Image</span>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4 md:gap-3 md:p-[23px]">
        <h3 className="m-0 text-[15px] uppercase text-[#8ace00] md:text-[24px]">
          {name}
        </h3>
        <p className="m-0 font-body text-[14px] leading-[1.6] text-white/80 md:text-[16px]">{description}</p>
      </div>
    </article>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </a>
  ) : (
    card
  );
}

export default function ProjectsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-6 p-0 md:gap-[42px]">
      <div className="flex w-full flex-row items-start px-4 md:px-0">
        <CategoryTab title="Projects" icon="Briefcase" />
      </div>

      <div className="grid w-full grid-cols-1 gap-6 px-4 font-pixel md:grid-cols-3 md:gap-[34px] lg:px-[37px]">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
