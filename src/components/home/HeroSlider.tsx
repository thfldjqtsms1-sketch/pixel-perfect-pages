import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-temple.jpg';

const slides = [
  {
    id: 1,
    image: heroImage,
    title: '운명의창과 함께하는\n새로운 시작',
    subtitle: '전통 사주명리학과 AI 기술의 만남',
  },
  {
    id: 2,
    image: heroImage,
    title: '2025년 을사년\n띠별 운세 확인하세요',
    subtitle: '새해 운세로 한 해를 미리 준비하세요',
  },
  {
    id: 3,
    image: heroImage,
    title: '전문 상담사와\n1:1 심층 상담',
    subtitle: '사주, 신점, 타로까지 모든 상담을 한곳에서',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-korean-dark/60 via-korean-dark/40 to-korean-dark/80" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 opacity-20 animate-cloud-float">
        <svg viewBox="0 0 100 60" className="w-full h-full fill-primary-foreground">
          <path d="M90 35c0-11-8.9-20-20-20-3.5 0-6.8.9-9.7 2.5C57.3 8.5 48.3 2 38 2 24.7 2 14 12.7 14 26c0 1.3.1 2.6.3 3.8C6.1 32.5 0 40.5 0 50h100c0-8.3-4.5-15.5-10-15z"/>
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-24 h-16 opacity-15 animate-cloud-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 60" className="w-full h-full fill-primary-foreground">
          <path d="M90 35c0-11-8.9-20-20-20-3.5 0-6.8.9-9.7 2.5C57.3 8.5 48.3 2 38 2 24.7 2 14 12.7 14 26c0 1.3.1 2.6.3 3.8C6.1 32.5 0 40.5 0 50h100c0-8.3-4.5-15.5-10-15z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight whitespace-pre-line mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-korean px-8 py-4 text-lg">
                무료 운세 보기
              </button>
              <button className="btn-korean-outline bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-korean-dark px-8 py-4 text-lg">
                상담 예약하기
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
