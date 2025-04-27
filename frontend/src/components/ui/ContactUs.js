import React, { useState } from 'react';
import Header from './Header';

const ContactUs = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('access_key', '4a73da4d-2ac7-4830-a1f3-43ebf9fd90b5'); // Replace with your Web3Forms access key

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      e.target.reset(); // Reset form after successful submit
    } else {
      setStatus('Oops! Something went wrong.');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-6">
        <div className="bg-gray-900 bg-opacity-90 rounded-lg shadow-xl max-w-4xl w-full p-8 md:flex md:space-x-6">
          
          {/* Contact Information */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4 text-center glow-text">Contact Us</h2>
            <p className="text-gray-400 mb-6 text-center glow-text">
              For any queries or feedback, feel free to reach out to us!
            </p>
            <ul className="text-gray-300 glow-text">
              <li className="mb-2">
                <strong>Phone:</strong> +91-1234567890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> rvce.edu.in
              </li>
              <li>
                <strong>Address:</strong> Mysore Road,RV COllege Of Engineering Bengaluru, Karnataka
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 glow-text">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 glow-input"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 glow-text">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 glow-input"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 glow-text">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full mt-1 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 glow-input"
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>

              {/* Display the status message */}
              {status && <p className="text-green-400 text-center mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Inline CSS for Glowing Effect */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
        }

        .glow-input {
          position: relative;
          z-index: 0;
        }
        .glow-input:focus {
          box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.5);
          animation: glow-animation 1.5s ease-in-out infinite;
        }

        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 12px 4px rgba(255, 255, 255, 1);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.42);
          }
        }
      `}</style>
    </>
  );
};

export default ContactUs;
