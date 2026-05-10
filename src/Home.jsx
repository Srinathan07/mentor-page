import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-linear-to-r from-[#fdecec] to-[#f9fafb]">

      {/* HEADER */}
      <header className="bg-white shadow-md p-5 sticky top-0 z-50 lg:px-24">
        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <h3 className="bg-red-500 text-white max-w-6xl p-2 text-sm rounded-xl flex justify-center font-semibold">
              D
            </h3>
            <h1 className="text-xl font-bold">DevMentor</h1>
          </div>

          <ul className="hidden md:flex gap-8 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/courses" className="hover:text-red-400">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>

          <Link to="/courses">
            <button className="bg-red-500 text-white px-4 p-2 text-sm rounded-xl font-semibold hover:bg-red-700">
              Explore Courses
            </button>
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="mt-10 ml-5 mr-5 mb-20 lg:px-41 lg:flex lg:gap-20 max-w-8xl mx-auto">

        <div>
          <h6 className="text-sm bg-red-100 text-red-700 rounded-lg w-44 text-center p-1 font-semibold">
            Full Stack Mentorship
          </h6>
          <h2 className="text-5xl font-extrabold mt-4 leading-16">
            Learn to Code.
          </h2>
          <span className="text-5xl font-semibold mt-4 leading-16 text-red-600">
            Build Real Projects.
          </span>
          <p className="text-md text-gray-400 mt-4 leading-7">
            Hands-on courses in HTML, CSS, JavaScript, and modern <br />frameworks —
            taught by a <br />working developer who mentors <br />you step by step.
          </p>
          <div className="lg:flex md:flex xl:flex gap-2">
            <div>
              <Link to="/courses">
                <button className="bg-red-500 w-45 text-white font-semibold p-3 rounded-md mt-8 hover:bg-red-700">
                  View Courses →
                </button>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <button
                  type="button"
                  className="w-40 text-gray-700 font-semibold p-3 rounded-md border border-gray-400 mt-4 hover:border-red-400 hover:text-red-500 cursor-pointer md:mt-8 lg:mt-8"
                >
                  Book Free Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-xl p-6 mt-20">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                IP
              </div>
              <div className="ml-3">
                <h5 className="font-semibold">Ippo — Your Mentor</h5>
                <p className="text-sm text-gray-400">Full-Stack Developer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">🧑‍💻 HTML & CSS Fundamentals</div>
              <div className="bg-gray-100 p-3 rounded-lg">⚡ JavaScript + React</div>
              <div className="bg-gray-100 p-3 rounded-lg">🗄️ Node.js & Databases</div>
              <div className="bg-red-500 text-white p-3 rounded-lg">🚀 Live Projects & Portfolio</div>
            </div>
          </div>
        </div>

      </section>

      {/* STATS */}
      <section className="bg-white py-16 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-red-500">120+</h2>
            <p className="text-gray-600 mt-2 text-sm">Students Mentored</p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-red-500">8</h2>
            <p className="text-gray-600 mt-2 text-sm">Live Courses</p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-red-500">95%</h2>
            <p className="text-gray-600 mt-2 text-sm">Completion Rate</p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-red-500">4.9★</h2>
            <p className="text-gray-600 mt-2 text-sm">Average Rating</p>
          </div>
        </div>
      </section>

      {/* WHY LEARN WITH ME */}
      <section className="pt-28 px-6 lg:px-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Learn With Me?</h2>
            <p className="text-gray-500 mt-3">Real mentorship, not just videos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-500">🎯</div>
              <h3 className="font-semibold text-lg mt-4">Project-Based Learning</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Every concept is taught through real projects you can add to your portfolio immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-500">💬</div>
              <h3 className="font-semibold text-lg mt-4">1-on-1 Doubt Sessions</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Stuck? Book a live session with me directly. No waiting in long forum queues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-500">📋</div>
              <h3 className="font-semibold text-lg mt-4">Code Reviews</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Submit your assignments and get detailed feedback on your code quality and structure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">⚡</div>
              <h3 className="font-semibold text-lg mt-4">Modern Tech Stack</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Learn tools that are actually used in the industry — React, Node.js, Tailwind, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-100 text-pink-500">📅</div>
              <h3 className="font-semibold text-lg mt-4">Flexible Schedule</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Learn at your own pace with lifetime access to all course materials and recordings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500">🏆</div>
              <h3 className="font-semibold text-lg mt-4">Certificate of Completion</h3>
              <p className="text-gray-500 mt-2 text-sm leading-6">
                Earn a verifiable certificate after completing each course to strengthen your resume.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="py-20 px-6 lg:px-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Popular Courses</h2>
              <p className="text-gray-500 mt-2">Hand-picked paths to get job-ready fast.</p>
            </div>
            <Link to="/courses" className="text-red-500 font-semibold hidden sm:block">View All →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="bg-linear-to-r from-red-500 to-red-400 h-32 flex items-center justify-center text-3xl text-white">🌐</div>
              <div className="p-6">
                <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full font-semibold">Beginner</span>
                <h3 className="font-semibold text-lg mt-3">HTML & CSS Mastery</h3>
                <p className="text-gray-500 text-sm mt-2">Build beautiful, responsive websites using modern HTML5 and CSS3.</p>
                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold text-lg">₹1,499</span>
                  <Link to="/courses">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="bg-linear-to-r from-yellow-400 to-orange-400 h-32 flex items-center justify-center text-3xl text-white">⚡</div>
              <div className="p-6">
                <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-semibold">Intermediate</span>
                <h3 className="font-semibold text-lg mt-3">JavaScript Essentials</h3>
                <p className="text-gray-500 text-sm mt-2">Master core JS concepts, DOM manipulation, ES6+, and async programming.</p>
                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold text-lg">₹2,499</span>
                  <Link to="/courses">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="bg-linear-to-r from-purple-500 to-indigo-500 h-32 flex items-center justify-center text-3xl text-white">⚛️</div>
              <div className="p-6">
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-semibold">Advanced</span>
                <h3 className="font-semibold text-lg mt-3">React + Node Full Stack</h3>
                <p className="text-gray-500 text-sm mt-2">Build and deploy complete full-stack apps with React and Node.js.</p>
                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold text-lg">₹4,999</span>
                  <Link to="/courses">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">Enroll</button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 lg:px-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Students Say</h2>
          <p className="text-gray-500 mt-3">Real results from real learners.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-600 mt-4 text-sm leading-6">
                "The HTML & CSS course changed everything for me. Ippo explains things in a very practical way. I built my first portfolio in just 3 weeks!"
              </p>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold">AK</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">Arun Kumar</h4>
                  <p className="text-gray-400 text-xs">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-600 mt-4 text-sm leading-6">
                "1-on-1 doubt sessions are the best feature. I had many JavaScript questions and he answered each one with patience and real examples."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-500 font-bold">PM</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">Priya M</h4>
                  <p className="text-gray-400 text-xs">CS Student, Chennai</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="text-gray-600 mt-4 text-sm leading-6">
                "Got placed in a startup after completing the Full Stack course. The live project approach made my resume stand out in interviews."
              </p>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 font-bold">VR</div>
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">Vignesh R</h4>
                  <p className="text-gray-400 text-xs">Placed — Software Engineer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-800 text-white py-20 px-6 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Dev Journey?</h2>
          <p className="mt-4 text-white/90">
            Join 120+ students who have built real skills, real projects, and real careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/courses">
              <button className="bg-white text-red-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
                Browse All Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-red-900 cursor-pointer transition">
                Contact Mentor
              </button>
            </Link>
          </div>
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

export default Home;