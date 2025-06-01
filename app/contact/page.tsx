import React from 'react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ShyanRoyChoudhury', handle: '@ShyanRoyChoudhury' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shyan-roy-choudhury-79a860198/', handle: 'Shyan Roy Choudhury' },
  { name: 'X (Twitter)', url: 'https://twitter.com/kenobi8356', handle: '@kenobi8356' },
];

function ContactPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-white">Get In Touch</h1>

      <section>
        <p className="text-lg text-slate-300 mb-4">
          I&#39;m always excited to connect and discuss new projects, opportunities, or just chat about technology.
          Feel free to reach out to me via email:
        </p>
        <a
          href="mailto:Shayan.roy31@gmail.com"
          className="text-2xl text-accent font-semibold hover:underline transition-colors duration-300"
        >
          Shayan.roy31@gmail.com
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Find Me Online</h2>
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-accent hover:underline flex-shrink-0 w-28 transition-colors duration-300" // Added w-28 for alignment
              >
                {link.name}
              </a>
              <span className="text-slate-400 ml-4">{link.handle}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
         <p className="text-slate-400 text-sm mt-12">
          Looking forward to hearing from you!
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
