import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'sinjeom',
    name: '신점',
    icon: '🪭',
    description: '신령의 계시를 통한 상담',
    href: '/sinjeom',
    color: 'from-rose-500 to-red-600',
  },
  {
    id: 'saju',
    name: '사주',
    icon: '📜',
    description: '사주팔자로 보는 운명',
    href: '/saju',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'nearby',
    name: '내주변',
    icon: '📍',
    description: '가까운 점술 상담소 찾기',
    href: '/nearby',
    color: 'from-emerald-500 to-green-600',
  },
  {
    id: 'tarot',
    name: '타로',
    icon: '🃏',
    description: '카드로 읽는 미래의 메시지',
    href: '/tarot',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'counseling',
    name: '심리상담',
    icon: '💚',
    description: '전문 심리 상담 서비스',
    href: '/counseling',
    color: 'from-pink-500 to-rose-600',
  },
];

const aiServices = [
  {
    id: 'ai-saju',
    name: 'AI 사주',
    icon: '🤖',
    description: 'AI로 분석하는 사주팔자',
    href: '/ai-services',
  },
  {
    id: 'ai-compatibility',
    name: 'AI 궁합',
    icon: '💑',
    description: 'AI 궁합 분석',
    href: '/ai-services',
  },
  {
    id: 'ai-fortune',
    name: 'AI 운세',
    icon: '🔮',
    description: 'AI 오늘의 운세',
    href: '/ai-services',
  },
  {
    id: 'ai-lotto',
    name: 'AI 로또',
    icon: '🎰',
    description: 'AI 번호 추천',
    href: '/ai-services',
  },
  {
    id: 'community',
    name: '게시판',
    icon: '👍',
    description: '커뮤니티 후기 게시판',
    href: '/community',
  },
];

const ServiceGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50 pattern-korean">
      <div className="container mx-auto px-4">
        {/* Main Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {aiServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block bg-card/80 backdrop-blur-sm rounded-2xl p-5 text-center border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-muted flex items-center justify-center text-3xl group-hover:bg-primary/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-medium text-foreground mb-0.5">
                  {service.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
