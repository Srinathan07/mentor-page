import { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: "Do I need prior coding experience?", a: "No. We start from basics and guide you step by step." },
    { q: "Are classes live or recorded?", a: "Courses include both recorded content and optional live sessions." },
    { q: "How long do I have access?", a: "You get lifetime access to all course materials." },
    { q: "Will I get a certificate?", a: "Yes, you will receive a verified certificate after completion." },
    { q: "What payment methods are accepted?", a: "We accept UPI, cards, and net banking." },
  ];

  return (
    <div className="bg-[#f9fafb]">

      {/* HEADER */}
      <header className="bg-white shadow-md p-5 sticky top-0 z-50 lg:px-24">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <h3 className="bg-red-500 text-white p-2 text-sm rounded-xl font-semibold">D</h3>
            <h1 className="text-xl font-bold">DevMentor</h1>
          </div>

          <ul className="hidden md:flex gap-8 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/courses" className="hover:text-red-400">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>

          <Link to="/contact">
            <button className="bg-red-500 text-white px-4 py-2 text-sm rounded-xl font-semibold hover:bg-red-700">
              Book Free Call
            </button>
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="py-16 text-center bg-[#f3f4f6] px-6">
        <h6 className="bg-red-100 text-red-500 inline-block px-3 py-1 rounded-full text-sm font-semibold">
          ALL COURSES
        </h6>
        <h2 className="text-4xl font-bold mt-4">Choose Your Learning Path</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Structured courses from beginner to advanced. Learn at your own pace with lifetime access.
        </p>
      </section>

      {/* FILTER */}
      <section className="py-6 px-6 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeFilter === filter
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="px-6 lg:px-24 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <div className="bg-red-500 h-36 flex items-center justify-center text-white text-4xl">🌐</div>
            <div className="p-6">
              <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">Beginner • 20 Hours</span>
              <h3 className="font-semibold text-lg mt-3">HTML & CSS Mastery</h3>
              <p className="text-gray-500 text-sm mt-2">Build fully responsive websites from scratch using HTML5 & CSS3.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ 20 video lessons</li>
                <li>✔ 5 real projects</li>
                <li>✔ Certificate</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹1,499</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <div className="bg-teal-500 h-36 flex items-center justify-center text-white text-4xl">🎨</div>
            <div className="p-6">
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Beginner • 15 Hours</span>
              <h3 className="font-semibold text-lg mt-3">Tailwind CSS Crash Course</h3>
              <p className="text-gray-500 text-sm mt-2">Build production-ready UI rapidly using Tailwind CSS.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ 15 video lessons</li>
                <li>✔ 3 UI projects</li>
                <li>✔ Certificate</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹999</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <div className="bg-yellow-400 h-36 flex items-center justify-center text-white text-4xl">⚡</div>
            <div className="p-6">
              <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">Intermediate • 30 Hours</span>
              <h3 className="font-semibold text-lg mt-3">JavaScript Essentials</h3>
              <p className="text-gray-500 text-sm mt-2">Master JS concepts, DOM, APIs & async programming.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ 35 video lessons</li>
                <li>✔ 6 mini projects</li>
                <li>✔ Certificate</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹2,499</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <div className="bg-purple-500 h-36 flex items-center justify-center text-white text-4xl">⚛️</div>
            <div className="p-6">
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Advanced • 40 Hours</span>
              <h3 className="font-semibold text-lg mt-3">React.js for Developers</h3>
              <p className="text-gray-500 text-sm mt-2">Learn React hooks, routing & deploy production apps.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ 40 video lessons</li>
                <li>✔ 3 full apps</li>
                <li>✔ Certificate</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹3,499</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <div className="bg-green-600 h-36 flex items-center justify-center text-white text-4xl">🗄️</div>
            <div className="p-6">
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Advanced • 35 Hours</span>
              <h3 className="font-semibold text-lg mt-3">Node.js & Express Backend</h3>
              <p className="text-gray-500 text-sm mt-2">Build REST APIs, authentication & deploy backend apps.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ 38 video lessons</li>
                <li>✔ API projects</li>
                <li>✔ Certificate</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹3,499</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* CARD 6 - Bundle */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-red-500 overflow-hidden">
            <div className="bg-linear-to-r from-red-500 to-purple-500 h-36 flex items-center justify-center text-white text-4xl">🚀</div>
            <div className="p-6">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Full Bundle</span>
              <h3 className="font-semibold text-lg mt-3">Full-Stack Bundle</h3>
              <p className="text-gray-500 text-sm mt-2">All courses + mentorship + placement support.</p>
              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ All courses included</li>
                <li>✔ 1-on-1 mentorship</li>
                <li>✔ Placement support</li>
              </ul>
              <div className="flex justify-between items-center mt-5">
                <span className="font-bold text-lg">₹7,999</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Get Bundle</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#f9fafb] text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-500 mt-3">Simple 4-step process to get started.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 max-w-6xl mx-auto">

          {[
            { step: "1", title: "Choose a Course", desc: "Browse our curriculum and pick the right course for your level." },
            { step: "2", title: "Enroll & Pay", desc: "Complete a simple one-time payment and get access." },
            { step: "3", title: "Start Learning", desc: "Access videos, assignments, and resources instantly." },
            { step: "4", title: "Build & Get Certified", desc: "Complete projects, get feedback, and earn certificate." },
          ].map(({ step, title, desc }) => (
            <div key={step}>
              <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto text-lg font-bold">
                {step}
              </div>
              <h3 className="font-semibold mt-4">{title}</h3>
              <p className="text-gray-500 text-sm mt-2">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ENROLL FORM */}
      <section className="py-20 bg-[#f9fafb] px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Enroll Now</h2>
          <p className="text-gray-500 mt-2">Fill in your details and I'll reach out within 24 hours.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
          <div className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input type="text" placeholder="Your full name"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number *</label>
                <input type="text" placeholder="+91 98765 43210"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email Address *</label>
              <input type="email" placeholder="you@email.com"
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>

            <div>
              <label className="text-sm font-medium">Select Course *</label>
              <select className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400">
                <option>-- Choose a course --</option>
                <option>HTML & CSS Mastery</option>
                <option>JavaScript Essentials</option>
                <option>React + Node Full Stack</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Your Current Skill Level</label>
              <div className="flex gap-4 mt-2 flex-wrap">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <label key={level} className="border px-4 py-2 rounded-lg cursor-pointer hover:border-red-400">
                    <input type="radio" name="level" className="mr-2" />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Why do you want to join? (optional)</label>
              <textarea rows="4" placeholder="Tell me a bit about your goals..."
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>

            <button
              type="button"
              className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              Submit Enrollment →
            </button>

            <p className="text-center text-sm text-gray-400">I'll reach out via WhatsApp or email within 24 hours.</p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f9fafb] px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked</h2>
          <p className="text-gray-500 mt-2">Quick answers to common questions.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{faq.q}</h4>
                <span className="text-red-500 text-xl">{openFAQ === index ? "−" : "+"}</span>
              </div>
              {openFAQ === index && (
                <p className="text-gray-500 mt-3">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">D</div>
            <span className="font-semibold text-white text-lg">DevMentor</span>
          </div>
          <p className="text-sm text-gray-400">© 2025 DevMentor. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/courses" className="hover:text-white">Courses</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Courses;