import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-[#f9fafb]">

      {/* HEADER */}
      <header className="bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 p-5 sticky top-0 z-50 lg:px-24">
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

          <Link to="/courses">
            <button className="bg-red-500 text-white px-4 py-2 text-sm rounded-xl font-semibold hover:bg-red-700">
              Explore Courses
            </button>
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="py-16 text-center bg-[#f3f4f6] px-6">
        <h6 className="bg-red-100 text-red-500 inline-block px-3 py-1 rounded-full text-sm font-semibold">
          GET IN TOUCH
        </h6>
        <h2 className="text-4xl font-bold mt-4">Let's Talk</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Have questions about courses? Want a free 15-min discovery call?
          Fill out the form below or reach me directly.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto">📱</div>
            <h3 className="font-semibold mt-4">WhatsApp</h3>
            <p className="text-gray-500 text-sm mt-2">For quick queries & course info</p>
            <p className="text-red-500 font-semibold mt-3">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto">✉️</div>
            <h3 className="font-semibold mt-4">Email</h3>
            <p className="text-gray-500 text-sm mt-2">Detailed queries & enrollment</p>
            <p className="text-red-500 font-semibold mt-3">mentor@devmentor.in</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-xl mx-auto">📅</div>
            <h3 className="font-semibold mt-4">Discovery Call</h3>
            <p className="text-gray-500 text-sm mt-2">Free 15-min strategy session</p>
            <p className="text-red-500 font-semibold mt-3">Mon–Sat, 9AM–7PM IST</p>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-[#f9fafb] px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Send a Message</h2>
          <p className="text-gray-500 mt-2">I respond to all messages within 24 hours.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
          <div className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name *</label>
                <input type="text" placeholder="Arun"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name *</label>
                <input type="text" placeholder="Kumar"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email *</label>
              <input type="email" placeholder="you@email.com"
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input type="text" placeholder="+91 98765 43210"
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>

            <div>
              <label className="text-sm font-medium">What are you interested in? *</label>
              <select className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400">
                <option>-- Select an option --</option>
                <option>Course Enrollment</option>
                <option>Mentorship</option>
                <option>Project Help</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Your Message *</label>
              <textarea rows="4"
                placeholder="Tell me what you're looking for, your background, or any questions you have..."
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-500">
                I agree to be contacted via WhatsApp/email for course-related updates.
              </p>
            </div>

            <button
              type="button"
              className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              Send Message →
            </button>

          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-20 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto bg-linear-to-r from-red-500 to-purple-600 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

          <div className="text-white">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">FREE SESSION</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Book a Free 15-Min Discovery Call</h2>
            <p className="mt-4 text-white/90">
              Not sure which course is right for you? Let's chat. I'll understand your goals and recommend the
              best path forward — no pressure.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ No obligation</li>
              <li>✔ Personalized recommendation</li>
              <li>✔ Via Google Meet or Phone</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Book Your Slot</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="text" placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="date"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400">
                <option>9:00 AM – 10:00 AM</option>
                <option>10:00 AM – 11:00 AM</option>
                <option>6:00 PM – 7:00 PM</option>
              </select>
              <button
                type="button"
                className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
              >
                Confirm Booking →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT MENTOR */}
      <section className="py-20 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="bg-red-500 text-white w-14 h-14 flex items-center justify-center rounded-xl font-bold text-lg">IP</div>
            <span className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full mt-4 inline-block">YOUR MENTOR</span>
            <h2 className="text-3xl font-bold mt-3">Hi, I'm Ippo!</h2>
            <p className="text-gray-500 mt-4 leading-7">
              I'm a full-stack developer with years of experience building production web applications.
              I started teaching because I wanted to give students the kind of practical, hands-on mentorship
              I wish I had when I was learning.
            </p>
            <p className="text-gray-500 mt-3 leading-7">
              Every course I build is based on what's actually used in the industry — not textbooks.
              My goal is simple: get you job-ready as fast as possible.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 text-sm">
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full">HTML & CSS</span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">React</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">MongoDB</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: "120+", label: "Students Mentored" },
              { stat: "5+", label: "Years Experience" },
              { stat: "8", label: "Courses Created" },
              { stat: "4.9★", label: "Average Rating" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-2xl font-bold text-red-500">{stat}</h3>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-gray-500 mt-3">
          Get notified about new courses, free resources, and coding tips — straight to your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-3 mt-6 max-w-xl mx-auto">
          <input type="text" placeholder="Your name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400" />
          <input type="email" placeholder="your@email.com"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400" />
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
            Subscribe →
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
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

export default Contact;