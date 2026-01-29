import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const services = [
    { path: '/admissions', label: 'Admissions' },
    { path: '/the-school', label: 'Our Staff' },
    { path: '/about', label: 'Our Values' },
    { path: '/academics', label: 'Education' },
    { path: '/gallery', label: 'Gallery' },
  ]

  const socialLinks = [
    { name: 'Telegram', url: '#', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
    )},
    { name: 'Twitter', url: '#', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )},
    { name: 'YouTube', url: '#', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )},
    { name: 'Facebook', url: '#', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    )},
    { name: 'Instagram', url: '#', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )},
  ]

  return (
    <footer className="relative">
      {/* Top thin light blue separator */}
      <div className="h-0.5 w-full bg-[#4696DD]" />

      {/* Main footer - light background */}
      <div className="bg-[#F6F7FA] text-[#6C6D73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-[133px] lg:pr-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
            {/* 1. Logo & Fees Pay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <Link to="/" className="inline-block mb-1">
                <img
                  src="/5f72a812ff23fe954721b9cbdef08a5175ea805b.png"
                  alt="LPS Group of Education"
                  className="object-contain flex-shrink-0 max-w-full h-auto w-28 sm:w-36 md:w-44 lg:w-[195.1px] block"
                />
              </Link>
              <h4
                className="mt-0 mb-2 inline-block"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#3E4096',
                  width: '71px',
                  height: '24px',
                }}
              >
                Fees Pay
              </h4>
              <Link
                to="/fees"
                className="inline-flex items-center justify-center w-[175px] h-[57px] font-semibold text-white text-sm transition-all hover:opacity-95 hover:shadow-lg shadow-[0_4px_14px_rgba(0,195,255,0.35)]"
                style={{ background: 'linear-gradient(90deg, #00C3FF 0%, #333493 100%)', borderRadius: '4.04px' }}
              >
                Pay School Fees
              </Link>
            </motion.div>

            {/* 2. About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h4 className="font-bold text-base mb-3 text-[#434287]">About</h4>
              <p className="text-sm leading-relaxed">
                LPS School is truly an extraordinary place of learning. Our talented staff provides each student with a rigorous standards, high academic.
              </p>
            </motion.div>

            {/* 3. Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold text-base mb-3 text-[#434287]">Services</h4>
              <ul className="space-y-0.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-sm hover:text-[#434287] transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4. Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="font-bold text-base mb-3 text-[#434287]">Contact Info</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <span>
                    <span className="font-medium text-[#434287]">Katagram School Address</span>
                    <span className="block">Uday nagar - 1, gotala vadi. Near Pipalas char rasta , katargam road, surat-4 Gujrat</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <span>
                    <span className="font-medium text-[#434287]">Contact Us</span>
                    <span className="block">+91-6357470004</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <a href="mailto:Info.k@lpsavani.in" className="font-medium text-[#434287] hover:underline">
                    Info.k@lpsavani.in
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* 5. Social Connected & Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-base mb-3 text-[#434287]">Social Connected</h4>
              <div className="flex flex-nowrap gap-2 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#3E3F95] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <h4 className="font-bold text-base mb-3 text-[#434287]">Download</h4>
              <img
                src="/5808cd2037118da14955030d29574b69aa3d1e78.png"
                alt="LPS Group of Education"
                className="object-contain max-w-full h-auto w-28 sm:w-36 md:w-44 lg:w-[195.1px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar - dark purplish blue */}
      <div className="bg-[#3E3F95] text-white w-full h-[79px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <p>©2026 LPSgroupofeducation. All rights reserved.</p>
            <p>LPS Group of Education</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
