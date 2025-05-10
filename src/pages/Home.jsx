import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bgImage.png')" }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Keep Your Water Safe & Clean</h1>
          <p className="text-xl md:text-2xl mb-6">Nirvaan Tank Cleaning Services</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Is Tank Cleaning Important?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Health & Safety",
              desc: "Dirty water tanks can breed bacteria, leading to serious health issues.",
              img: "/images/health.jpg"
            },
            {
              title: "Taste & Odor",
              desc: "Clean tanks ensure fresh, odor-free water for all household uses.",
              img: "/images/odor.jpg"
            },
            {
              title: "Prevent Damage",
              desc: "Regular cleaning prevents corrosion and costly structural damage.",
              img: "/images/prevent.jpg"
            }
          ].map((item, i) => (
            <div key={i} className="shadow-lg p-6 rounded-lg hover:shadow-xl transition bg-white">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facts & Figures Section */}
      <section className="bg-blue-50 py-16 px-4" ref={ref}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Some Eye-Opening Stats</h2>
          <div className="grid md:grid-cols-4 gap-8 text-blue-700">
            {[
              { label: "Happy Clients", value: 1500 },
              { label: "Tanks Cleaned", value: 3200 },
              { label: "Years of Experience", value: 10 },
              { label: "Cities Covered", value: 25 },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow-md">
                <h3 className="text-4xl font-bold">
                  {inView && <CountUp end={stat.value} duration={2} />}
                  +
                </h3>
                <p className="mt-2 text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Cleaning Process</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Inspection",
            "Draining & Sludge Removal",
            "Pressure Cleaning",
            "UV Disinfection"
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 border rounded shadow hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">Step {idx + 1}</div>
              <p className="font-semibold text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Before & After Cleaning</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/images/tank${i}.jpg`}
              alt={`Tank ${i}`}
              className="rounded-lg shadow hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready To Clean Your Tank?</h2>
        <p className="text-lg mb-6">Get in touch with us now to schedule your tank cleaning.</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
