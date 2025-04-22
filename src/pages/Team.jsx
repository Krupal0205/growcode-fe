import React, { useEffect } from 'react';
import bgImage from '../img/pexels-photo-6894201.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: "Rajesh Patel",
    role: "CEO & Founder",
    image: "https://placehold.co/400x400/6366f1/ffffff",
    bio: "With over 15 years of experience in IT, Rajesh leads our vision and strategy.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "https://placehold.co/400x400/10b981/ffffff",
    bio: "Priya oversees our technical direction and ensures we stay at the cutting edge.",
  },
  {
    name: "Amit Singh",
    role: "Lead Developer",
    image: "https://placehold.co/400x400/8b5cf6/ffffff",
    bio: "Amit brings extensive expertise in full-stack development and system architecture.",
  },
  {
    name: "Neha Gupta",
    role: "UX/UI Designer",
    image: "https://placehold.co/400x400/ec4899/ffffff",
    bio: "Neha creates intuitive and beautiful user experiences for our clients.",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="team"
      className="py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center text-white backdrop-blur-sm bg-black/40 py-12 rounded-3xl">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Team</h2>
        <p className="text-lg mb-12" data-aos="fade-up">
          Meet the experts behind GrowCode's success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white text-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-indigo-500 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
