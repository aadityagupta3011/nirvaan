const Services = () => {
  const services = [
    { title: "Residential Tank Cleaning", desc: "Hygienic cleaning for underground & overhead water tanks in homes and societies." },
    { title: "Commercial Tank Cleaning", desc: "Efficient and timely service for offices, schools, hospitals, and hotels." },
    { title: "Industrial Tank Cleaning", desc: "Heavy-duty cleaning with certified equipment for factories and plants." },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-white to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-10 animate-fade-in">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
