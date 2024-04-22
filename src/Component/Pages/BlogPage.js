import React from "react";

const BlogPage = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content:
        "As a huge platform for buying and selling art online, artnet makes sure to keep readers updated on the latest industry news, covering everything from auctions to politics, exhibitions and more. They provide a truly global source of information, making this one of the best art blogs for those who want to gain a thorough understanding of the art world as a whole and dip into the commercial side of things. In fact, artnet’s blog operates somewhat like a news channel, with many articles posted each day, constantly sharing reports on both a local and larger scale. A quick browse down the homepage will fill you in on the major goings-on, while the posts themselves offer highly competent, detailed information.",
      imageUrl: "./images/Blog-1.jpg",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content:
        "Adopting the style of a classic newspaper, this editorial is full of frequent updates from the art world. Having been around since 1902, it’s not by chance that it takes on this traditional aesthetic. ARTnews is the most widely circulated art magazine in the world, with a huge global readership.ARTnews covers a broad spectrum of topics, reporting on everything that shapes the art world. There’s a steady flow of news updates, as well as articles about the art market, trends and events of all kinds.Their Art in America section, launched in 1913, publishes cutting-edge insights into today’s art and culture scene.",
      imageUrl: "./images/Blog-2.jpg",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content:
        "This art and culture blog is the place to head if you want in on the best up-coming exhibitions around the globe. The frequent articles showcase a curated selection of art shows and events, providing a brief summary of the exhibition, as well as more in-depth reviews and interviews.Juxtapoz is also a great place to discover new artists from various disciplines, spanning from photography and film, to painting, illustration, street art and more.The fun doesn’t end there—there’s also Radio Juxtapoz, an art and design podcast bringing you plenty more high quality content.",
      imageUrl: "./images/Blog-3.jpeg",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      content:
        "Adopting the style of a classic newspaper, this editorial is full of frequent updates from the art world. Having been around since 1902, it’s not by chance that it takes on this traditional aesthetic. ARTnews is the most widely circulated art magazine in the world, with a huge global readership.ARTnews covers a broad spectrum of topics, reporting on everything that shapes the art world. There’s a steady flow of news updates, as well as articles about the art market, trends and events of all kinds. Their Art in America section, launched in 1913, publishes cutting-edge insights into today’s art and culture scene. This monthly publication will fill you in on the most pressing current issues, examining pertinent themes from activism to technology. You’ll also get to read about news and updates on the world’s top art and design museums.",
      imageUrl: "./images/Blog-4.jpeg",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="bg-black text-white p-8">
      <h1 className="font-bold text-3xl text-center mb-8">BLOGS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h2 className="border-2 border-customGreen font-bold text-lg mb-4 text-center">{post.title}</h2>
            <img src={post.imageUrl} alt={post.title} className="w-full mb-4" />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

