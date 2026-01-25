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
      icon: '📚',
      title: 'School Library',
      description: 'Access to thousands of books and digital resources for comprehensive learning.',
    },
    {
      icon: '🚌',
      title: 'Bus Schedule',
      description: 'Convenient transportation services with safe and timely bus schedules.',
    },
    {
      icon: '🏫',
      title: 'School Facilities',
      description: 'State-of-the-art facilities for academic and extracurricular activities.',
    },
    {
      icon: '📖',
      title: 'Academic Programs',
      description: 'Comprehensive curriculum designed for holistic student development.',
    },
  ]

  const educationOfferings = [
    {
      icon: '🏛️',
      title: 'Classroom',
      description: 'Modern, well-equipped classrooms with smart boards and comfortable seating.',
    },
    {
      icon: '💻',
      title: 'Computer Lab',
      description: 'Fully equipped computer labs with latest technology and high-speed internet.',
    },
    {
      icon: '🔬',
      title: 'Laboratory',
      description: 'Advanced laboratories for hands-on scientific experiments and learning.',
    },
    {
      icon: '⚗️',
      title: 'Science Lab',
      description: 'State-of-the-art science labs for Physics, Chemistry, and Biology.',
    },
    {
      icon: '⚽',
      title: 'Playground',
      description: 'Spacious playgrounds for sports and physical activities.',
    },
    {
      icon: '📚',
      title: 'Library',
      description: 'Extensive library with books, journals, and digital resources.',
    },
    {
      icon: '🧪',
      title: 'Chemistry Lab',
      description: 'Well-equipped chemistry laboratory for practical experiments.',
    },
    {
      icon: '🌱',
      title: 'Biology Lab',
      description: 'Modern biology lab with microscopes and specimen collections.',
    },
    {
      icon: '⚛️',
      title: 'Physics Lab',
      description: 'Advanced physics laboratory with modern equipment and instruments.',
    },
  ]

  const galleryImages = [
    { id: 1, title: 'Martial Arts', icon: '🥋' },
    { id: 2, title: 'Award Ceremony', icon: '🏆' },
    { id: 3, title: 'Yoga Session', icon: '🧘' },
    { id: 4, title: 'Student Activities', icon: '👥' },
    { id: 5, title: 'Kargil Vijay Diwas', icon: '🇮🇳' },
    { id: 6, title: 'Panel Discussion', icon: '💬' },
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
