import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Academics = () => {
  const subjects = [
    {
      icon: '📐',
      title: 'Mathematics',
      description:
        'Comprehensive math curriculum from basic arithmetic to advanced calculus and statistics.',
    },
    {
      icon: '🔬',
      title: 'Sciences',
      description:
        'Physics, Chemistry, and Biology with hands-on laboratory experiences and experiments.',
    },
    {
      icon: '🌍',
      title: 'Social Studies',
      description:
        'History, Geography, Civics, and Economics to understand the world around us.',
    },
    {
      icon: '📖',
      title: 'Languages',
      description:
        'English, Hindi, and other languages with focus on communication and literature.',
    },
    {
      icon: '💻',
      title: 'Computer Science',
      description:
        'Programming, digital literacy, and technology skills for the modern world.',
    },
    {
      icon: '🎨',
      title: 'Arts & Design',
      description:
        'Visual arts, music, drama, and creative expression to nurture artistic talents.',
    },
  ]

  const academicLevels = [
    {
      level: 'Elementary',
      grades: 'Grades 1-5',
      focus: 'Foundation Building',
      description:
        'Building strong foundations in core subjects with emphasis on reading, writing, and basic mathematics. Interactive learning methods and play-based activities.',
      highlights: [
        'Phonics and Reading Program',
        'Basic Math Concepts',
        'Science Exploration',
        'Art and Music',
        'Physical Education',
      ],
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      focus: 'Skill Development',
      description:
        'Developing critical thinking and problem-solving skills. Introduction to specialized subjects and preparation for higher education.',
      highlights: [
        'Advanced Mathematics',
        'Laboratory Sciences',
        'Language Arts',
        'Social Sciences',
        'Technology Integration',
      ],
    },
    {
      level: 'High School',
      grades: 'Grades 9-12',
      focus: 'College Preparation',
      description:
        'Rigorous academic program with multiple streams. College preparation, career counseling, and advanced placement courses.',
      highlights: [
        'Advanced Placement (AP)',
        'College Prep Courses',
        'Career Counseling',
        'Research Projects',
        'Internship Opportunities',
      ],
    },
  ]

  const achievements = [
    {
      icon: '🏆',
      title: 'Academic Excellence',
      description: 'Consistently high board exam results and academic achievements',
    },
    {
      icon: '🎓',
      title: 'College Placements',
      description: '95% of graduates admitted to top universities and colleges',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Students winning national and international competitions',
    },
    {
      icon: '🌟',
      title: 'Holistic Development',
      description: 'Balanced focus on academics, sports, and extracurriculars',
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
              Academics
            </h1>
            
           
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="
  font-poppins
  font-bold
  text-[40px]
  leading-[50px]
  tracking-[0.2px]
  text-[#252B42]
  mb-6
">
  Secondary Section
</h2>
             <p className="
  font-poppins
  font-normal
  text-[18px]
  leading-[18px]
  tracking-[0.2px]
  text-[#9F9F9F]
  leading-[100%]
  tracking-[0.2px]



  mb-4
">
  The Secondary Section focuses on academic excellence, critical thinking, and personal responsibility, preparing students for <br /> higher education and future challenges. At this stage, students  <br /> are encouraged to deepen their subject knowledge while  <br /> developing analytical skills, independence, and self-discipline. <br /> Our curriculum is designed to promote conceptual  <br /> understanding, problem-solving, and effective communication. <br /> Through experienced faculty,  modern teaching methods, and  <br /> continuous assessment, students are guided to achieve their full  <br /> academic potential.
</p>
              
             
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
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-2xl font-semibold">Excellence in Learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(/gallery/primary-bg.jpg)",
    }}
  />
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center font-poppins font-bold text-[40px] leading-[50px] tracking-[0.2px] text-white mb-12"
    >
      Primary Section
    </motion.h2>

    {/* Images */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
    >
      {[
        "/gallery/primary1.jpg",
        "/gallery/primary2.jpg",
        "/gallery/primary3.jpg",
      ].map((img, index) => (
        <div
          key={index}
          className="w-full h-[260px] rounded-[24px] overflow-hidden"
        >
          <img
            src={img}
            alt="Primary Section"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        max-w-5xl
        mx-auto
        text-center
        font-poppins
        font-normal
        text-[18px]
        leading-[28px]
        tracking-[0.2px]
        text-[#E1E1E1]
      "
    >
      The Primary Section focuses on building strong academic foundations while
      nurturing curiosity, creativity, and <br />  confidence in young learners. At
      this stage, students develop essential skills in literacy, numeracy,
      communication, and <br />  critical thinking. Our teaching approach combines
      structured learning with interactive activities to make education <br /> 
      engaging and meaningful. Students are encouraged to ask questions,
      explore new ideas, and actively participate in the <br />  learning process
      within a supportive and disciplined environment.
    </motion.p>
  </div>
</section>

{/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="
  font-poppins
  font-bold
  text-[40px]
  leading-[50px]
  tracking-[0.2px]
  text-[#252B42]
  mb-6
">
  Secondary Section
</h2>
             <p className="
  font-poppins
  font-normal
  text-[18px]
  leading-[18px]
  tracking-[0.2px]
  text-[#9F9F9F]
  leading-[100%]
  tracking-[0.2px]



  mb-4
">
  The Secondary Section focuses on academic excellence, critical thinking, and personal responsibility, preparing students for <br /> higher education and future challenges. At this stage, students  <br /> are encouraged to deepen their subject knowledge while  <br /> developing analytical skills, independence, and self-discipline. <br /> Our curriculum is designed to promote conceptual  <br /> understanding, problem-solving, and effective communication. <br /> Through experienced faculty,  modern teaching methods, and  <br /> continuous assessment, students are guided to achieve their full  <br /> academic potential.
</p>
              
             
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
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-2xl font-semibold">Excellence in Learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE – IMAGE */}
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
            <p className="text-2xl font-semibold">Excellence in Learning</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE – TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-poppins font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] mb-6">
          Highher Secondary Section
        </h2>

        <p className="font-poppins font-normal text-[18px] text-[#9F9F9F] mb-4 leading-relaxed">
         The Higher Secondary Section is designed to prepare students for<br /> higher education, competitive examinations, and career <br /> pathways. At this crucial stage, students are encouraged to <br /> develop academic depth, independent thinking, and a clear<br />sense of direction for their future. Our curriculum emphasizes<br />conceptual clarity, analytical skills, and practical application of <br /> knowledge. With experienced faculty, well-equipped laboratories, <br /> and structured academic support, students are guided to <br /> achieve excellence in their chosen streams.
        </p>
      </motion.div>

    </div>
  </div>
</section>


<section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(/gallery/primary-bg.jpg)",
    }}
  />
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center font-poppins font-bold text-[40px] leading-[50px] tracking-[0.2px] text-white mb-12"
    >
      Higher Secondary Section(Section)
    </motion.h2>

    {/* Images */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
    >
      {[
        "/gallery/primary1.jpg",
        "/gallery/primary2.jpg",
        "/gallery/primary3.jpg",
      ].map((img, index) => (
        <div
          key={index}
          className="w-full h-[260px] rounded-[24px] overflow-hidden"
        >
          <img
            src={img}
            alt="Primary Section"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        max-w-5xl
        mx-auto
        text-center
        font-poppins
        font-normal
        text-[18px]
        leading-[28px]
        tracking-[0.2px]
        text-[#E1E1E1]
      "
    >
      The Primary Section focuses on building strong academic foundations while
      nurturing curiosity, creativity, and <br />  confidence in young learners. At
      this stage, students develop essential skills in literacy, numeracy,
      communication, and <br />  critical thinking. Our teaching approach combines
      structured learning with interactive activities to make education <br /> 
      engaging and meaningful. Students are encouraged to ask questions,
      explore new ideas, and actively participate in the <br />  learning process
      within a supportive and disciplined environment.
    </motion.p>
  </div>
</section>

 {/* Mandatory Disclosure Section */}
     <section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "50px",
          color: "#252B42",
        }}
      >
        Mandatory Disclosure
      </h2>

      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "18px",
          color: "#9F9F9F",
          marginTop: "8px",
        }}
      >
        Certified for transparency and safety.
      </p>
    </motion.div>

    <div className="space-y-8">

      {/* Age Criteria */}
      <div
        className="rounded-lg overflow-hidden bg-white"
        style={{ border: "1px solid #E9E9E9" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
           <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "18px",
    flexShrink: 0,
  }}
>
  Age
</div>

            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0.13px",
                color: "#252B42",
                width: "123px",
                height: "30px",
              }}
            >
              Age Criteria
            </h3>
          </div>
          <span className="text-xl text-gray-400">−</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-400">
              <tr className="h-[77px] border border-[#E9E9E9]">
                <th className="px-6 py-3 text-left">SLNO</th>
                <th className="px-6 py-3 text-left">INFORMATION</th>
                <th className="px-6 py-3 text-left">DETAILS</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
            <tr
  className="
    h-[77px]
    bg-white
    border
    border-[#E9E9E9]
  "
>
  {/* SLNO */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#252B42]
      align-middle
      w-[100px]
    "
  >
    1
  </td>

  {/* INFORMATION */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
    NAME OF THE SCHOOL
  </td>

  {/* DETAILS */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
    BLUE HORIZON PUBLIC SCHOOL
  </td>
</tr>

             <tr
  className="
    h-[77px]
    bg-gray-50
    border
    border-[#E9E9E9]
  "
>
  {/* SLNO */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#252B42]
      align-middle
      w-[100px]
    "
  >
    2
  </td>

  {/* INFORMATION */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
    NAME OF THE SCHOOL
  </td>

  {/* DETAILS */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
    BLUE HORIZON PUBLIC SCHOOL
  </td>
</tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Required Documents */}
      <div
        className="rounded-lg overflow-hidden bg-white"
        style={{ border: "1px solid #E9E9E9" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
           <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "18px",
    flexShrink: 0,
  }}
>
  Age
</div>

            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0.13px",
                color: "#252B42",
                height: "30px",
              }}
            >
              Required Documents
            </h3>
          </div>
          <span className="text-xl text-gray-400">−</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-400">
              <tr className="h-[77px] border border-[#E9E9E9]">
                <th className="px-6 py-3 text-left">SLNO</th>
                <th className="px-6 py-3 text-left">INFORMATION</th>
                <th className="px-6 py-3 text-left">DETAILS</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
            <tr
  className="
    h-[77px]
    bg-white
    border
    border-[#E9E9E9]
  "
>
  {/* SLNO */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#252B42]
      align-middle
      w-[100px]
    "
  >
    1
  </td>

  {/* INFORMATION */}
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
   COPY OF AFFILIATION/UP GRADATION LETTER <br /> AND RECENT EXTENSION OF AFFILIATION (IF ANY)
  </td>

  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
      w-[625px]
    "
  >
    📕 PDF
  </td>
</tr>

             <tr
  className="
    h-[77px]
    bg-gray-50
    border
    border-[#E9E9E9]
  "
>
  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#252B42]
      align-middle
      w-[100px]
    "
  >
    2
  </td>

  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
    "
  >
    COPY OF SOCIETIES/TRUST/COMPANY <br /> REGISTRATION/RENEWAL CERTIFICATE, AS  <br /> APPLICABLE
  </td>

  <td
    className="
      px-6
      font-poppins
      font-normal
      text-[16px]
      text-[#9F9F9F]
      align-middle
      text-left
      w-[625px]
    "
  >
    📕 PDF
  </td>
</tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* New Section */}
    <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
      <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
      Prospectus (PDF – 5 to 6 Pages)
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>


      {/* Additional Box 1 */}
  <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
     <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
        School Calendar (Year-wise)
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>


      {/* Additional Box 2 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
      <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
        Holiday List
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

  <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
      <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
       School Timing

      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>


      {/* Additional Box 4 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
    <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
        School Uniform Details
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>


      {/* Additional Box 5 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
     <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
        Syllabus Information
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

      {/* Additional Box 6 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
    <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
        Other Important Instructions / Guidelines
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

      {/* Additional Box 7 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
    <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
       Government / School Schemes
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

      {/* Additional Box 8 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
      <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
       RTE (Right to Education) Information
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

      {/* Additional Box 9 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
    <div className="flex items-center gap-4">
      
      {/* Icon */}
     <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
       Name Correction, Caste & Surname Correction Guidelines(નામ, જાતિ, અટક સુધારણા)
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>


      {/* Additional Box 10 */}
     <div
  className="bg-white rounded-[10px] mb-4"
  style={{
    width: "1172px",
    minHeight: "89px",
    boxShadow: "0px 0px 24px rgba(176, 176, 176, 0.3)",
  }}
>
  <div className="flex items-center justify-between px-6 py-4">
    
    {/* Left side: Icon + Heading */}
   <div className="flex items-center gap-6">
      
      {/* Icon */}
     <div
  className="flex items-center justify-center"
  style={{
    width: "104px",
    height: "89px",
    backgroundColor: "#3E3F95",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "24px",
    flexShrink: 0,
  }}
>
  📅
</div>

      {/* Heading (style unchanged, single line) */}
      <h3
        style={{
          width: "326px",
          height: "30px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "100%",
          letterSpacing: "0.13px",
          color: "#3E3F95",
          whiteSpace: "nowrap",
        }}
      >
       Career Guidance Circular(કારકિર્દી માર્ગદર્શન સર્ક્યુલર)
      </h3>
    </div>

    {/* Right side: Plus / Minus */}
    <span className="text-[22px] text-[#3E3F95] font-medium">
      +
    </span>

  </div>
</div>

    </div>
  </div>
  
 </section>


    </div>
  )
}

export default Academics

