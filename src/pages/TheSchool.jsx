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
      image: "/certificate/1.png",
      title: "Building Safety Certificate",
    },
    {
      image: "/certificate/2.png",
      title: "Fire Safety Certificate",
    },
    {
      image: "/certificate/3.png",
      title: "List of Certificate",
    },
    {
      image: "/certificate/4.png",
      title: "List of Parent-Teacher Association",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(/gallery/6c3e3dd551b6b26721b711c2b843dbdc9ec8da40.jpg)',
            backgroundPosition: 'center 25%',
          }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[1171px] w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-2">
              The School
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* LEFT SIDE – Images */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/Group 1707480967.png"
                alt="Experience Advisor"
                className="w-full max-w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT SIDE – Content */}
            <div className="lg:pl-10 order-1 lg:order-2">
              <div className="mb-3 sm:mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600">
                  <svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3945 1.44312C6.00655 1.17787 5.52911 1.0776 5.06723 1.16436C4.60534 1.25113 4.19684 1.51782 3.93159 1.90578C3.66634 2.29373 3.56607 2.77116 3.65284 3.23305C3.7396 3.69493 4.0063 4.10343 4.39425 4.36868L7.42613 6.43981C7.61816 6.57158 7.83434 6.6641 8.06224 6.71208C8.29014 6.76005 8.52528 6.76252 8.75414 6.71934C8.983 6.67617 9.20107 6.5882 9.39583 6.4605C9.59059 6.33279 9.7582 6.16786 9.88903 5.97518C10.0203 5.78325 10.1125 5.56732 10.1603 5.33974C10.2081 5.11216 10.2106 4.87738 10.1677 4.64884C10.1247 4.42029 10.0371 4.20245 9.90993 4.00777C9.78273 3.81309 9.61842 3.64539 9.42638 3.51424L6.3945 1.44312ZM7.16625 15.2342C7.16625 14.7643 6.97957 14.3136 6.64728 13.9813C6.31499 13.649 5.86431 13.4623 5.39437 13.4623H1.77187C1.30194 13.4623 0.851261 13.649 0.51897 13.9813C0.186679 14.3136 0 14.7643 0 15.2342C0 15.7041 0.186679 16.1548 0.51897 16.4871C0.851261 16.8194 1.30194 17.0061 1.77187 17.0061H5.39437C5.62706 17.0061 5.85747 16.9603 6.07244 16.8712C6.28742 16.7822 6.48275 16.6517 6.64728 16.4871C6.81181 16.3226 6.94233 16.1273 7.03137 15.9123C7.12042 15.6973 7.16625 15.4669 7.16625 15.2342ZM7.42809 24.0286L4.39622 26.0997C4.20399 26.2311 4.03952 26.399 3.91219 26.5939C3.78486 26.7888 3.69716 27.0069 3.65411 27.2357C3.61106 27.4645 3.61349 27.6995 3.66127 27.9273C3.70905 28.1552 3.80124 28.3714 3.93258 28.5636C4.06392 28.7559 4.23183 28.9203 4.42673 29.0477C4.62163 29.175 4.83971 29.2627 5.0685 29.3057C5.29729 29.3488 5.53233 29.3464 5.76018 29.2986C5.98803 29.2508 6.20424 29.1586 6.39647 29.0273L9.42834 26.9562C9.62057 26.8248 9.78504 26.6569 9.91237 26.462C10.0397 26.2671 10.1274 26.049 10.1705 25.8202C10.2135 25.5914 10.2111 25.3564 10.1633 25.1285C10.1155 24.9007 10.0233 24.6845 9.89198 24.4923C9.76065 24.3 9.59273 24.1356 9.39783 24.0082C9.20293 23.8809 8.98486 23.7932 8.75606 23.7502C8.52727 23.7071 8.29224 23.7095 8.06438 23.7573C7.83653 23.8051 7.62032 23.8973 7.42809 24.0286ZM50.2445 6.7489C50.6008 6.74904 50.9488 6.64128 51.2426 6.43981L54.2745 4.36868C54.4666 4.23734 54.6309 4.06946 54.7581 3.8746C54.8854 3.67975 54.9729 3.46175 55.0159 3.23305C55.0589 3.00435 55.0564 2.76942 55.0085 2.54169C54.9607 2.31395 54.8685 2.09787 54.7372 1.90578C54.6058 1.71368 54.4379 1.54933 54.2431 1.42212C54.0482 1.29491 53.8302 1.20732 53.6015 1.16436C53.3728 1.1214 53.1379 1.12391 52.9102 1.17174C52.6824 1.21956 52.4663 1.31178 52.2743 1.44312L49.2424 3.51424C48.9297 3.72796 48.6938 4.03623 48.5691 4.39385C48.4445 4.75147 48.4377 5.13961 48.5498 5.50137C48.6618 5.86312 48.8869 6.17945 49.1919 6.40397C49.4968 6.62848 49.8658 6.74937 50.2445 6.7489ZM56.8969 13.4604H53.2744C52.8044 13.4604 52.3538 13.647 52.0215 13.9793C51.6892 14.3116 51.5025 14.7623 51.5025 15.2322C51.5025 15.7022 51.6892 16.1529 52.0215 16.4851C52.3538 16.8174 52.8044 17.0041 53.2744 17.0041H56.8969C57.3668 17.0041 57.8175 16.8174 58.1498 16.4851C58.4821 16.1529 58.6687 15.7022 58.6687 15.2322C58.6687 14.7623 58.4821 14.3116 58.1498 13.9793C57.8175 13.647 57.3668 13.4604 56.8969 13.4604ZM51.2407 24.0286C51.0486 23.8973 50.8325 23.8051 50.6047 23.7572C50.377 23.7094 50.1421 23.7069 49.9134 23.7499C49.6847 23.7928 49.4667 23.8804 49.2718 24.0076C49.077 24.1348 48.9091 24.2992 48.7777 24.4913C48.6464 24.6834 48.5542 24.8995 48.5064 25.1272C48.4585 25.3549 48.456 25.5898 48.499 25.8185C48.542 26.0472 48.6295 26.2653 48.7568 26.4601C48.884 26.655 49.0483 26.8228 49.2404 26.9542L52.2723 29.0253C52.4643 29.1571 52.6805 29.2496 52.9084 29.2976C53.1363 29.3455 53.3714 29.348 53.6003 29.3048C53.8292 29.2617 54.0472 29.1737 54.242 29.046C54.4368 28.9183 54.6044 28.7534 54.7352 28.5607C54.8665 28.3686 54.9588 28.1525 55.0066 27.9248C55.0544 27.697 55.057 27.4621 55.014 27.2334C54.971 27.0047 54.8834 26.7867 54.7562 26.5918C54.629 26.397 54.4646 26.2291 54.2725 26.0978L51.2407 24.0286ZM29.3344 2.53489e-05C20.3273 -0.0137559 13.0036 7.30999 13.0036 16.3308C13.0036 20.5124 14.5825 24.3279 17.1852 27.2081C19.0752 29.3127 20.2525 31.9272 20.4494 34.717H38.2213C38.4182 31.9272 39.5935 29.3108 41.4855 27.2081C44.1831 24.2283 45.6739 20.3503 45.6671 16.3308C45.6652 7.30999 38.3414 -0.0157247 29.3344 2.53489e-05ZM26.9364 8.98737C25.9183 9.32207 24.9807 9.86444 24.183 10.5802C23.3853 11.2959 22.7448 12.1694 22.302 13.1454C22.1078 13.5735 21.7514 13.907 21.3113 14.0724C20.8712 14.2378 20.3834 14.2216 19.9552 14.0274C19.5271 13.8331 19.1936 13.4768 19.0282 13.0367C18.8628 12.5966 18.879 12.1088 19.0732 11.6806C19.7203 10.2577 20.6553 8.98437 21.8193 7.94103C22.9833 6.89768 24.3509 6.10698 25.8359 5.61884C26.2826 5.4729 26.769 5.51039 27.188 5.72305C27.6071 5.93572 27.9245 6.30614 28.0704 6.75284C28.2164 7.19953 28.1789 7.68591 27.9662 8.10496C27.7536 8.52402 27.3831 8.84143 26.9364 8.98737ZM20.4868 37.676V40.4303C20.4868 42.7081 22.3335 44.5528 24.6094 44.5528H34.0594C35.1527 44.5528 36.2013 44.1185 36.9745 43.3454C37.7476 42.5722 38.1819 41.5237 38.1819 40.4303V37.676H20.4868Z" fill="#3E3F95" />
                  </svg>

                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  letterSpacing: "0.2px",
                  color: "#252B42",
                }}
              >
                Our Inspiration
              </h2>

              <p
                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  lineHeight: "28px",
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
                className="space-y-2 sm:space-y-3 md:space-y-4 font-poppins text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[40px] text-[#9F9F9F]"
                style={{ letterSpacing: "0.2px" }}
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
                className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90 mt-8 sm:mt-12 md:mt-16 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                style={{
                  borderRadius: "6px",
                  background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
                }}
              >
                Read More
                <svg
                  className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
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


      <section className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:h-[173px] bg-[#3E3F95] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <p className="max-w-3xl text-center text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed sm:leading-6 md:leading-7 font-poppins">
          We draw inspiration from visionary educators, engaged parents, and the changing needs of the modern world.
          By combining traditional values with modern teaching methods, we aim to empower our students with knowledge,
          integrity, and a lifelong love for learning.
        </p>
      </section>


      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span>
                <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0144 14.8771C23.565 15.2276 20.3818 16.8893 18.1223 19.5191C15.8628 22.1489 14.6994 25.546 14.8725 29.0089C15.0455 32.4717 16.5417 35.7359 19.0521 38.1274C21.5625 40.5189 24.8954 41.8551 28.3626 41.86C30.1409 41.8693 31.9033 41.5248 33.5473 40.8467C35.1913 40.1685 36.684 39.1702 37.9386 37.9099C40.4659 35.373 41.888 31.94 41.895 28.3591C41.895 27.9559 41.895 27.4897 41.3595 27.4897H37.8126C37.2771 27.4897 37.2771 27.9559 37.2771 28.3591C37.2602 30.7307 36.3228 33.0031 34.6626 34.6969C32.9903 36.365 30.7246 37.3018 28.3626 37.3018C26.0006 37.3018 23.7349 36.365 22.0626 34.6969C20.3978 33.0051 19.4558 30.7325 19.4355 28.3591C19.4405 25.9924 20.3824 23.724 22.0553 22.0499C23.7282 20.3759 25.9959 19.4323 28.3626 19.4257C28.7658 19.4257 29.232 19.4257 29.232 18.8902V1.01077C29.2505 0.885414 29.2418 0.757548 29.2064 0.635872C29.1711 0.514196 29.1099 0.401567 29.0271 0.305653C28.9443 0.209738 28.8418 0.132789 28.7266 0.0800454C28.6114 0.0273013 28.4862 0 28.3594 0C28.2327 0 28.1075 0.0273013 27.9923 0.0800454C27.8771 0.132789 27.7746 0.209738 27.6918 0.305653C27.609 0.401567 27.5478 0.514196 27.5125 0.635872C27.4771 0.757548 27.4684 0.885414 27.4869 1.01077V14.3416C27.4908 14.4731 27.445 14.6013 27.3586 14.7006C27.2722 14.7998 27.1515 14.8629 27.0207 14.8771H27.0144ZM52.353 11.7964L44.5788 19.5391C44.4993 19.6263 44.4018 19.6951 44.293 19.7408C44.1842 19.7865 44.0667 19.8079 43.9488 19.8037H38.8773C38.5975 19.815 38.3332 19.9347 38.1402 20.1376L28.8918 29.3356C28.8128 29.415 28.7189 29.4781 28.6155 29.5212C28.5121 29.5644 28.4013 29.5867 28.2892 29.587C28.1772 29.5873 28.0662 29.5655 27.9626 29.5229C27.859 29.4803 27.7648 29.4177 27.6854 29.3387C27.6059 29.2597 27.5428 29.1658 27.4997 29.0624C27.4566 28.959 27.4342 28.8482 27.4339 28.7361C27.4336 28.6241 27.4554 28.5131 27.498 28.4095C27.5406 28.3059 27.6032 28.2117 27.6822 28.1323L36.8676 18.9595C36.9841 18.8627 37.0741 18.7379 37.1291 18.5969C37.1842 18.4559 37.2026 18.3032 37.1826 18.1531V13.1131C37.1858 13.0003 37.2114 12.8894 37.2579 12.7866C37.3044 12.6839 37.3709 12.5914 37.4535 12.5146L45.3159 4.69627C45.4389 4.57715 45.5943 4.497 45.7627 4.46588C45.9311 4.43477 46.1049 4.45406 46.2624 4.52135C46.4198 4.58864 46.5539 4.70092 46.6478 4.84412C46.7417 4.98731 46.7912 5.15504 46.7901 5.32627V9.81186C46.7893 9.88242 46.8025 9.95244 46.8291 10.0178C46.8558 10.0831 46.8952 10.1425 46.9451 10.1924C46.995 10.2423 47.0543 10.2817 47.1197 10.3083C47.185 10.3349 47.255 10.3482 47.3256 10.3474H51.7356C51.9095 10.3399 52.0816 10.3856 52.2289 10.4784C52.3762 10.5711 52.4918 10.7066 52.5602 10.8667C52.6286 11.0268 52.6467 11.2039 52.6119 11.3745C52.5771 11.5451 52.4912 11.701 52.3656 11.8216L52.353 11.7964ZM44.163 27.4645H55.9062C56.1368 27.4645 56.3579 27.5561 56.521 27.7191C56.684 27.8822 56.7756 28.1033 56.7756 28.3339C56.7756 28.5644 56.684 28.7856 56.521 28.9486C56.3579 29.1117 56.1368 29.2033 55.9062 29.2033H51.3513C51.2793 29.1965 51.2066 29.2056 51.1386 29.2301C51.0705 29.2546 51.0087 29.2939 50.9575 29.345C50.9064 29.3962 50.8672 29.458 50.8427 29.526C50.8182 29.5941 50.809 29.6667 50.8158 29.7388C50.4888 34.3387 48.8148 38.7406 46.0026 42.3955C42.8774 46.3727 38.5028 49.1804 33.5853 50.365C33.1821 50.4343 32.7096 50.365 32.7096 49.8295V43.3342C32.725 43.2253 32.7712 43.123 32.8426 43.0393C32.914 42.9557 33.0077 42.894 33.1128 42.8617C35.3826 42.0702 37.4453 40.7783 39.1482 39.0817C42.0047 36.2422 43.6198 32.3867 43.6401 28.3591C43.6401 27.9559 43.6401 27.4897 44.1756 27.4897L44.163 27.4645ZM29.2257 44.1091V55.8271C29.2071 56.0457 29.1071 56.2493 28.9455 56.3978C28.784 56.5462 28.5726 56.6286 28.3532 56.6286C28.1337 56.6286 27.9223 56.5462 27.7608 56.3978C27.5992 56.2493 27.4992 56.0457 27.4806 55.8271V51.4171C27.486 51.2851 27.4408 51.1561 27.3541 51.0565C27.2674 50.9569 27.1458 50.8943 27.0144 50.8816C22.209 50.5598 17.6341 48.7022 13.9646 45.5829C10.2951 42.4635 7.72522 38.2475 6.6339 33.5566C6.5016 33.1534 6.6339 32.7565 7.1001 32.7565H13.3371C13.4591 32.7474 13.5803 32.7826 13.6786 32.8554C13.7769 32.9283 13.8457 33.034 13.8726 33.1534C14.8865 36.1946 16.8315 38.8397 19.432 40.7144C22.0325 42.589 25.1568 43.5981 28.3626 43.5988C28.7658 43.5988 29.232 43.5988 29.232 44.1343L29.2257 44.1091ZM12.5307 29.1781H0.8694C0.638821 29.1781 0.417685 29.0865 0.254641 28.9234C0.0915971 28.7604 0 28.5392 0 28.3087C0 28.0781 0.0915971 27.8569 0.254641 27.6939C0.417685 27.5309 0.638821 27.4393 0.8694 27.4393H5.4243C5.56924 27.4529 5.71406 27.412 5.83052 27.3246C5.94698 27.2373 6.02676 27.1097 6.0543 26.9668C6.29368 22.1653 8.05259 17.5641 11.0771 13.8273C14.1017 10.0905 18.2354 7.41139 22.8816 6.17677C22.9614 6.16228 23.0435 6.16509 23.1221 6.18503C23.2008 6.20496 23.2742 6.24154 23.3376 6.29231C23.4009 6.34307 23.4525 6.40683 23.4891 6.47928C23.5256 6.55173 23.5462 6.63118 23.5494 6.71227V13.4659C23.5597 13.5793 23.5326 13.693 23.4723 13.7897C23.4121 13.8863 23.3219 13.9607 23.2155 14.0014C21.103 14.764 19.1813 15.9764 17.5833 17.5546C16.1546 18.9683 15.0198 20.6508 14.2445 22.5052C13.4693 24.3596 13.0688 26.3491 13.0662 28.3591C13.0662 28.7623 13.0662 29.2285 12.5307 29.2285V29.1781ZM34.9902 27.4393H34.1208C34.0516 27.4371 33.9833 27.455 33.9241 27.4908C33.8649 27.5265 33.8172 27.5787 33.7869 27.6409L30.4983 30.9232C27.6192 33.7582 23.3226 29.4049 26.145 26.5951L29.0241 23.6467C29.0849 23.6146 29.1358 23.5666 29.1713 23.5077C29.2068 23.4489 29.2256 23.3815 29.2257 23.3128V21.7063C29.2168 21.5672 29.1575 21.4361 29.059 21.3375C28.9604 21.2389 28.8293 21.1797 28.6902 21.1708C27.2402 21.1181 25.808 21.5046 24.5815 22.2799C23.3549 23.0551 22.3912 24.1827 21.8166 25.5151C21.2419 26.8474 21.0832 28.3223 21.3611 29.7464C21.6391 31.1705 22.3408 32.4774 23.3743 33.4959C24.4078 34.5143 25.7248 35.1968 27.1529 35.4539C28.5809 35.711 30.0533 35.5306 31.3771 34.9365C32.7009 34.3424 33.8143 33.3623 34.5714 32.1245C35.3286 30.8867 35.6941 29.4491 35.6202 28C35.5974 27.8497 35.5211 27.7128 35.4053 27.6144C35.2896 27.516 35.1421 27.4627 34.9902 27.4645V27.4393Z" fill="#3E3F95" />
                </svg>

              </span>
              <h2 className="mb-4 sm:mb-6 font-poppins font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[50px] tracking-[0.2px] text-[#252B42]">
                Our Philosophy
              </h2>
              <p className="text-sm sm:text-base md:text-[18px] text-[#737373] mb-3 sm:mb-4 leading-relaxed sm:leading-[28px] font-poppins">
                Our philosophy is founded on the belief that education should nurture the mind, character, and spirit of every learner. We believe that true education goes beyond academic excellence—it encourages curiosity, integrity, creativity, and respect for others.
              </p>
              <p className="text-sm sm:text-base md:text-[18px] text-[#737373] mb-4 sm:mb-6 leading-relaxed sm:leading-[28px] font-poppins">
                We are committed to creating a learning environment where students are inspired to think independently, ask meaningful questions, and develop a lifelong love for learning. By combining strong moral values with modern teaching practices, we prepare students to face real-world challenges with confidence and responsibility.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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
              className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0"
            >
              {/* 1. The Main Tall Background Image (Left side) */}
              <div className="absolute left-0 top-0 w-[70%] h-[85%] sm:h-[90%] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[40px] z-10 shadow-xl">
                <img
                  src="/Rectangle 34624680.png"
                  alt="Students in Library"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2. The Overlapping Foreground Image (Bottom Right) */}
              <div className="absolute right-0 bottom-1 sm:bottom-2 md:bottom-4 w-[60%] sm:w-[65%] h-[45%] sm:h-[50%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-[30px] z-30 shadow-2xl border-2 sm:border-3 md:border-4 border-white">
                <img
                  src="/Rectangle 34624681.png"
                  alt="Students Studying"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 3. The "21+" Floating Badge (Top Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.3 },
                  scale: { duration: 0.6, delay: 0.3 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-2 sm:top-4 md:top-6 lg:top-10 right-1 sm:right-2 md:right-4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-black rounded-full flex items-center justify-center z-20 shadow-lg border-[1px] border-blue-400"
              >
                <div className="text-white text-center">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold font-poppins">21+</span>
                </div>
                <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 opacity-30 rounded-lg -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:h-[173px] bg-[#3E3F95] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <p className="max-w-4xl text-center text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed sm:leading-6 md:leading-7 font-poppins">
          Our approach emphasizes holistic development, ensuring that every child grows intellectually, emotionally, socially, and ethically. Through guidance, discipline, and encouragement, we strive to empower our students to become thoughtful individuals and responsible global citizens.
        </p>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] order-2 lg:order-1 mb-8 lg:mb-0"
            >
              {/* 1. Main Logo Container (White Card) */}
              <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-[40px] shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 w-[90%] sm:w-[85%] h-[180px] xs:h-[220px] sm:h-[250px] md:h-[280px] lg:h-[320px] flex flex-col items-center justify-center relative">
                <img
                  src="/LPS LOGO 1.png"
                  alt="LPS Logo"
                  className="max-w-[80%] sm:max-w-[85%] md:max-w-full h-auto object-contain"
                />
              </div>

              {/* 2. Overlapping LPS Meaning Card (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-[-20px] xs:bottom-[-25px] sm:bottom-[-30px] md:bottom-[-40px] lg:bottom-[-55px] right-2 xs:right-4 sm:right-6 md:right-10 lg:right-20 w-[65%] xs:w-[60%] sm:w-[55%] md:w-[280px] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-[35px] shadow-2xl z-20"
                style={{ background: "#3E4095" }}
              >
                <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
                  <li className="flex items-center text-white font-poppins font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#00C3FF] rounded-full mr-2 xs:mr-3 sm:mr-4 flex-shrink-0"></span>
                    L = Learn
                  </li>
                  <li className="flex items-center text-white font-poppins font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#00C3FF] rounded-full mr-2 xs:mr-3 sm:mr-4 flex-shrink-0"></span>
                    P = Progress
                  </li>
                  <li className="flex items-center text-white font-poppins font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#00C3FF] rounded-full mr-2 xs:mr-3 sm:mr-4 flex-shrink-0"></span>
                    S = Shine
                  </li>
                </ul>
              </motion.div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span><svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.3945 1.44312C6.00655 1.17787 5.52911 1.0776 5.06723 1.16436C4.60534 1.25113 4.19684 1.51782 3.93159 1.90578C3.66634 2.29373 3.56607 2.77116 3.65284 3.23305C3.7396 3.69493 4.0063 4.10343 4.39425 4.36868L7.42613 6.43981C7.61816 6.57158 7.83434 6.6641 8.06224 6.71208C8.29014 6.76005 8.52528 6.76252 8.75414 6.71934C8.983 6.67617 9.20107 6.5882 9.39583 6.4605C9.59059 6.33279 9.7582 6.16786 9.88903 5.97518C10.0203 5.78325 10.1125 5.56732 10.1603 5.33974C10.2081 5.11216 10.2106 4.87738 10.1677 4.64884C10.1247 4.42029 10.0371 4.20245 9.90993 4.00777C9.78273 3.81309 9.61842 3.64539 9.42638 3.51424L6.3945 1.44312ZM7.16625 15.2342C7.16625 14.7643 6.97957 14.3136 6.64728 13.9813C6.31499 13.649 5.86431 13.4623 5.39437 13.4623H1.77187C1.30194 13.4623 0.851261 13.649 0.51897 13.9813C0.186679 14.3136 0 14.7643 0 15.2342C0 15.7041 0.186679 16.1548 0.51897 16.4871C0.851261 16.8194 1.30194 17.0061 1.77187 17.0061H5.39437C5.62706 17.0061 5.85747 16.9603 6.07244 16.8712C6.28742 16.7822 6.48275 16.6517 6.64728 16.4871C6.81181 16.3226 6.94233 16.1273 7.03137 15.9123C7.12042 15.6973 7.16625 15.4669 7.16625 15.2342ZM7.42809 24.0286L4.39622 26.0997C4.20399 26.2311 4.03952 26.399 3.91219 26.5939C3.78486 26.7888 3.69716 27.0069 3.65411 27.2357C3.61106 27.4645 3.61349 27.6995 3.66127 27.9273C3.70905 28.1552 3.80124 28.3714 3.93258 28.5636C4.06392 28.7559 4.23183 28.9203 4.42673 29.0477C4.62163 29.175 4.83971 29.2627 5.0685 29.3057C5.29729 29.3488 5.53233 29.3464 5.76018 29.2986C5.98803 29.2508 6.20424 29.1586 6.39647 29.0273L9.42834 26.9562C9.62057 26.8248 9.78504 26.6569 9.91237 26.462C10.0397 26.2671 10.1274 26.049 10.1705 25.8202C10.2135 25.5914 10.2111 25.3564 10.1633 25.1285C10.1155 24.9007 10.0233 24.6845 9.89198 24.4923C9.76065 24.3 9.59273 24.1356 9.39783 24.0082C9.20293 23.8809 8.98486 23.7932 8.75606 23.7502C8.52727 23.7071 8.29224 23.7095 8.06438 23.7573C7.83653 23.8051 7.62032 23.8973 7.42809 24.0286ZM50.2445 6.7489C50.6008 6.74904 50.9488 6.64128 51.2426 6.43981L54.2745 4.36868C54.4666 4.23734 54.6309 4.06946 54.7581 3.8746C54.8854 3.67975 54.9729 3.46175 55.0159 3.23305C55.0589 3.00435 55.0564 2.76942 55.0085 2.54169C54.9607 2.31395 54.8685 2.09787 54.7372 1.90578C54.6058 1.71368 54.4379 1.54933 54.2431 1.42212C54.0482 1.29491 53.8302 1.20732 53.6015 1.16436C53.3728 1.1214 53.1379 1.12391 52.9102 1.17174C52.6824 1.21956 52.4663 1.31178 52.2743 1.44312L49.2424 3.51424C48.9297 3.72796 48.6938 4.03623 48.5691 4.39385C48.4445 4.75147 48.4377 5.13961 48.5498 5.50137C48.6618 5.86312 48.8869 6.17945 49.1919 6.40397C49.4968 6.62848 49.8658 6.74937 50.2445 6.7489ZM56.8969 13.4604H53.2744C52.8044 13.4604 52.3538 13.647 52.0215 13.9793C51.6892 14.3116 51.5025 14.7623 51.5025 15.2322C51.5025 15.7022 51.6892 16.1529 52.0215 16.4851C52.3538 16.8174 52.8044 17.0041 53.2744 17.0041H56.8969C57.3668 17.0041 57.8175 16.8174 58.1498 16.4851C58.4821 16.1529 58.6687 15.7022 58.6687 15.2322C58.6687 14.7623 58.4821 14.3116 58.1498 13.9793C57.8175 13.647 57.3668 13.4604 56.8969 13.4604ZM51.2407 24.0286C51.0486 23.8973 50.8325 23.8051 50.6047 23.7572C50.377 23.7094 50.1421 23.7069 49.9134 23.7499C49.6847 23.7928 49.4667 23.8804 49.2718 24.0076C49.077 24.1348 48.9091 24.2992 48.7777 24.4913C48.6464 24.6834 48.5542 24.8995 48.5064 25.1272C48.4585 25.3549 48.456 25.5898 48.499 25.8185C48.542 26.0472 48.6295 26.2653 48.7568 26.4601C48.884 26.655 49.0483 26.8228 49.2404 26.9542L52.2723 29.0253C52.4643 29.1571 52.6805 29.2496 52.9084 29.2976C53.1363 29.3455 53.3714 29.348 53.6003 29.3048C53.8292 29.2617 54.0472 29.1737 54.242 29.046C54.4368 28.9183 54.6044 28.7534 54.7352 28.5607C54.8665 28.3686 54.9588 28.1525 55.0066 27.9248C55.0544 27.697 55.057 27.4621 55.014 27.2334C54.971 27.0047 54.8834 26.7867 54.7562 26.5918C54.629 26.397 54.4646 26.2291 54.2725 26.0978L51.2407 24.0286ZM29.3344 2.53489e-05C20.3273 -0.0137559 13.0036 7.30999 13.0036 16.3308C13.0036 20.5124 14.5825 24.3279 17.1852 27.2081C19.0752 29.3127 20.2525 31.9272 20.4494 34.717H38.2213C38.4182 31.9272 39.5935 29.3108 41.4855 27.2081C44.1831 24.2283 45.6739 20.3503 45.6671 16.3308C45.6652 7.30999 38.3414 -0.0157247 29.3344 2.53489e-05ZM26.9364 8.98737C25.9183 9.32207 24.9807 9.86444 24.183 10.5802C23.3853 11.2959 22.7448 12.1694 22.302 13.1454C22.1078 13.5735 21.7514 13.907 21.3113 14.0724C20.8712 14.2378 20.3834 14.2216 19.9552 14.0274C19.5271 13.8331 19.1936 13.4768 19.0282 13.0367C18.8628 12.5966 18.879 12.1088 19.0732 11.6806C19.7203 10.2577 20.6553 8.98437 21.8193 7.94103C22.9833 6.89768 24.3509 6.10698 25.8359 5.61884C26.2826 5.4729 26.769 5.51039 27.188 5.72305C27.6071 5.93572 27.9245 6.30614 28.0704 6.75284C28.2164 7.19953 28.1789 7.68591 27.9662 8.10496C27.7536 8.52402 27.3831 8.84143 26.9364 8.98737ZM20.4868 37.676V40.4303C20.4868 42.7081 22.3335 44.5528 24.6094 44.5528H34.0594C35.1527 44.5528 36.2013 44.1185 36.9745 43.3454C37.7476 42.5722 38.1819 41.5237 38.1819 40.4303V37.676H20.4868Z" fill="#3E3F95" />
              </svg>
              </span>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[50px] tracking-[0.2px] text-[#252B42] mb-4 sm:mb-6">
                About Logo
              </h2>

              <p className="text-sm sm:text-base md:text-[18px] text-[#737373] mb-3 sm:mb-4 leading-relaxed sm:leading-[28px] font-poppins">
                Our school is a place where learning meets values, and education is shaped with purpose. We are committed to providing a safe, supportive, and inspiring environment that encourages students to achieve academic excellence while developing strong moral character.
              </p>

              <p className="text-sm sm:text-base md:text-[18px] text-[#737373] mb-4 sm:mb-6 leading-relaxed sm:leading-[28px] font-poppins">
                With a focus on holistic development, our school nurtures intellectual growth, creativity, discipline, and social responsibility. We believe that every child has unique potential, and our dedicated educators work closely with students to help them discover their strengths and build confidence.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90 w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                style={{
                  borderRadius: "4.15px",
                  background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
                }}
              >
                Read More
                <svg
                  className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
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

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              House system
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "0.2px"
            }}>
              Building teamwork, leadership, and school spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-center">
            {[
              {
                image: "/house/1.png",
                description: "The House System is a vital part of school life, created to foster unity, leadership, discipline, and a spirit of healthy competition among students. It provides a structured platform where students from different age groups work together, creating strong bonds and a sense of belonging within the school community."
              },
              {
                image: "/house/2.png",
                description: "Through regular inter-house competitions, students learn to handle success with humility and challenges with determination. The House System plays a key role in identifying leadership potential, building confidence, and nurturing well-rounded individuals who contribute positively to the school environment."
              },
              {
                image: "/house/3.png",
                description: "Each house represents strong values such as integrity, cooperation, perseverance, and respect. Students participate in various academic, sports, cultural, and co-curricular activities, earning points for their houses through effort, teamwork, and positive conduct."
              },
              {
                image: "/house/4.png",
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
                className="bg-white transition-all duration-300 w-full max-w-full"
                style={{
                  borderRadius: "13px",
                  boxShadow: "0px 0px 24px 0px rgba(176, 176, 176, 0.3)"
                }}
              >
                <div className="flex items-center justify-center overflow-hidden p-2 sm:p-4 bg-gray-100 aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3]" style={{ width: "100%", borderRadius: "13px 13px 0 0" }}>
                  <img src={house.image} alt={house.title} className="w-full h-full rounded-xl sm:rounded-2xl object-contain" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {house.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4" style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: "0.2px"
                  }}>
                    {house.description}
                  </p>
                  <button className="inline-flex items-center justify-center text-white font-semibold transition hover:opacity-90 w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                    style={{
                      borderRadius: "4.15px",
                      background: "linear-gradient(90deg, #00C3FF 0%, #333493 100%)",
                    }}
                  >
                    Read More
                    <svg
                      className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
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

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                lineHeight: "1.2",
                letterSpacing: "0.2px",
                color: "#252B42"
              }}>
              Authorized School Certificates
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                lineHeight: "140%",
                letterSpacing: "0%",
                color: "#9F9F9F"
              }}>
              Backed by trusted certifications and verified audits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="aspect-[4/3] sm:aspect-[3/2] flex items-center justify-center bg-gray-50 p-2 sm:p-3">
                  <img src={certificate.image} alt={certificate.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-800 mt-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      lineHeight: "140%",
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

