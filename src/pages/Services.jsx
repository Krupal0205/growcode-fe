import React from 'react';
import backgroundImage from '../img/pexels-photo-8866726.webp'; // ✅ Adjust path if needed

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      >
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(1px)',
      opacity: 0.3,
    }}
  ></div>

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-70"></div>
</div>


        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-400 dark:text-white fade-in">
            Our Services
          </h2>
          <p className="text-lg text-center text-white dark:text-gray-300 mt-4 mb-12 fade-in fade-in-delay-1">
            Comprehensive IT solutions tailored to your business needs
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl fade-in fade-in-delay-${(index % 3) + 1}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center justify-center space-x-2"
                  >
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const services = [
  {
    title: 'Web Development',
    description:
      'Custom web applications and responsive websites built with the latest technologies to enhance your online presence.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android devices that deliver exceptional user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Database Solutions',
    description:
      'Efficient database design, optimization, and management for your business needs with scalable architecture.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Cloud Services',
    description:
      'Scalable cloud infrastructure and migration services for optimal performance and reliability of your applications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Solutions',
    description:
      'End-to-end e-commerce platforms with secure payment gateways and inventory management systems for your online business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description:
      'Advanced data analysis and visualization to drive business intelligence and insights for informed decision making.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

export default Services;
