import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, HelpCircle, Users, Handshake } from 'lucide-react';

const infoCards = [
  {
    id: 'notice',
    title: '공지사항',
    subtitle: '운명의창 공지사항 [※중요]',
    icon: Bell,
    href: '/community',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&h=200&fit=crop',
  },
  {
    id: 'support',
    title: '고객센터',
    subtitle: '운명의창 고객센터',
    icon: HelpCircle,
    href: '/guide',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop',
  },
  {
    id: 'community',
    title: '커뮤니티',
    subtitle: '운명의창 공식 커뮤니티',
    icon: Users,
    href: '/community',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
  },
  {
    id: 'partnership',
    title: '업무제휴',
    subtitle: '운명의창 입점, 제휴문의',
    icon: Handshake,
    href: '/partnership',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
  },
];

const InfoCards = () => {
  return (
    <section className="py-16 md:py-24 bg-korean-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-korean w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-secondary font-medium mb-2 block">NO.1 사주사이트</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
                운명의창
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                전통 사주명리학의 지혜와 현대 기술의 만남으로
                당신의 운명을 더 깊이 이해할 수 있도록 도와드립니다.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={card.href}
                    className="group block bg-primary-foreground/5 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-korean-dark/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-primary-foreground font-bold text-sm">
                          {card.title}
                        </h3>
                        <p className="text-primary-foreground/70 text-xs truncate">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <span className="text-secondary text-sm font-medium">GO</span>
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=700&fit=crop"
                alt="전통 문화"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-korean-dark via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-2">
                  NO.1 사주사이트
                </h3>
                <p className="text-primary-foreground/80">
                  점집 예약 · 사주어플
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
