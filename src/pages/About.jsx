import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ABOUT_TABS = [
  'About Us',
  'From Founder',
  'From President',
  'Trustees',
  'Principals Desk',
  'Advisors',
  'Academic Team',
  'Administrative staff',
]

const About = () => {
  const [activeTab, setActiveTab] = useState('About Us')
  const stats = [
    { number: '500+', label: 'Students' },
    { number: '50+', label: 'Teachers' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, setting high standards for our students and ourselves.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description:
        'We maintain the highest ethical standards and promote honesty, respect, and responsibility.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description:
        'We embrace new ideas and technologies to enhance learning and prepare students for the future.',
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description:
        'We care deeply about our students and create a supportive, inclusive environment for all.',
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section - background image with dark overlay, centered content */}
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
              About Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed mb-8">
              Knowledge is power and education is the premise of progress, in every society, in every family. LPS School, being one of the pillars of education is dedicated to instill quality education with unprecedented encouragement in students.
            </p>
            <Link
              to="#mission"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 font-semibold text-white rounded-[3px] transition-all hover:opacity-95"
              style={{ background: 'linear-gradient(90deg, #00C3FF 0%, #333493 100%)' }}
            >
              Read More
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sub-nav + About content section */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pill tabs — match screenshot: active #3E3F95 white bold, inactive white + light grey text + subtle border */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
            {ABOUT_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[#3E3F95] text-white font-bold opacity-100'
                    : 'bg-white text-[#B0B0B0] border border-[#E0E0E0] hover:border-[#D0D0D0] hover:text-[#909090]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Two-column: left ~40% images + 25+ card, right ~60% About Us content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left: big image left, small image right, 25+ card */}
            <div className="lg:col-span-2 relative min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
              <div className="relative flex gap-3 md:gap-4">
                {/* Big image — left, 253×428 (10px smaller), radius 30px */}
                <div className="flex-shrink-0 w-[55%] max-w-[220px] md:max-w-[280px] lg:absolute lg:flex-none lg:w-[253px] lg:h-[428px] lg:max-w-none lg:top-0 lg:left-0">
                  <img
                    src="/gallery/ab847fa8039547b189052d898aa7f5e128bc235d.png"
                    alt="Students"
                    className="w-full h-auto rounded-[30px] object-cover aspect-[3/4] object-top lg:w-[253px] lg:h-[428px] lg:aspect-auto lg:object-cover"
                  />
                </div>
                {/* Small image — right, 255×308 (10px smaller), gap from first */}
                <div className="flex-shrink-0 w-[45%] max-w-[180px] md:max-w-[220px] mt-6 md:mt-10 relative lg:absolute lg:mt-0 lg:top-0 lg:left-[268px] lg:w-[255px] lg:h-[308px] lg:max-w-none">
                  <img
                    src="/gallery/417a8a3b4ce57df965081f942599f9b71f0277ab.png"
                    alt="Students on campus"
                    className="w-full h-auto rounded-[30px] object-cover aspect-[4/3] object-top lg:w-[255px] lg:h-[308px] lg:aspect-auto lg:object-cover"
                  />
                </div>
              </div>
              {/* 25+ card — in empty white space, little more right */}
              <div
                className="absolute bg-black rounded-2xl px-5 py-3.5 md:px-6 md:py-4 flex items-center gap-3 min-w-[200px] md:min-w-[230px] shadow-lg z-10 top-[220px] right-0 md:top-[280px] md:right-0 lg:top-[324px] lg:-right-10 lg:left-auto lg:translate-x-0"
                style={{ borderRadius: '18px' }}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">25+</span>
                <span className="w-px h-10 md:h-12 bg-white/80 flex-shrink-0" aria-hidden />
                <span className="text-white text-xs md:text-sm font-medium leading-tight">
                  Years of<br />Experience
                </span>
              </div>
            </div>

            {/* Right: About Us + Read More — layout: width 1172px, height 478px, top 637px, left 133px */}
            <div className="lg:col-span-3 lg:min-h-[478px] max-w-[100%] lg:max-w-[1172px] lg:ml-[133px]">
              <svg className="w-12 h-12 mb-4 text-[#434287]" viewBox="0 0 32 32" fill="none" aria-hidden>
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="4" fill="currentColor" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#3E3F95' }}>About Us</h2>
              <p className="leading-relaxed mb-4 text-left" style={{ color: '#9F9F9F' }}>
                We aim to become an educational hub of excellence <br />and quality where wisdom, values, creativity and  <br /> leadership traits are encouraged in such a way that  <br /> can make a student ready for life.
              </p>
              <p className="leading-relaxed mb-6 text-left" style={{ color: '#9F9F9F' }}>
                We aim to become an educational hub of excellence  <br /> and quality where wisdom, values, creativity and   <br />leadership traits are encouraged.
              </p>
              <Link
                to="#mission"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white rounded-[3px] transition-all hover:opacity-95 min-w-[160px]"
                style={{ background: 'linear-gradient(90deg, #00C3FF 0%, #333493 100%)' }}
              >
                Read More
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics strip — full-width #3E3F95, 4 cols: Our Teachers, Our Students, Video Lessons, Online Courses */}
      <section className="py-6 md:py-8 bg-[#3E3F95]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Our Teachers — 1090+ */}
            <div className="flex items-center gap-4 pr-4 border-r border-white/20">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-white" aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">1090+</div>
                <div className="text-xs md:text-sm text-white opacity-90">Our Teachers</div>
              </div>
            </div>
            {/* Our Students — 120+ */}
            <div className="flex items-center gap-4 pr-4 border-r border-white/20">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-white" aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">120+</div>
                <div className="text-xs md:text-sm text-white opacity-90">Our Students</div>
              </div>
            </div>
            {/* Total Video Lessons — 1090+ */}
            <div className="flex items-center gap-4 pr-4 border-r border-white/20">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-white" aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="m10 9 6 3-6 3V9z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">1090+</div>
                <div className="text-xs md:text-sm text-white opacity-90">Total Video Lessons</div>
              </div>
            </div>
            {/* Our Online Courses — 1090+ */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-white" aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">1090+</div>
                <div className="text-xs md:text-sm text-white opacity-90">Our Online Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — light grey bg, subtitle + title, 3 cards: Mission, Vision, Approach */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p
              className="mb-2 text-center"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '50px',
                letterSpacing: '0.2px',
                color: '#252B42',
              }}
            >
              Why Choose Us
            </p>
            <h2
              className="max-w-3xl mx-auto text-center text-gray-900"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '50px',
                letterSpacing: '0.2px',
              }}
            >
              Unlock Your Potential with Our <br />Expert Leb Course collection Today
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-[20px]">
            {/* Our Mission — card, 20px gap, radius 30px, white, shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[320px] md:min-w-[320px] md:max-w-[320px] bg-white rounded-[30px] min-h-[260px] p-5 md:p-6 text-center flex flex-col items-center justify-center"
              style={{ boxShadow: '0 12.98px 18.97px rgba(0, 0, 0, 0.07)' }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-3" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#3E3F95' }}></h3>
              <p className="text-sm text-[#9F9F9F] leading-relaxed">
                We want our students to care for <br /> others and treat everyone with due  <br /> respect.
              </p>
            </motion.div>
            {/* Our Vision — card, 20px gap, radius 30px, white, shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-[320px] md:min-w-[320px] md:max-w-[320px] bg-white rounded-[30px] min-h-[260px] p-5 md:p-6 text-center flex flex-col items-center justify-center"
              style={{ boxShadow: '0 12.98px 18.97px rgba(0, 0, 0, 0.07)' }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-3" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 19V9l2 2 2-2v9M11 19V9l2 2 2-2v9M17 19V9l2 2 2-2v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#3E3F95' }}>Our Vision</h3>
              <p className="text-sm text-[#9F9F9F] leading-relaxed">
                We aim to become an educational<br /> hub of excellence and quality <br /> where wisdom.
              </p>
            </motion.div>
            {/* Our Approach — card, 20px gap, radius 30px, white, shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-[320px] md:min-w-[320px] md:max-w-[320px] bg-white rounded-[30px] min-h-[260px] p-5 md:p-6 text-center flex flex-col items-center justify-center"
              style={{ boxShadow: '0 12.98px 18.97px rgba(0, 0, 0, 0.07)' }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-3" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M9 21h6M12 3a6 6 0 0 1 4 10.5V18H8v-4.5A6 6 0 0 1 12 3z" />
                  <circle cx="12" cy="10" r="2.5" />
                  <circle cx="12" cy="10" r="4" />
                  <path d="M12 6.5v1M12 13.5v1M9.5 10h1M13.5 10h1M10.2 7.8l.7.7M13.1 10.7l.7.7M10.2 12.2l.7-.7M13.1 9.3l.7-.7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1.5" style={{ color: '#3E3F95' }}>Our Approach</h3>
              <p className="text-sm text-[#9F9F9F] leading-relaxed">
                At our school, we believe that every <br /> child is unique and has the <br />potential to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From Founder — two-column: left text, right profile card */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left — From Founder text, closer to image */}
            <div className="text-left lg:max-w-[520px] lg:justify-self-end">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">From Founder</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                We're extremely elated that you have chosen our school for your<br /> children's future. As we rightly believe the main purpose of our <br /> institution is not limited to bookish knowledge but also adding <br /> good values such as compassion, integrity, truthfulness, wisdom <br /> and excellence.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                At LBS Group of Education, we support holistic development of <br /> your child which immensely covers academics, life-skills, sports <br /> education and not to mention scores of co-curricular activities. <br /> Our constant aim is to maintain the quality in education in our <br /> state-of-the-art institution. In fact, we ourselves have evolved <br /> over the years by learning and experimenting in more than many <br /> ways only to bring unique approach in providing education<br /> with a difference.
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
            </div>
            {/* Right — profile card: 518×512px, radius 30px per design */}
            <div className="w-full max-w-[518px] h-[512px] rounded-[30px] overflow-hidden shadow-lg mx-auto lg:mx-0 flex flex-col">
              <div className="relative flex-1 min-h-0 bg-gray-200">
                <img
                  src="/gallery/b2e423b5dd90c153d6c2fd93fb1e22e42169f6a3.png"
                  alt="Shailesh Bhai Savani, Chairman"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="bg-[#3E3F95] px-6 py-5 rounded-b-[30px] text-left flex-shrink-0 min-h-[112px] flex flex-col justify-center"
                style={{ minWidth: '100%' }}
              >
                <p
                  className="text-white uppercase"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                  Shailesh Bhai Savani
                </p>
                <p
                  className="text-white uppercase mt-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                  Chairman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From President — two-column: left profile card, right text (mirrored layout) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left — profile card: 518×512px, radius 30px */}
            <div className="w-full max-w-[518px] h-[512px] rounded-[30px] overflow-hidden shadow-lg mx-auto lg:mx-0 flex flex-col order-2 lg:order-1">
              <div className="relative flex-1 min-h-0 bg-gray-200">
                <img
                  src="/gallery/67e9ff829b918ec4cac0b4fd5689f133e2a4e6f2.jpg"
                  alt="From President"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="bg-[#3E3F95] px-6 py-5 rounded-b-[30px] text-left flex-shrink-0 min-h-[112px] flex flex-col justify-center"
                style={{ minWidth: '100%' }}
              >
                <p
                  className="text-white uppercase"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                 SHAILESH BHAI SAVANI
                </p>
                <p
                  className="text-white uppercase mt-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                  President
                </p>
              </div>
            </div>
            {/* Right — text, closer to image */}
            <div className="text-left lg:max-w-[520px] lg:justify-self-start order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">From President</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Welcome to our organization. It is my privilege to serve as President and to work alongside a dedicated team committed to excellence, integrity, and continuous growth.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Our journey is guided by a clear vision—to create meaningful impact through innovation, collaboration, and responsibility.
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
            </div>
          </div>
        </div>
      </section>

      {/* From Trustee / one more — paragraph left, image right (same as From Founder) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left — paragraph */}
            <div className="text-left lg:max-w-[520px] lg:justify-self-end">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Trustees</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                The Board of Trustees provides strategic guidance and oversight to ensure the organization's mission, vision, and values are upheld. With diverse experience and a strong commitment to ethical leadership, the Trustees play a vital role in shaping long-term goals and policies.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Their collective wisdom, dedication, and responsibility help strengthen governance, promote transparency, and support sustainable growth.
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
            </div>
            {/* Right — profile card: 518×512px, radius 30px */}
            <div className="w-full max-w-[518px] h-[512px] rounded-[30px] overflow-hidden shadow-lg mx-auto lg:mx-0 flex flex-col">
              <div className="relative flex-1 min-h-0 bg-gray-200">
                <img
                  src="/gallery/8fd26a07fee815dfedd9961efe54556f4c61cd4b.jpg"
                  alt="Trustees"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="bg-[#3E3F95] px-6 py-5 rounded-b-[30px] text-left flex-shrink-0 min-h-[112px] flex flex-col justify-center"
                style={{ minWidth: '100%' }}
              >
                <p
                  className="text-white uppercase"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                SHAILESH BHAI SAVANI
                </p>
                <p
                  className="text-white uppercase mt-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '36.82px',
                    lineHeight: '57.85px',
                    letterSpacing: '0.41px',
                  }}
                >
                  Trustee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Principal — image left, paragraph right */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left — profile card */}
            <div className="w-full max-w-[518px] h-[512px] rounded-[30px] overflow-hidden shadow-lg mx-auto lg:mx-0 flex flex-col order-2 lg:order-1">
              <div className="relative flex-1 min-h-0 bg-gray-200">
                <img src="/gallery/417a8a3b4ce57df965081f942599f9b71f0277ab.png" alt="From Principal" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              <div className="bg-[#3E3F95] px-6 py-5 rounded-b-[30px] text-left flex-shrink-0 min-h-[112px] flex flex-col justify-center" style={{ minWidth: '100%' }}>
                <p className="text-white uppercase" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '36.82px', lineHeight: '57.85px', letterSpacing: '0.41px' }}>SHAILESH BHAI SHAVANI</p>
                <p className="text-white uppercase mt-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '36.82px', lineHeight: '57.85px', letterSpacing: '0.41px' }}>Principal</p>
              </div>
            </div>
            {/* Right — paragraph */}
            <div className="text-left lg:max-w-[520px] lg:justify-self-start order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Principals Desk</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
              Welcome to our institution. It is a matter of great pride and responsibility to serve as the Principal of an organization committed to academic excellence and overall development. We focus on creating a positive learning environment where students are encouraged to think critically, act responsibly, and grow with confidence.

Our aim is to provide quality education while nurturing values such as discipline, respect, and integrity. With the dedicated efforts of our staff and the support of parents, we strive to prepare students to meet future challenges and become responsible citizens.               </p>
              <p className="text-base text-gray-500 leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      {/* From Advisor — paragraph left, image right */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="text-left lg:max-w-[520px] lg:justify-self-end">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-4" style={{ color: '#3E3F95' }} aria-hidden>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M18 6 12 12l-3-3" />
                  <path d="M12 12v6h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">From Advisor</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
              Welcome to our organization. It is my privilege to serve as President and to work alongside a dedicated team committed to excellence, integrity, and continuous growth. Our journey is guided by a clear vision—to create meaningful impact through innovation, collaboration, and responsibility.              </p>
              <p className="text-base text-gray-500 leading-relaxed">
              Welcome to our organization. It is my privilege to serve as President and to work alongside a dedicated .              </p>
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
            </div>
            <div className="w-full max-w-[518px] h-[512px] rounded-[30px] overflow-hidden shadow-lg mx-auto lg:mx-0 flex flex-col">
              <div className="relative flex-1 min-h-0 bg-gray-200">
                <img src="/gallery/713d3d8b7f0b0a674e3141c8b282d8af8fc11f03.jpg" alt="From Advisor" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              <div className="bg-[#3E3F95] px-6 py-5 rounded-b-[30px] text-left flex-shrink-0 min-h-[112px] flex flex-col justify-center" style={{ minWidth: '100%' }}>
                <p className="text-white uppercase" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '36.82px', lineHeight: '57.85px', letterSpacing: '0.41px' }}>SHAILESH BHAI SAVAN</p>
                <p className="text-white uppercase mt-0" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '36.82px', lineHeight: '57.85px', letterSpacing: '0.41px' }}>Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8FAFF]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10">
      <div>
        {
        <p
  className="mb-2"
  style={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "50px",
    letterSpacing: "0.2px",
    color: "#252B42",
  }}
>
  Academic Team
</p>}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-xl">
          Meet Our Expert and <br /> Passionate Teaching Faculty
        </h2>
      </div>
      {
      <a
  href="/faculty"
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
</a>
}
    </div>

    {/* Faculty Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { name: "Shaileshbhai Savani", exp: "5 year" },
        { name: "Chaitali Vagnani", exp: "5 year" },
        { name: "Shaileshbhai Savani", exp: "5 year" },
        { name: "Chaitali Vagnani", exp: "5 year" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 text-center"
        >
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-4">
            <img
              src="/faculty/user.png"   // replace with your image path
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-base font-semibold text-gray-900">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500">
            Experience: {item.exp}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="py-16 md:py-24 bg-[#F8FAFF]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10">
      <div>
        {
        <p
  className="mb-2"
  style={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "50px",
    letterSpacing: "0.2px",
    color: "#252B42",
  }}
>
Administrative staff
</p>}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-xl">
          Meet Our Expert and <br /> Passionate Teaching Faculty
        </h2>
      </div>
      {
      <a
  href="/faculty"
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
</a>
}
    </div>

    {/* Faculty Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { name: "Shaileshbhai Savani", exp: "5 year" },
        { name: "Chaitali Vagnani", exp: "5 year" },
        { name: "Shaileshbhai Savani", exp: "5 year" },
        { name: "Chaitali Vagnani", exp: "5 year" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 text-center"
        >
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-4">
            <img
              src="/faculty/user.png"   // replace with your image path
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-base font-semibold text-gray-900">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500">
            Experience: {item.exp}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>




     
    </div>
  )
}

export default About

