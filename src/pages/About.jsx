const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 animate-fade-in">Why Tank Cleaning Matters</h1>
        <p className="text-lg text-gray-700 mb-10 animate-fade-in delay-100">
          Over time, water tanks accumulate sediments, bacteria, and harmful pollutants. Drinking or using this water can affect your health and hygiene. 
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Prevents Waterborne Diseases",
            "Improves Water Quality",
            "Protects Plumbing & Appliances",
          ].map((text, i) => (
            <div key={text} className="p-6 bg-blue-50 rounded-xl shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <h3 className="text-xl font-semibold text-blue-600">{text}</h3>
              <p className="text-gray-600 mt-2">
                {text === "Prevents Waterborne Diseases" &&
                  "Regular cleaning eliminates bacteria like E. coli and salmonella that thrive in stagnant water."}
                {text === "Improves Water Quality" &&
                  "Removes rust, algae, and sediments to ensure safe, odor-free water for all uses."}
                {text === "Protects Plumbing & Appliances" &&
                  "Clean tanks reduce pipe corrosion and extend the life of your geysers and pumps."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
