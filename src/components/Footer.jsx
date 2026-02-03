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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_288_367)">
<path d="M12 24C18.629 24 24 18.629 24 12C24 5.371 18.629 0 12 0C5.371 0 0 5.371 0 12C0 18.629 5.371 24 12 24ZM5.491 11.74L17.061 7.279C17.598 7.085 18.067 7.41 17.893 8.222L17.894 8.221L15.924 17.502C15.778 18.16 15.387 18.32 14.84 18.01L11.84 15.799L10.393 17.193C10.233 17.353 10.098 17.488 9.788 17.488L10.001 14.435L15.561 9.412C15.803 9.199 15.507 9.079 15.188 9.291L8.317 13.617L5.355 12.693C4.712 12.489 4.698 12.05 5.491 11.74Z" fill="#3E3F95"/>
</g>
<defs>
<clipPath id="clip0_288_367">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )},
    { name: 'Twitter', url: '#', icon: (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.38323 0 0 5.38323 0 12C0 18.6163 5.38323 24 12 24C18.6163 24 24 18.6163 24 12C24 5.38323 18.6173 0 12 0ZM17.3533 9.25352C17.3586 9.37243 17.3615 9.49231 17.3615 9.61218C17.3615 13.2621 14.5841 17.4693 9.50246 17.4693C7.94264 17.4693 6.49061 17.0135 5.26867 16.2294C5.48473 16.2551 5.70466 16.2681 5.92749 16.2681C7.22194 16.2681 8.41247 15.8263 9.35793 15.0858C8.78152 15.0749 8.22293 14.8842 7.76029 14.5402C7.29765 14.1962 6.95411 13.7162 6.77773 13.1673C7.19158 13.2464 7.61798 13.2306 8.02481 13.1209C7.39969 12.9946 6.83753 12.6559 6.43374 12.1622C6.02996 11.6686 5.80942 11.0504 5.80955 10.4126L5.81004 10.3778C6.19338 10.5909 6.62212 10.7093 7.0605 10.723C6.68231 10.4706 6.37231 10.1288 6.15804 9.72784C5.94377 9.32687 5.83187 8.87918 5.83227 8.42455C5.83227 7.91799 5.9681 7.44333 6.20591 7.03537C6.89939 7.88871 7.76455 8.58669 8.74526 9.08399C9.72597 9.5813 10.8003 9.86682 11.8985 9.92202C11.8507 9.7155 11.8268 9.50417 11.8274 9.29219C11.8271 8.73812 11.9934 8.19674 12.3048 7.73843C12.6162 7.28011 13.0582 6.92604 13.5734 6.72222C14.0886 6.5184 14.6532 6.47426 15.1939 6.59553C15.7345 6.7168 16.2262 6.99788 16.605 7.40224C17.2239 7.28077 17.8174 7.05401 18.3596 6.73181C18.1529 7.37184 17.7207 7.91499 17.1435 8.26021C17.6911 8.19583 18.2259 8.04934 18.7299 7.82567C18.3604 8.38034 17.8941 8.86399 17.3533 9.25352Z" fill="#3E3F95"/>
</svg>

    )},
    { name: 'YouTube', url: '#', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_288_358)">
<path d="M10.3359 13.936L13.6644 12.005L10.3359 10.0645V13.936Z" fill="#3E3F95"/>
<path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519938 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM18.3158 14.1237C18.316 14.4375 18.2544 14.7484 18.1344 15.0384C18.0144 15.3284 17.8385 15.5919 17.6166 15.8139C17.3948 16.0359 17.1314 16.2121 16.8414 16.3322C16.5515 16.4524 16.2407 16.5142 15.9268 16.5142H8.07316C7.75931 16.5142 7.44853 16.4524 7.15859 16.3322C6.86864 16.2121 6.60522 16.0359 6.38336 15.8139C6.16151 15.5919 5.98557 15.3284 5.86561 15.0384C5.74565 14.7484 5.68401 14.4375 5.68422 14.1237V9.87632C5.68401 9.56246 5.74565 9.25164 5.86561 8.96162C5.98557 8.6716 6.16151 8.40806 6.38336 8.18605C6.60522 7.96405 6.86864 7.78794 7.15859 7.66779C7.44853 7.54763 7.75931 7.48579 8.07316 7.48579H15.9268C16.2407 7.48579 16.5515 7.54763 16.8414 7.66779C17.1314 7.78794 17.3948 7.96405 17.6166 8.18605C17.8385 8.40806 18.0144 8.6716 18.1344 8.96162C18.2544 9.25164 18.316 9.56246 18.3158 9.87632V14.1237Z" fill="#3E3F95"/>
</g>
<defs>
<clipPath id="clip0_288_358">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )},
    { name: 'Facebook', url: '#', icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_288_370)">
<path d="M12 0C5.38323 0 0 5.38323 0 12C0 18.6163 5.38323 24 12 24C18.6163 24 24 18.6163 24 12C24 5.38323 18.6173 0 12 0ZM14.9843 12.4225H13.032V19.381H10.139V12.4225H8.76388V9.9631H10.139V8.37235C10.139 7.23306 10.6804 5.45283 13.0586 5.45283L15.2023 5.46105V7.84838H13.6463C13.3931 7.84838 13.0329 7.97503 13.0329 8.51833V9.96359H15.2371L14.9843 12.4225Z" fill="#3E3F95"/>
</g>
<defs>
<clipPath id="clip0_288_370">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )},
    { name: 'Instagram', url: '#', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_288_373)">
<path d="M12 14.4609C13.3591 14.4609 14.4609 13.3591 14.4609 12C14.4609 10.6409 13.3591 9.53906 12 9.53906C10.6409 9.53906 9.53906 10.6409 9.53906 12C9.53906 13.3591 10.6409 14.4609 12 14.4609Z" fill="#3E3F95"/>
<path d="M12 0.28125C5.52792 0.28125 0.28125 5.52792 0.28125 12C0.28125 18.4721 5.52792 23.7188 12 23.7188C18.4721 23.7188 23.7188 18.4721 23.7188 12C23.7188 5.52792 18.4721 0.28125 12 0.28125ZM19.2402 14.9784C19.184 16.0926 18.8709 17.1912 18.059 17.9945C17.2392 18.8055 16.1353 19.1076 15.0105 19.1633H8.98959C7.86459 19.1076 6.76087 18.8056 5.94108 17.9945C5.12911 17.1912 4.81608 16.0926 4.75983 14.9784V9.02156C4.81608 7.90744 5.12916 6.80878 5.94108 6.00544C6.76087 5.1945 7.86473 4.89234 8.98959 4.8367H15.0104C16.1354 4.89234 17.2391 5.19436 18.0589 6.00544C18.8709 6.80878 19.1839 7.90744 19.2402 9.02156L19.2402 14.9784Z" fill="#3E3F95"/>
<path d="M14.9357 6.19423C13.4692 6.15401 10.5339 6.15401 9.06734 6.19423C8.30417 6.21518 7.439 6.40516 6.89525 6.98595C6.33021 7.58965 6.1167 8.31902 6.09504 9.13498C6.05698 10.5671 6.09504 14.8655 6.09504 14.8655C6.11984 15.6814 6.33021 16.4109 6.89525 17.0146C7.439 17.5955 8.30417 17.7853 9.06734 17.8063C10.5339 17.8465 13.4692 17.8465 14.9357 17.8063C15.6989 17.7853 16.5641 17.5953 17.1078 17.0146C17.6728 16.4109 17.8864 15.6815 17.908 14.8655V9.13498C17.8864 8.31902 17.6728 7.58965 17.1078 6.98595C16.5639 6.40498 15.6987 6.21518 14.9357 6.19423ZM12.0013 15.8147C11.2469 15.8147 10.5094 15.591 9.88214 15.1719C9.25486 14.7527 8.76595 14.157 8.47724 13.46C8.18854 12.763 8.113 11.996 8.26018 11.2561C8.40736 10.5162 8.77065 9.83649 9.30411 9.30303C9.83757 8.76957 10.5172 8.40628 11.2572 8.2591C11.9971 8.11192 12.7641 8.18746 13.4611 8.47616C14.1581 8.76487 14.7538 9.25378 15.1729 9.88106C15.5921 10.5083 15.8158 11.2458 15.8158 12.0003C15.8158 13.0119 15.4139 13.9821 14.6986 14.6975C13.9832 15.4128 13.013 15.8147 12.0013 15.8147ZM15.832 8.97316C15.6811 8.97313 15.5337 8.92835 15.4082 8.8445C15.2828 8.76065 15.185 8.64149 15.1273 8.50209C15.0696 8.36269 15.0545 8.2093 15.084 8.06133C15.1134 7.91335 15.1861 7.77744 15.2928 7.67076C15.3995 7.56409 15.5355 7.49145 15.6834 7.46203C15.8314 7.43261 15.9848 7.44772 16.1242 7.50547C16.2636 7.56322 16.3827 7.661 16.4665 7.78645C16.5504 7.91191 16.5951 8.0594 16.5951 8.21027C16.5951 8.31047 16.5753 8.40969 16.537 8.50226C16.4986 8.59483 16.4424 8.67894 16.3716 8.74978C16.3007 8.82063 16.2166 8.87682 16.124 8.91515C16.0314 8.95347 15.9322 8.97319 15.832 8.97316Z" fill="#3E3F95"/>
</g>
<defs>
<clipPath id="clip0_288_373">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

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
              <ul className="space-y-0.4">
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
              <h4 className="font-bold text-base mb-1 text-[#434287]">Social Connected</h4>
              <div className="flex flex-nowrap gap-2 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity"
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
                className="object-contain max-w-full h-auto w-28 sm:w-36 md:w-44 lg:w-[165.1px]"
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
