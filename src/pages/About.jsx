import React from 'react';

export default function About() {
  return (
    <section className=" dark:text-white transition-all duration-300 py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10 relative inline-block">
          About GrowCode
          <span className="block h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          GrowCode is an IT services provider dedicated to delivering cutting-edge technology solutions. We focus on creating impactful and efficient solutions that help businesses grow and thrive in the digital age.
        </p>

        {/* About Section */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-between space-y-8 lg:space-y-0">
              <img
                alt="team"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-3"
                src="https://tse3.mm.bing.net/th?id=OIP.EC69GGQS-65NJ8HTXuDDjwHaE7&pid=Api&P=0&h=180"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-6">
                <h1 className="text-gray-900 text-3xl font-semibold leading-tight">Who We Are</h1>
                <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-300">
                  We're a team of creative minds that work hard to achieve our client's goals. We have been offering our innovative technical solutions to businesses of all sizes since 2019, helping them streamline operations and boost profitability.
                  At GrowCode, we leverage the latest technologies, such as artificial intelligence, machine learning, and data analytics, to transform businesses. Our services include software development, web design, mobile app development, cloud computing, cybersecurity, and IT consulting.
                  We've worked with clients across the globe, including Australia, the USA, the UK, Europe, and Canada.
                </p>
                <h2 className="text-sm text-gray-500 mt-10 tracking-widest uppercase font-semibold">
                  Have an idea in mind? Let's make it a reality.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Why Choose Us?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Opinion Research And Analysis",
                  description:
                    "We analyze market patterns to understand preferences and current trends to give you valuable insights.",
                },
                {
                  title: "Transparency And Ease Of Work",
                  description:
                    "Our team ensures transparency and efficiency, working closely with clients on digital platforms.",
                },
                {
                  title: "Negotiation And Power",
                  description:
                    "We focus on planning and executing successful negotiations to ensure long-term business success.",
                },
                {
                  title: "Creative And Innovative Solutions",
                  description:
                    "We turn creative ideas into reality with innovative solutions that help transform businesses.",
                },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-10 h-10 text-indigo-600 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed mt-4 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
