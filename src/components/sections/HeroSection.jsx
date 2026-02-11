import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StatCard = ({ label, value, bgColor }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    transition={{ duration: 0.3 }}
    className={`${bgColor} backdrop-blur-sm bg-white/10 text-white p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 min-w-[90px] sm:min-w-[100px] md:min-w-[120px]`}
  >
    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">{label}</p>
    <p className="text-lg sm:text-xl md:text-2xl font-bold">{value} ↑</p>
  </motion.div>
);

const DonutChart = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100/50 flex flex-col items-center"
  >
    <p className="text-gray-900 font-bold mb-2 sm:mb-3 text-xs sm:text-sm">Global Statistic</p>
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-[10px] border-purple-600 border-t-orange-400"
      />
      <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-center leading-tight relative z-10">23 Wins<br/>(75%)</span>
    </div>
  </motion.div>
);



const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-x-hidden py-16 lg:py-0 font-poppins">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
      
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-full blur-3xl -mr-64 -mt-64"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#3E3F95]/10 via-[#0DBBF1]/10 to-transparent rounded-full blur-3xl -ml-32 -mb-32"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-[#3E3F95] text-lg font-bold tracking-wider uppercase">
                About Our School
              </h2>
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#0DBBF1]" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              We are <span className="text-[#3E3F95]">LPS</span> based <br />
              educational pioneer
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-lg">
              For the last 25 years, we have been at the forefront of shaping
              the lives of hundreds of thousands of students by running our
              institutions with modern excellence.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
              Our school readily combines a modern outlook with traditional
              values so as to maintain a happy and respectful rapport.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group px-10 py-4 bg-gradient-to-r from-[#3E3F95] to-[#2e2f75] text-white rounded-full font-bold shadow-xl shadow-[#3E3F95]/30 hover:shadow-2xl hover:shadow-[#3E3F95]/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#2e2f75] to-[#3E3F95] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Read More
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center relative px-4 sm:px-4 md:px-0 overflow-visible"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] mx-auto">
              <motion.div
                variants={floatingVariants}
                animate="float"
                className="relative z-20 overflow-visible bg-[#ECEDFF] rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-0 group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <motion.img
                  src="/WhatsApp_Image_2026-02-02_at_4.13.26_PM-removebg-preview.png"
                  alt="LPS Student"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-auto object-contain drop-shadow-xl sm:drop-shadow-2xl scale-100 sm:scale-105 md:scale-110 lg:group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[112%] md:w-[115%] h-[110%] sm:h-[112%] md:h-[115%] bg-blue-50/40 rounded-full -z-0 blur-2xl sm:blur-3xl" />

              <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute top-[10%] sm:top-[12%] md:top-[15%] -left-2 sm:-left-4 md:-left-6 lg:-left-12 z-30"
              >
                <motion.div variants={cardVariants}>
                  <StatCard
                    label="Singles"
                    value="18"
                    bgColor="bg-gradient-to-r from-[#F25C7B] to-[#F98A9F]"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute top-[35%] sm:top-[38%] md:top-[40%] -right-2 sm:-right-4 md:-right-6 lg:-right-12 z-30"
              >
                <motion.div variants={cardVariants}>
                  <DonutChart />
                </motion.div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-6 -left-2 sm:-left-4 md:-left-6 lg:-left-10 z-40 bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100/50 max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[260px]"
              >
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <p className="text-[9px] sm:text-[10px] font-bold text-gray-400">LATEST SCORES</p>
                  <span className="text-[9px] sm:text-[10px] text-blue-400 cursor-pointer">View All</span>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center text-[10px] sm:text-xs">
                    <span className="font-bold truncate pr-1">Anindita R. (IDN)</span>
                    <span className="bg-yellow-100 text-yellow-600 px-1 rounded text-[7px] sm:text-[8px] font-black flex-shrink-0">WIN</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-400">
                    <span className="truncate pr-1">Naomi O. (JPN)</span>
                    <span className="flex-shrink-0">0 3 1</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;

