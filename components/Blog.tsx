"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Embracing Modesty in Modern Fashion",
        excerpt: "Discover how to blend contemporary trends with timeless modest values for a look that is both chic and respectful.",
        date: "October 10, 2023",
        image: "/images/a.png",
        category: "Style Guide",
    },
    {
        id: 2,
        title: "The Art of Layering for Every Season",
        excerpt: "Master the art of layering with our comprehensive guide to staying comfortable and stylish year-round.",
        date: "November 5, 2023",
        image: "/images/b.png",
        category: "Tips & Tricks",
    },
    {
        id: 3,
        title: "Sustainable Fabrics: A Conscious Choice",
        excerpt: "Why we choose eco-friendly materials and how you can build a more sustainable wardrobe.",
        date: "December 12, 2023",
        image: "/images/c.png",
        category: "Sustainability",
    },
];

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-primary">
                    {post.category}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-600 font-light text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                </p>
                <button className="text-accent text-sm font-medium uppercase tracking-widest hover:underline text-left mt-auto">
                    Read Story
                </button>
            </div>
        </motion.div>
    );
};

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-4 bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent uppercase tracking-widest text-sm font-semibold">Journal</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3 mb-6">Latest from the Blog</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light">
                        Insights, inspiration, and stories from the world of modest fashion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <BlogCard key={post.id} post={post} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
