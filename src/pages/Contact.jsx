const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 animate-fade-in">Get in Touch</h2>
        <p className="text-gray-700 mb-10 animate-fade-in delay-100">
          Have questions or want to schedule a cleaning? We’re here to help.
        </p>
        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4 animate-fade-in delay-200">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
