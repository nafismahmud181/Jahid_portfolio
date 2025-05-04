import Image from "next/image";
// import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-lg font-medium text-yellow-400 mb-2 tracking-widest">Welcome</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I am <span className="text-yellow-400">Md Zahid Hasan</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
            I am a tech enthusiast, knowledge seeker, and problem solver. I love building creative solutions with web and software.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Contact Me</a>
            <a href="#portfolio" className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition">View Portfolio</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative max-w-4xl mx-auto mt-[-80px] mb-16 z-30 bg-gray-950/90 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-0 md:gap-12 px-0 md:px-8 py-0 md:py-12 border border-gray-800 backdrop-blur-md overflow-hidden">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-900 p-8 md:p-0">
          <Image
            src="/images/profile.jpg"
            alt="Md Zahid Hasan"
            width={320}
            height={320}
            className="object-cover rounded-2xl shadow-lg w-64 h-64 md:w-80 md:h-80"
            priority
          />
        </div>
        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2 tracking-widest">ABOUT ME</h3>
          <h2 className="text-3xl font-bold mb-1">Hi There! I&apos;m Md Zahid Hasan</h2>
          <p className="text-yellow-300 font-medium mb-2">Trainer &amp; Web Developer</p>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            I am a passionate web developer and trainer, skilled in C, C++, Java, HTML, CSS, PHP, WordPress, and MySQL. I love building creative solutions and sharing knowledge. Currently working as a trainer at Arena Phone BD Ltd.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-400 text-sm mb-6">
            <div><span className="font-semibold text-gray-200">Birthday:</span> 13 June, 1998</div>
            <div><span className="font-semibold text-gray-200">Phone:</span> +8801740444059</div>
            <div><span className="font-semibold text-gray-200">Email:</span> jahidhasan110410@gmail.com</div>
            <div><span className="font-semibold text-gray-200">From:</span> Rajshahi, Bangladesh</div>
            <div><span className="font-semibold text-gray-200">Language:</span> English, Bengali</div>
            <div><span className="font-semibold text-gray-200">Freelance:</span> Available</div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a href="/Jahid (1).pdf" download className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Download CV</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-5xl mx-auto mb-16 px-4">
        <h3 className="text-yellow-400 text-lg font-semibold mb-2 text-center">SERVICES</h3>
        <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#128187;</span>
            <h4 className="font-semibold text-lg mb-2">Programming</h4>
            <p className="text-gray-400 text-center">C, C++, Java, and more for robust software solutions.</p>
          </div>
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#128187;</span>
            <h4 className="font-semibold text-lg mb-2">Web Design</h4>
            <p className="text-gray-400 text-center">Modern, responsive websites using HTML, CSS, PHP, and WordPress.</p>
          </div>
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#128295;</span>
            <h4 className="font-semibold text-lg mb-2">Training</h4>
            <p className="text-gray-400 text-center">Sharing knowledge and mentoring in programming and web development.</p>
          </div>
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#128202;</span>
            <h4 className="font-semibold text-lg mb-2">Database Management</h4>
            <p className="text-gray-400 text-center">Efficient data solutions with MySQL and database management skills.</p>
          </div>
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#128187;</span>
            <h4 className="font-semibold text-lg mb-2">App Design</h4>
            <p className="text-gray-400 text-center">Designing user-friendly and visually appealing applications.</p>
          </div>
          <div className="bg-gray-950/90 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md">
            <span className="text-yellow-400 text-3xl mb-4">&#127912;</span>
            <h4 className="font-semibold text-lg mb-2">Motion Graphics</h4>
            <p className="text-gray-400 text-center">Creating engaging motion graphics for digital content.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto mb-16 px-4">
        <h3 className="text-yellow-400 text-lg font-semibold mb-2 text-center">MY SKILLS</h3>
        <h2 className="text-3xl font-bold mb-8 text-center">All the skills that I have in that field of work are mentioned.</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">C/C++</span>
              <span className="text-yellow-400 font-semibold">90%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">Java</span>
              <span className="text-yellow-400 font-semibold">80%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">HTML/CSS</span>
              <span className="text-yellow-400 font-semibold">95%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">PHP</span>
              <span className="text-yellow-400 font-semibold">85%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">WordPress</span>
              <span className="text-yellow-400 font-semibold">80%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-200 font-medium">MySQL</span>
              <span className="text-yellow-400 font-semibold">85%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
              <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto mb-32 px-4">
        <h3 className="text-yellow-400 text-lg font-semibold mb-2 text-center">CONTACT</h3>
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="bg-gray-950/90 border border-gray-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="text-gray-300"><span className="font-semibold text-gray-200">Email:</span> jahidhasan110410@gmail.com</div>
            <div className="text-gray-300"><span className="font-semibold text-gray-200">Phone:</span> +8801740444059</div>
            <div className="text-gray-300"><span className="font-semibold text-gray-200">Location:</span> Rajshahi, Bangladesh</div>
          </div>
          <form className="flex-1 space-y-4 w-full max-w-md">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400" />
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

      </div> */}
    </div>
  );
}
