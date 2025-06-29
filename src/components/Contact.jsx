import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formspree.io/f/xzzgopny", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000); // auto dismiss
      } else {
        alert("Something went wrong. Please try again later.");
      }
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📬 Contact Me</h2>
        <p className="text-gray-400 mb-12">
          Fill the form or connect through social platforms.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white resize-none focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-12 text-2xl text-gray-400">
          <a href="mailto:sai65265@gmail.com" className="hover:text-white transition">📧</a>
          <a
            href="https://github.com/sainath-666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sainath666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg animate-fade-in z-50">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
