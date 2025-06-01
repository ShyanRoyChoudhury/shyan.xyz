export default function Home() {
  const skills = ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Python'];
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-left">
        <h1 className="text-5xl font-bold text-white">
          Shyan Roy Choudhury
        </h1>
        <p className="text-2xl text-accent mt-2">
          Full Stack Developer & Open Source Enthusiast
        </p>
        <p className="text-lg text-slate-300 mt-6 max-w-xl">
          Crafting innovative SaaS solutions and contributing to open-source projects. I thrive on turning ideas into reality through code, building experiences that are both functional and delightful.
        </p>
      </section>

      {/* About Me Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-slate-300 max-w-xl">
          I&#39;m passionate about all things development, from architecting robust backend systems to creating intuitive user interfaces. I&#39;m always eager to learn new technologies and apply them to solve real-world problems, creating impactful and meaningful software.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-secondary text-accent px-4 py-2 rounded-md font-medium hover:bg-primary transition-all duration-300 ease-in-out cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="flex space-x-4 mt-10">
        <a
          href="/work"
          className="bg-accent text-primary font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-300"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="border border-accent text-accent font-semibold py-3 px-6 rounded-md hover:bg-accent hover:text-primary transition-colors duration-300"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
