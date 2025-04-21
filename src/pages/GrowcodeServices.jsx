import React from 'react';
import { Code, Smartphone, ShieldCheck, Cloud } from 'lucide-react';

const services = [
    {
        categoryId: 1,
        categoryName: 'Mobile App Development',
        services: [
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'Flutter',
                description: 'Build cross-platform mobile applications with Flutter for iOS and Android.',
            },
            {
                title: 'Business Analysis',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'In-depth analysis of your business processes for optimization.',
            },
            {
                title: 'Project Management',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Efficient project management to ensure timely delivery.',
            },
            {
                title: 'Quality Assurance',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Thorough testing and quality assurance for your applications.',
            },
            {
                title: 'Maintenance & Support',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Ongoing support and maintenance for your applications.',
            },
            {
                title: 'Deployment',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Seamless deployment of your applications to production environments.',
            },
            {
                title: 'User Training',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Training sessions for users to maximize application usage.',
            },
            {
                title: 'Documentation',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Comprehensive documentation for your applications.',
            },
            {
                title: 'Performance Optimization',
                // icon: <Code size={40} className="text-indigo-600" />,
                description: 'Optimize your applications for better performance and user experience.',
            },
        ],
    },
    {
        categoryId: 2,
        categoryName: 'Web Development',
        services: [
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'ReactJS',
                description: 'Build interactive and dynamic web applications using ReactJS.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'NodeJS',
                description: 'Server-side development with NodeJS for scalable applications.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'PHP',
                description: 'Server-side scripting for web development using PHP.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'WordPress',
                description: 'Custom WordPress development for blogs and websites.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'E-commerce Solutions',
                description: 'Build e-commerce platforms with secure payment gateways.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'Content Management Systems',
                description: 'Develop and customize CMS for easy content management.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'Responsive Design',
                description: 'Create responsive web applications for all devices.',
            },
            {
                thumbnail: <Code size={40} className="text-indigo-600" />,
                title: 'API Development',
                description: 'Develop RESTful APIs for seamless integration.',
            },
        ],
    },
    {
        categoryId: 3,
        categoryName: 'Cloud Solutions',
        services: [
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'AWS Solutions',
                description: 'Leverage AWS cloud services for scalable and secure applications.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Azure Solutions',
                description: 'Utilize Microsoft Azure for cloud computing and storage solutions.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Google Cloud Solutions',
                description: 'Implement Google Cloud services for data storage and processing.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Cloud Migration',
                description: 'Migrate your applications to the cloud for better scalability.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'DevOps Integration',
                description: 'Integrate DevOps practices for continuous integration and deployment.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Cloud Security',
                description: 'Implement security measures for your cloud applications.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Disaster Recovery',
                description: 'Set up disaster recovery solutions for your cloud infrastructure.',
            },
            {
                thumbnail: <Cloud size={40} className="text-indigo-600" />,
                title: 'Monitoring & Optimization',
                description: 'Monitor and optimize your cloud resources for performance.',
            },
        ],
    },
    {
        categoryId: 4,
        categoryName: 'Security Solutions',
        services: [
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Penetration Testing',
                description: 'Identify vulnerabilities in your systems with our penetration testing services.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Security Audits',
                description: 'Comprehensive security audits to ensure your systems are secure.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Data Encryption',
                description: 'Encrypt sensitive data to protect it from unauthorized access.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Network Security',
                description: 'Implement network security measures to safeguard your infrastructure.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Incident Response',
                description: 'Rapid response to security incidents to minimize damage.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Compliance Solutions',
                description: 'Ensure compliance with industry standards and regulations.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Identity and Access Management',
                description: 'Manage user identities and access to your systems.',
            },
            {
                thumbnail: <ShieldCheck size={40} className="text-indigo-600" />,
                title: 'Security Awareness Training',
                description: 'Train your employees on security best practices.',
            },
        ],
    },

    {
        categoryId: 5,
        categoryName: 'UI/UX Design',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'UI/UX Design',
                description: 'Create user-friendly and visually appealing interfaces.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Prototyping',
                description: 'Develop interactive prototypes for user testing and feedback.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'User Research',
                description: 'Conduct user research to inform design decisions.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Wireframing',
                description: 'Create wireframes to outline the structure of your applications.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Usability Testing',
                description: 'Test your designs with real users for feedback and improvements.',
            },
        ],
    },
    {
        categoryId: 6,
        categoryName: 'Digital Marketing',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'SEO Optimization',
                description: 'Improve your website\'s visibility on search engines.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Social Media Marketing',
                description: 'Engage with your audience through effective social media strategies.',
            },
        ],
    },
    {
        categoryId: 7,
        categoryName: 'Data Analytics',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Data Visualization',
                description: 'Transform complex data into easy-to-understand visual formats.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Business Intelligence',
                description: 'Leverage data for informed decision-making and strategy development.',
            },
        ],
    },
    {
        categoryId: 8,
        categoryName: 'E-commerce Solutions',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Shopify Development',
                description: 'Build and customize your online store with Shopify.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'WooCommerce Development',
                description: 'Create e-commerce websites using WooCommerce for WordPress.',
            },
        ],
    },
    {
        categoryId: 9,
        categoryName: 'DevOps Solutions',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'CI/CD Implementation',
                description: 'Automate your development and deployment processes with CI/CD.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Containerization',
                description: 'Utilize Docker and Kubernetes for containerized applications.',
            },
        ],
    },
    {
        categoryId: 10,
        categoryName: 'AI & Machine Learning',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Machine Learning Models',
                description: 'Develop and deploy machine learning models for various applications.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'AI Solutions',
                description: 'Implement AI solutions for automation and data analysis.',
            },
        ],
    },
    {
        categoryId: 11,
        categoryName: 'Blockchain Development',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Smart Contracts',
                description: 'Develop and deploy smart contracts on blockchain platforms.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'DApp Development',
                description: 'Create decentralized applications (DApps) for various use cases.',
            },
        ],
    },
    {
        categoryId: 12,
        categoryName: 'Game Development',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Unity Game Development',
                description: 'Build interactive and engaging games using Unity.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Mobile Game Development',
                description: 'Create mobile games for iOS and Android platforms.',
            },
        ],
    },
    {
        categoryId: 13,
        categoryName: 'IoT Solutions',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'IoT Device Integration',
                description: 'Integrate IoT devices for smart solutions.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'IoT Analytics',
                description: 'Analyze data from IoT devices for insights and optimization.',
            },
        ],
    },

    {
        categoryId: 14,
        categoryName: 'AR/VR Development',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Augmented Reality Solutions',
                description: 'Develop AR applications for enhanced user experiences.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Virtual Reality Solutions',
                description: 'Create immersive VR experiences for various industries.',
            },
        ],
    },

    {
        categoryId: 15,
        categoryName: 'Consulting Services',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'IT Consulting',
                description: 'Expert advice on IT strategy and implementation.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Business Consulting',
                description: 'Consulting services to optimize business processes.',
            },
        ],
    },

    {
        categoryId: 16,
        categoryName: 'Training & Support',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Technical Training',
                description: 'Training sessions for your team on various technologies.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Support Services',
                description: 'Ongoing support for your IT systems and applications.',
            },
        ],
    },
    {
        categoryId: 17,
        categoryName: 'Content Management',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'CMS Development',
                description: 'Develop and customize content management systems.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Content Strategy',
                description: 'Create effective content strategies for your business.',
            },
        ],
    },
    {
        categoryId: 18,
        categoryName: 'API Development',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'RESTful API Development',
                description: 'Develop RESTful APIs for seamless integration.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'GraphQL API Development',
                description: 'Create efficient GraphQL APIs for data fetching.',
            },
        ],
    },
    {
        categoryId: 19,
        categoryName: 'Testing & QA',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Automated Testing',
                description: 'Implement automated testing for your applications.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'Manual Testing',
                description: 'Thorough manual testing to ensure quality and performance.',
            },
        ],
    },
    {
        categoryId: 20,
        categoryName: 'Legacy System Modernization',
        services: [
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'System Migration',
                description: 'Migrate legacy systems to modern platforms.',
            },
            {
                thumbnail: <Smartphone size={40} className="text-indigo-600" />,
                title: 'System Integration',
                description: 'Integrate legacy systems with new technologies.',
            },
        ],
    },
];

// // Group services by category
// const groupedServices = services.reduce((acc, service) => {
//   acc[service.category] = acc[service.category] || [];
//   acc[service.category].push(service);
//   return acc;
// }, {});

const GrowcodeServices = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">Our Services {services.length}</h2>

        {services.map((data, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">{data.categoryName}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowcodeServices;
