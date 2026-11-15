import CategoryTab from '../CategoryTab';

type Project = {
  name: string;
  description: string;
  image?: string; // put images in /public and use e.g. '/projects/quiver.png'
  link?: string;
};

const projects: Project[] = [
  {
    name: 'Save-My-Lab',
    description:
      'A laboratory seat reservation system that streamlines lab bookings and admin work. I built the entire backend with Express.js and MongoDB, plus responsive Handlebars frontends wired up with the Fetch API.',
    image: '/savemylab.png',
    link: 'https://save-my-lab-nrqz.onrender.com/',
  },
  {
    name: 'DSS Dashboard',
    description:
      "An interactive dashboard of key insights and performance metrics for the DLSU Data Science Society. I cleaned and preprocessed the data in Python and Jupyter, then built the visualizations in Streamlit.",
    image: '/dss-dashboard.png',
    link: 'https://github.com/DLSU-Data-Science-Society-Open-Git-Hub/DLSU-Data-Science-Society-Dashboard',
  },
  {
    name: 'The Quiver',
    description:
      'A one-stop marketplace for Lasallian student organizations to sell merch. Built with Next.js and Supabase, with Google login, org storefronts, a cart, and checkout.',
    image: '/quiver.jpg',
    link: 'https://the-quiver-six.vercel.app/',
  },
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
