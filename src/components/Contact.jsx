import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📬 Contact Me</h2>
        <p className="text-gray-400 mb-12">
          Interested in working together or just want to say hi? Fill out the form below or connect with me on social platforms.
        </p> 
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xzzgopny"
          method="POST"
          className="grid gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white resize-none"
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
          <a
            href="mailto:sai65265@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            📧
          </a>
          <a
            href="https://github.com/sainath-666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sainath666"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
