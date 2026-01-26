import HeroSection from '../components/sections/HeroSection'
import SecondHeroSection from '../components/sections/SecondHeroSection'
import FeatureCards from '../components/sections/FeatureCards'
import EducationalOfferings from '../components/sections/EducationalOfferings'
import GallerySection from '../components/sections/GallerySection'
import InternshipCTA from '../components/sections/InternshipCTA'
import FAQSection from '../components/sections/FAQSection'
import ContactFormSection from '../components/sections/ContactFormSection'

const Home = () => {

  const featureCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: 'School Library',
      description: 'The student and teacher handbooks',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: 'Bus Schedule',
      description: 'The theme is carried over into family',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
      ),
      title: 'School Calendar',
      description: 'All students had to bring at least.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'School Fees',
      description: 'Create a happy environment for your child in which they can thrive.',
    },
  ]

  const educationOfferings = [
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Classroom" className="w-7 h-7" />,
      title: 'Classroom',
      description: <>our well-designed classrooms are<br /> perfectly embellished with proper<br /> room for ventilation and natural<br /> light.</>,
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Computer Lab" className="w-7 h-7" />,
      title: 'Computer Lab',
      description: <>Our computer lab has extensive<br /> range of equipment that rightly<br /> fulfills the need of our day<br />-to-day work.</>,
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Laboratory" className="w-7 h-7" />,
      title: 'Laboratory',
      description: <>A well-organized laboratory is a<br /> vital source of practical learning<br /> for students. Our laboratory is<br /> designed.</>,
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Science Lab" className="w-7 h-7" />,
      title: 'Science Lab',
      description: <>LPS is well-known for instilling<br /> discipline and enriching every<br /> aspect of a student's life. At LPS, we<br /> believe in teaching our students...</>,
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Playground" className="w-7 h-7" />,
      title: 'Playground',
      description: 'A fun-filled opportunity with an array of outdoor games and activities, our playground offers enough',
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Library" className="w-7 h-7" />,
      title: 'Library',
      description: 'Our library offers access to a variety of resources with new knowledge and personal development.',
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Chemistry Lab" className="w-7 h-7" />,
      title: 'Chemistry Lab',
      description: 'Learning chemistry is an absolute fun at our school. The overall setting, equipment and environmen',
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Biology Lab" className="w-7 h-7" />,
      title: 'Biology Lab',
      description: 'The biology lab is well-structured and equipped with all the necessary tools and equipment. This lab',
    },
    {
      icon: <img src="/svg/XMLID_817_.svg" alt="Physics Lab" className="w-7 h-7" />,
      title: 'Physics Lab',
      description: 'Conducting experiments in a lab is the fundamental of effective learning. Our school applies the same',
    },
  ]

  const galleryImages = [
    { id: 5, title: 'Kargil Vijay Diwas', image: '/gallery/8fd26a07fee815dfedd9961efe54556f4c61cd4b.jpg' },
    { id: 1, title: 'Martial Arts', image: '/gallery/67e9ff829b918ec4cac0b4fd5689f133e2a4e6f2.jpg' },
    { id: 4, title: 'Student Activities', image: '/gallery/772d21f889d1b48b41031fa3d450ccaee720390e.jpg' },
    { id: 3, title: 'Yoga Session', image: '/gallery/713d3d8b7f0b0a674e3141c8b282d8af8fc11f03.jpg' },
    { id: 6, title: 'Panel Discussion', image: '/gallery/a107eb46a3a80b0bed064dcfc75fa411a8c48a74.jpg' },
    { id: 2, title: 'Award Ceremony', image: '/gallery/6c3e3dd551b6b26721b711c2b843dbdc9ec8da40.jpg' },
  ]

  const faqItems = [
    {
      question: 'The language materials include objects',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      question: 'What are the admission requirements?',
      answer:
        'Admission requirements vary by grade level. Please contact our admissions office for detailed information about the application process, required documents, and deadlines.',
    },
    {
      question: 'What extracurricular activities are available?',
      answer:
        'We offer a wide range of extracurricular activities including sports, arts, music, drama, debate, and various clubs. Students can choose activities based on their interests.',
    },
    {
      question: 'How do I contact the school?',
      answer:
        'You can contact us through our contact form on this website, call us at the provided phone number, or visit us during school hours. Our staff will be happy to assist you.',
    },
  ]

  return (
    <div className="pt-28 md:pt-32">
      <HeroSection />
      <SecondHeroSection />
      <FeatureCards cards={featureCards} />
      <EducationalOfferings offerings={educationOfferings} />
      <GallerySection images={galleryImages} />
      <InternshipCTA />
      <FAQSection faqItems={faqItems} />
      <ContactFormSection />
    </div>
  )
}

export default Home
