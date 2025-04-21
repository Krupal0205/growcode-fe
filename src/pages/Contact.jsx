import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-700 mb-12 max-w-xl mx-auto">Get in touch with us for any inquiries, and our team will respond promptly!</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form className="contact-form bg-white p-8 rounded-lg shadow-xl transition-transform hover:scale-105 duration-300 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info-card p-8 bg-white rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="contact-info mb-6">
              <div className="contact-info-icon bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-600">123 Tech Park, Ahmedabad, Gujarat 380015, India</p>
              </div>
            </div>
            <div className="contact-info mb-6">
              <div className="contact-info-icon bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-info mb-6">
              <div className="contact-info-icon bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">info@growcode.com</p>
              </div>
            </div>

            <div className="business-hours mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
