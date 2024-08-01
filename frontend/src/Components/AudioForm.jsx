import React, { useState } from 'react';

function AudioForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        avatar: null,
        metaTags: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <div className="py-4 w-4/5 lg:mx-24 mx-8 flex flex-col items-center justify-center">
            <form className="w-full mx-auto p-4 bg-gradient-to-r from-[#4546ED] to-[#272887] shadow-md rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-8">
                    <label className="block text-white text-lg font-krona mb-2" htmlFor="image">
                        Audio
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-white text-lg font-krona mb-2" htmlFor="avatar">
                        Tumb Nail
                    </label>
                    <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-white text-lg font-krona mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-white text-lg font-krona mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-white text-lg font-krona mb-2" htmlFor="metaTags">
                        Meta Tags (comma separated)
                    </label>
                    <input
                        type="text"
                        name="metaTags"
                        id="metaTags"
                        value={formData.metaTags}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-white hover:bg-black hover:text-white hover:px-10 duration-300 font-krona text-black font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AudioForm;

