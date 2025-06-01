import React from 'react';

const workExperiences = [
  {
    company: "Innovatech Solutions",
    companyLink: "#", // Replace with actual link if available
    title: "Senior Software Engineer",
    dates: "Aug 2020 - Present",
    responsibilities: [
      "Led development of a new SaaS platform using Next.js and Node.js.",
      "Mentored a team of 5 junior developers, fostering their growth and skills.",
      "Improved API performance by 20% through query optimization and caching strategies.",
      "Collaborated with product managers to define and implement new features.",
    ],
  },
  {
    company: "CodeCrafters Inc.",
    companyLink: "#", // Replace with actual link if available
    title: "Full Stack Developer",
    dates: "Jun 2018 - Jul 2020",
    responsibilities: [
      "Developed and maintained responsive client websites using React and Tailwind CSS.",
      "Integrated various third-party APIs, including payment gateways and social media services.",
      "Contributed to the development of a reusable component library, improving development efficiency.",
      "Participated in agile development cycles, including sprint planning and daily stand-ups.",
    ],
  },
];

function WorkPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-white mb-8">Work Experience</h1>
      <div className="space-y-8">
        {workExperiences.map((exp, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-accent mb-1">
              {exp.companyLink ? (
                <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h2>
            <p className="text-lg text-slate-300 mb-1">{exp.title}</p>
            <p className="text-sm text-slate-400 mb-4">{exp.dates}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
