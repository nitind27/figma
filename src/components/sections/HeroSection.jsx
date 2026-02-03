import React from 'react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';



// Placeholder sub-components based on your UI

const StatCard = ({ label, value, bgColor }) => (

  <div className={`${bgColor} text-white p-4 rounded-2xl shadow-xl min-w-[120px]`}>

    <p className="text-xs font-medium uppercase tracking-wider">{label}</p>

    <p className="text-2xl font-bold">{value} ↑</p>

  </div>

);



const DonutChart = () => (

  <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">

    <p className="text-gray-900 font-bold mb-3 text-sm">Global Statistic</p>

    <div className="relative w-24 h-24 rounded-full border-[10px] border-purple-600 border-t-orange-400 flex items-center justify-center">

      <span className="text-[10px] font-bold text-center leading-tight">23 Wins<br/>(75%)</span>

    </div>

  </div>

);



const HeroSection = () => {

  return (

    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden py-16 lg:py-0 font-poppins">

      {/* Decorative Background Elements */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-60 -mr-64 -mt-64" />

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          

          {/* LEFT CONTENT PANEL */}

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

                className="px-10 py-4 bg-[#3E3F95] text-white rounded-full font-bold shadow-xl hover:bg-[#2e2f75] transition-all transform hover:-translate-y-1 flex items-center gap-3"

              >

                Read More

                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />

                </svg>

              </Link>

            </div>

          </motion.div>



          {/* RIGHT IMAGE & UI PANEL (Floating Elements) */}

          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8, delay: 0.2 }}

            className="order-1 lg:order-2 flex justify-center relative"

          >

            <div className="relative w-full max-w-[520px]">

              

              {/* 1. PINK STAT CARD (Top Left) */}

              <motion.div 

                animate={{ y: [0, -12, 0] }}

                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

                className="absolute top-[15%] -left-12 z-30 hidden md:block"

              >

                <StatCard 

                  label="Singles" 

                  value="18" 

                  bgColor="bg-gradient-to-r from-[#F25C7B] to-[#F98A9F]" 

                />

              </motion.div>



              {/* 2. MAIN STUDENT IMAGE */}

              <div className="relative z-20 overflow-visible bg-[#ECEDFF] rounded-3xl">

                <img

                  src="/WhatsApp_Image_2026-02-02_at_4.13.26_PM-removebg-preview.png" 

                  alt="LPS Student"

                  className="w-full h-auto object-contain drop-shadow-2xl scale-110"

                />

              </div>



              {/* 3. GLOBAL STATISTIC DONUT (Right Middle) */}

              <motion.div 

                animate={{ y: [0, 15, 0] }}

                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}

                className="absolute top-[40%] -right-12 z-30 hidden md:block"

              >

                <DonutChart />

              </motion.div>



              {/* 4. LATEST SCORES CARD (Bottom Left) */}

              <motion.div 

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.6 }}

                className="absolute -bottom-6 -left-10 z-40 hidden md:block bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 max-w-[260px]"

              >

                <div className="flex justify-between items-center mb-2">

                  <p className="text-[10px] font-bold text-gray-400">LATEST SCORES</p>

                  <span className="text-[10px] text-blue-400 cursor-pointer">View All</span>

                </div>

                <div className="space-y-2">

                  <div className="flex justify-between items-center text-xs">

                    <span className="font-bold">Anindita R. (IDN)</span>

                    <span className="bg-yellow-100 text-yellow-600 px-1 rounded text-[8px] font-black">WIN</span>

                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-400">

                    <span>Naomi O. (JPN)</span>

                    <span>0 3 1</span>

                  </div>

                </div>

              </motion.div>



              {/* Decorative Circle Background */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-blue-50/40 rounded-full -z-0 blur-3xl" />

            </div>

          </motion.div>



        </div>

      </div>

    </section>

  );

};



export default HeroSection;

