import React from 'react';
import { useParams, Link } from 'react-router-dom';


import Ellipse1 from '../assets/Ellipse-1.svg'
import Ellipse2 from '../assets/Ellipse-2.svg'
import Ellipse3 from '../assets/Ellipse-3.svg'


export const blogData = [
    {
        id: 1,
        title: "The Evolution of UI/UX",
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
        author: "John Doe",
        date: "July 29, 2024",
        imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        id: 2,
        title: "Understanding Design Systems",
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
        author: "Jane Smith",
        date: "July 30, 2024",
        imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
];


const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((post) => post.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <img src={Ellipse1} alt="" className='absolute left-0 rotate-180 ' />
            <img src={Ellipse3} alt="" className='absolute right-0  top-0' />


            <div className="max-w-5xl mx-auto p-4 text-white">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <img src={blog.imageSrc} alt={blog.title} className="w-full h-auto mb-4 rounded-xl" />
                <p className="text-gray-500 mb-4">{blog.date} by {blog.author}</p>
                <p className="text-lg leading-relaxed">{blog.content}</p>
                <Link to="/blogs" className="text-blue-500 hover:underline mt-4 block">Back to Blogs</Link>
            </div>
        </div>
    );
};

export default BlogDetail;
