import React from 'react';

const blogPosts = [
  {
    title: "Mastering Tailwind CSS: Tips for Cleaner Code",
    date: "October 26, 2023",
    snippet: "An exploration of best practices and advanced techniques for writing more maintainable and efficient Tailwind CSS in your projects. Learn how to leverage utility-first principles effectively.",
  },
  {
    title: "The Rise of Server Components in Next.js 13",
    date: "October 15, 2023",
    snippet: "A deep dive into React Server Components, their benefits, and how they are changing the way we build Next.js applications. Understand the impact on performance and developer experience.",
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    date: "September 30, 2023",
    snippet: "Discover patterns and practices for creating robust and scalable APIs using Node.js and Express. Covers topics like middleware, error handling, and database integration for enterprise-grade applications.",
  }
];

function BlogPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]">
            <h2 className="text-2xl font-semibold text-accent mb-2 hover:underline cursor-pointer transition-colors duration-300">
              {/* In a real app, this would be a Link component */}
              {post.title}
            </h2>
            <p className="text-sm text-slate-400 mb-3">{post.date}</p>
            <p className="text-slate-300 text-sm">{post.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
