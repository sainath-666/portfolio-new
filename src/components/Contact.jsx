import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);
    fetch("https://formspree.io/f/xzzgopny", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          form.reset();
          setToastMsg("✅ Message sent successfully!");
          setIsError(false);
        } else {
          setToastMsg("❌ Failed to send message. Please try again.");
          setIsError(true);
        }
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        setToastMsg("❌ Network error. Please try again later.");
        setIsError(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-down">
          📬 Contact Me
        </h2>
        <p className="text-gray-400 mb-12" data-aos="fade-up">
          Fill the form or connect through social platforms.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-xl mx-auto"
          data-aos="fade-up"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            autoComplete="off"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            autoComplete="off"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Message"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center justify-center"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Social Links */}
        <div
          className="flex justify-center gap-8 mt-12 text-4xl text-gray-400"
          data-aos="fade-up"
        >
          <a
            href="https://github.com/sainath-666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sainath666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sai65265@gmail.com"
            aria-label="Email"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://wa.link/oeaxld"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
        {/* Footer */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-medium">Sainath Reddy</span>. All rights reserved.
          </p>
          <p className="mt-1">
            Built with <span className="text-blue-400">React.js</span> & <span className="text-blue-400">Tailwind CSS</span>.
          </p>
        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 ${isError ? "bg-red-600" : "bg-green-600"
            } text-white px-6 py-3 rounded-md shadow-lg animate-fade-in z-50`}
          role="status"
          aria-live="polite"
        >
          {toastMsg}
        </div>
      )}
    </section>
  );
};

export default Contact;
