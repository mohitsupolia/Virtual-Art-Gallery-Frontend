import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <footer className="bg-black text-white p-8">
            <div className="contact-us">
                <h3 className="text-2xl mb-4">CONTACT US</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" name="name" value={formData.name} placeholder="Enter your Name:" onChange={handleChange} className="w-full p-2 border-2 border-customGreen rounded bg-black placeholder-white text-white" required />
                    </div>
                    <div className="mb-4">
                        <input type="email" name="email" value={formData.email} placeholder="Enter your Email Address:" onChange={handleChange} className="w-full p-2 border-2 border-customGreen rounded bg-black placeholder-white text-white" required />
                    </div>
                    <div className="mb-4">
                        <input type="tel" name="mobile" value={formData.mobile} placeholder="Enter your Mobile Number:" onChange={handleChange} className="w-full p-2 border-2 border-customGreen rounded bg-black placeholder-white text-white" required />
                    </div>
                    <div className="mb-4">
                        <textarea name="message" rows="4" value={formData.message} placeholder="Ask me your Doubts:" onChange={handleChange} className="w-full p-2 border-2 border-customGreen rounded bg-black placeholder-white text-white" required></textarea>
                    </div>
                    <button type="submit" className="bg-customGreen hover:bg-white hover:text-black text-black py-2 px-4 rounded transition-colors duration-300">Submit</button>
                </form>
            </div>
            <div>
                <p className="text-center">@CoppyRight 2024</p>
            </div>
        </footer>
    );
};

export default ContactUs;

