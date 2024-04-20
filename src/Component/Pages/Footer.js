import React, { useState } from 'react';
import './Footer.css'; // Import CSS file for styling

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
        <footer className="footer">
            <div className="contact-us">
                <h3>CONTACT US</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        {/* <label htmlFor="name">Name:</label> */}
                        <input type="text" id="name" name="name" value={formData.name} placeholder="Enter your Name:" onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        {/* <label htmlFor="email">Email Address:</label> */}
                        <input type="email" id="email" name="email" value={formData.email} placeholder='Enter your Email Address:' onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        {/* <label htmlFor="mobile">Mobile Number:</label> */}
                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} placeholder='Enter your Mobile Number:' onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea id="message" name="message" rows="4" value={formData.message} placeholder='Ask me your Doubts:' onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
            <p className='copy_right'>@CoppyRight 2024</p>
            </div>
        </footer>
    );
};

export default ContactUs;
