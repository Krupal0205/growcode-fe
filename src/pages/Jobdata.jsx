import React from "react";

const jobData = [
  {
    title: "React.js Developer",
    exp: "2",
    positions: "1",
    icon: "https://img.icons8.com/ios/50/000000/react-native.png",
  },
  {
    title: "UI/UX Designer",
    exp: "2.5",
    positions: "3",
    icon: "https://img.icons8.com/ios/50/000000/ux.png",
  },
  {
    title: "Node.js Developer",
    exp: "1",
    positions: "3",
    icon: "https://img.icons8.com/ios/50/000000/nodejs.png",
  },
  {
    title: "Flutter Developer",
    exp: "1.5",
    positions: "1",
    icon: "https://img.icons8.com/ios/50/000000/flutter.png",
  },
  {
    title: "Next.js Developer",
    exp: "1",
    positions: "1",
    icon: "https://img.icons8.com/ios/50/000000/next.js.png",
  },
  {
    title: "Android Developer",
    exp: "2",
    positions: "1",
    icon: "https://img.icons8.com/ios/50/000000/android.png",
  },
];

const CareerGrid = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {jobData.map((job, idx) => (
          <div
            key={idx}
            className="border border-blue-300 rounded-lg p-8 w-96 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out relative text-center transform hover:scale-105"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={job.icon}
                alt={job.title}
                className="w-20 h-20 object-contain border-4 border-blue-300 p-3 bg-white rounded-full"
              />
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Exp: {job.exp} Years | Positions: {job.positions}
              </p>
              <button className="mt-4 inline-flex items-center gap-2 text-black hover:text-blue-600 font-medium transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerGrid;
