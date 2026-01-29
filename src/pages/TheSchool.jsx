import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TheSchool = () => {
  const facilities = [
    {
      icon: '📚',
      title: 'Library',
      description:
        'Well-stocked library with thousands of books, digital resources, and quiet study spaces.',
    },
    {
      icon: '🔬',
      title: 'Science Labs',
      description:
        'State-of-the-art laboratories for Physics, Chemistry, and Biology with modern equipment.',
    },
    {
      icon: '💻',
      title: 'Computer Lab',
      description:
        'Fully equipped computer labs with latest technology and high-speed internet connectivity.',
    },
    {
      icon: '🏃',
      title: 'Sports Facilities',
      description:
        'Spacious playgrounds, indoor sports complex, and facilities for various sports activities.',
    },
    {
      icon: '🎨',
      title: 'Arts & Music',
      description:
        'Dedicated spaces for art, music, and performing arts to nurture creative talents.',
    },
    {
      icon: '🍽️',
      title: 'Cafeteria',
      description:
        'Clean and hygienic cafeteria serving nutritious meals and snacks throughout the day.',
    },
  ]

  const programs = [
    {
      title: 'Early Years Program',
      age: 'Ages 3-5',
      description:
        'A nurturing environment that focuses on play-based learning, social skills, and foundational knowledge.',
    },
    {
      title: 'Primary Education',
      age: 'Grades 1-5',
      description:
        'Comprehensive curriculum covering core subjects with emphasis on critical thinking and creativity.',
    },
    {
      title: 'Middle School',
      age: 'Grades 6-8',
      description:
        'Rigorous academic program preparing students for higher education with specialized subjects.',
    },
    {
      title: 'High School',
      age: 'Grades 9-12',
      description:
        'Advanced curriculum with multiple streams and college preparation programs.',
    },
  ]

  const certificates = [
    {
      image: "/images/certificate-1.jpg",
      title: "Building Safety Certificate",
    },
    {
      image: "/images/certificate-2.jpg",
      title: "Fire Safety Certificate",
    },
    {
      image: "/images/certificate-3.jpg",
      title: "List of Certificate",
    },
    {
      image: "/images/certificate-4.jpg",
      title: "List of Parent-Teacher Association",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/gallery/6c3e3dd551b6b26721b711c2b843dbdc9ec8da40.jpg)' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[280px] md:min-h-[320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[1171px] w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              The School
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed mb-8">
            </p>


          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE – Images */}
            <div className="relative flex justify-center lg:justify-start">

              {/* Top Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg w-[280px] md:w-[320px]">
                <img
                  src="/images/inspiration-1.jpg"
                  alt="Experience Advisor"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div className="absolute -left-6 top-6 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2">
                  <span className="text-blue-600 text-lg">🎓</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Experience Advisor
                  </span>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="absolute -bottom-12 left-0 md:left-20 rounded-2xl overflow-hidden shadow-lg w-[260px] md:w-[300px]">
                <img
                  src="/images/inspiration-2.jpg"
                  alt="Quality Video Tutorials"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div className="absolute left-6 bottom-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2">
                  <span className="text-blue-600 text-lg">📹</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Quality Video Tutorials
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – Content */}
            <div className="lg:pl-10">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                  💡
                </span>
              </div>
              <h2
                style={{
                  width: "312px",
                  height: "50px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "50px",
                  letterSpacing: "0.2px",
                  color: "#252B42",
                }}
              >
                Our Inspiration
              </h2>

              <p
                style={{
                  width: "509px",
                  height: "162px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",   // 👈 space between each line
                  letterSpacing: "0.2px",
                  color: "#737373",
                }}
              >
                Our inspiration is rooted in the timeless belief that education has the power
                to transform lives and shape the future of society. We are inspired by the idea
                that true learning goes beyond academic achievement—it builds character,
                nurtures values, and encourages independent thinking.
              </p>

{/* Checklist */}
<ul
  className="space-y-4 font-poppins text-[18px] leading-[40px] text-[#9F9F9F]"
  style={{ width: "401px", letterSpacing: "0.2px" }}
>
  {[
    "Interactive workshops & hands-on projects",
    "National & international competitions",
    "Community service & leadership programs",
    "Technology-driven learning experiences",
  ].map((text, index) => (
    <li key={index} className="flex items-center gap-3">
      
    
      <span className="flex-shrink-0 w-[19px] h-[19px]">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_695_66)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.5 19C4.25413 19 0 14.7459 0 9.5C0 4.25413 4.25413 0 9.5 0C14.7459 0 19 4.25413 19 9.5C19 14.7459 14.7459 19 9.5 19ZM8.19296 11.1716L13.8939 5.47073C14.0911 5.2734 14.415 5.27542 14.6103 5.47073L15.2568 6.11718C15.4521 6.31249 15.4521 6.63841 15.2568 6.83364L8.56122 13.5293C8.44146 13.649 8.27323 13.6962 8.11562 13.6691C8.00775 13.6555 7.9037 13.6082 7.82246 13.527L3.74382 9.44839C3.54889 9.25345 3.54657 8.92918 3.74382 8.73185L4.39027 8.0854C4.5876 7.88814 4.90948 7.88814 5.10681 8.0854L8.19296 11.1716Z"
              fill="#3E3F95"
            />
          </g>
          <defs>
            <clipPath id="clip0_695_66">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>

      <span>{text}</span>
    </li>
  ))}
</ul>

              <a
                href="/about"
                className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90 mt-16"
                style={{
                  width: "160px",
                  height: "48px",
                  borderRadius: "6px",
                  background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
                }}
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

            </div>

          </div>
        </div>
      </section>


      <section className="w-full h-[173px] bg-[#3E3F95] flex items-center justify-center px-4">
  <p className="max-w-3xl text-center text-white text-[18px] leading-7 font-poppins">
    We draw inspiration from visionary educators, engaged parents, and the changing needs of the modern world. 
    By combining traditional values with modern teaching methods, we aim to empower our students with knowledge, 
    integrity, and a lifelong love for learning.
  </p>
</section>


      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
           <h2 className="mb-6 font-poppins font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
  Our Philosophy
</h2>
<p className="text-[18px] text-[#737373] mb-4 leading-[28px] font-poppins">
  Our philosophy is founded on the belief that education  <br /> should nurture the mind, character, and spirit of every  <br /> learner. We believe that true education goes beyond   <br /> academic excellence—it encourages curiosity,   <br /> integrity, creativity, and respect for others.
</p>
<p className="text-[18px] text-[#737373] mb-6 leading-[28px] font-poppins">
  We are committed to creating a learning environment   <br />  where students are inspired to think independently, ask   <br /> meaningful questions, and develop a lifelong love for    <br />learning. By combining strong moral values with   <br /> modern teaching practices, we prepare students to   <br />face real-world challenges with confidence and    <br />responsibility.
</p>

<Link
  to="/about"
  className="inline-flex items-center mt-6 px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
>
  Read More
  <svg
    className="ml-2 w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🏫</div>
                  <p className="text-2xl font-semibold">Modern Campus</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="w-full h-[173px] bg-[#3E3F95] flex items-center justify-center px-4">
  <p className="max-w-3xl text-center text-white text-[18px] leading-7 font-poppins">
  Our approach emphasizes holistic development, ensuring that every child grows intellectually, emotionally, socially, and ethically. Through guidance, discipline, and encouragement, we strive to empower our students to become thoughtful individuals and responsible global citizens.
  </p>
</section>

<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 h-80 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-8xl mb-4">📚</div>
            <p className="text-2xl font-semibold">Holistic Learning</p>
          </div>
        </div>
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        
  <h2 className="font-poppins font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
    About Logo
  </h2>

        <p className="text-[18px] text-[#737373] mb-4 leading-[28px] font-poppins">
        Our school is a place where learning meets values, and education is shaped with purpose. We are committed to providing a safe, supportive, and inspiring environment that encourages students to achieve academic excellence while developing strong moral character.
        </p>

        <p className="text-[18px] text-[#737373] mb-6 leading-[28px] font-poppins">
         With a focus on holistic development, our school nurtures intellectual growth, creativity, discipline, and social responsibility. We believe that every child has unique potential, and our dedicated educators work closely with students to help them discover their strengths and build confidence.
        </p>

        <Link
          to="/about"
          className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90"
          style={{
            width: "199.28px",
            height: "58.95px",
            borderRadius: "4.15px",
            background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
          }}
        >
          Read More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </motion.div>

    </div>
  </div>
</section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              House system
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "0.2px"
            }}>
              Building teamwork, leadership, and school spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center">
            {[
              {
                image: "/images/house-1.jpg",
                description: "The House System is a vital part of school life, created to foster unity, leadership, discipline, and a spirit of healthy competition among students. It provides a structured platform where students from different age groups work together, creating strong bonds and a sense of belonging within the school community."
              },
              {
                image: "/images/house-2.jpg", 
                description: "Through regular inter-house competitions, students learn to handle success with humility and challenges with determination. The House System plays a key role in identifying leadership potential, building confidence, and nurturing well-rounded individuals who contribute positively to the school environment."
              },
              {
                image: "/images/house-3.jpg", 
                description: "Each house represents strong values such as integrity, cooperation, perseverance, and respect. Students participate in various academic, sports, cultural, and co-curricular activities, earning points for their houses through effort, teamwork, and positive conduct."
              },
              {
                image: "/images/house-4.jpg",
                description: "The House System plays a central role in shaping student life and strengthening the spirit of unity within the school. It is designed to encourage teamwork, leadership, discipline, and healthy competition while creating a strong sense of belonging among students."
              }
            ].map((house, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white transition-all duration-300"
                style={{
                  width: "542px",
                  borderRadius: "13px",
                  boxShadow: "0px 0px 24px 0px rgba(176, 176, 176, 0.3)"
                }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden" style={{ width: "542px", height: "296px", borderRadius: "13px 13px 0 0" }}>
                  <img src={house.image} alt={house.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {house.title}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "150%",
                    letterSpacing: "0.2px"
                  }}>
                    {house.description}
                  </p>
                  <button className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90"
                    style={{
                      width: "199.28px",
                      height: "58.95px",
                      borderRadius: "4.15px",
                      background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
                    }}
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "50px",
                letterSpacing: "0.2px",
                color: "#252B42"
              }}>
              Authorized School Certificates
            </h2>
            <p className="text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#9F9F9F"
              }}>
              Backed by trusted certifications and verified audits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{
                  boxShadow: "0px 0px 24px 0px rgba(176, 176, 176, 0.3)"
                }}
              >
                <img src={certificate.image} alt={certificate.title} className="object-cover" style={{
                  width: "263.11px",
                  height: "185.08px"
                }} />
                <div className="p-4 text-center">
                  <h3 className="text-md font-semibold text-gray-800 mt-2"
                    style={{
                      width: "210.18px",
                      height: "23px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "15.55px",
                      lineHeight: "100%",
                      letterSpacing: "0.13px",
                      color: "#3E3F95",
                      textAlign: "center",
                      margin: "0 auto"
                    }}>
                    {certificate.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default TheSchool

