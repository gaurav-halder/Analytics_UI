import React from "react";

const blogPosts = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    imageUrl: "/images/UXpic.png",
    authorUrl: "/images/avatar.png",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    imageUrl: "/images/Migratepic.png",
    authorUrl: "/images/Author2.png",
  },
  {
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    imageUrl: "/images/Buildpic.png", 
    authorUrl: "/images/Author3.png",
  },
];

const BlogPosts = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between">
        <div className="mb-8 space-y-3 cursor-default">
          <p className="text-purple-600 font-semibold">Our blog</p>
          <h2 className="text-3xl font-medium mb-2">Latest blog posts</h2>
          <p className="text-gray-600 text-lg">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="hidden md:block text-center mt-8">
          <button className="bg-purple-600 text-white px-4 py-3 rounded-lg font-medium">
            View all posts
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            // className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-52 object-cover cursor-pointer"
            />
            <div className="py-8 cursor-default">
              <p className="text-purple-600 font-semibold">{post.category}</p>
              <h3 className="text-xl font-semibold mt-2 flex justify-between cursor-pointer">
                {post.title} <span className="inline-block">&#8599;</span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex items-center mt-4">
                <img
                  src={post.authorUrl}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden text-center mt-8">
          <button className="bg-purple-600 text-white px-[120px] py-3 rounded-lg font-medium">
            View all posts
          </button>
        </div>
    </div>
  );
};

export default BlogPosts;
