import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, MapPin, Clock } from 'lucide-react';

const consultants = [
  {
    id: 1,
    name: '청운 선생님',
    specialty: '신점 · 사주',
    experience: '경력 25년',
    rating: 4.9,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    description: '신명이 뚜렷하여 정확한 신탁을 전해드립니다.',
    location: '서울 강남구',
  },
  {
    id: 2,
    name: '월하 선생님',
    specialty: '신점 · 타로',
    experience: '경력 18년',
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    description: '달의 기운을 받아 밤에도 상담 가능합니다.',
    location: '서울 마포구',
  },
  {
    id: 3,
    name: '현암 선생님',
    specialty: '신점 · 작명',
    experience: '경력 30년',
    rating: 5.0,
    reviews: 2103,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    description: '3대째 이어온 전통 신내림 가문 출신입니다.',
    location: '경기 성남시',
  },
  {
    id: 4,
    name: '소월 선생님',
    specialty: '신점 · 궁합',
    experience: '경력 15년',
    rating: 4.7,
    reviews: 654,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    description: '연애와 궁합 전문 상담으로 인기가 높습니다.',
    location: '부산 해운대구',
  },
];

const Sinjeom = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              🪭 전통 신점 상담
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              신점
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              신령의 계시를 통해 과거와 현재, 미래를 꿰뚫어 보는 전통 신점입니다.
              검증된 신점 전문가들이 정확한 상담을 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              신점 전문 상담사
            </h2>
            <p className="text-muted-foreground">
              엄선된 신점 전문가들과 상담하세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultants.map((consultant, index) => (
              <motion.div
                key={consultant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-korean-dark/80 backdrop-blur-sm rounded-full">
                    <div className="flex items-center gap-1 text-secondary text-sm">
                      <Star className="w-4 h-4 fill-secondary" />
                      <span className="font-bold">{consultant.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif font-bold text-lg text-foreground">
                      {consultant.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      ({consultant.reviews} 리뷰)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {consultant.specialty}
                    </span>
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      {consultant.experience}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {consultant.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    {consultant.location}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      <Phone className="w-4 h-4" />
                      전화상담
                    </button>
                    <button className="flex items-center justify-center gap-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      채팅상담
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">검증된 상담사</h3>
              <p className="text-sm text-muted-foreground">
                철저한 검증을 거친 전문 상담사만 활동합니다
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">24시간 상담</h3>
              <p className="text-sm text-muted-foreground">
                언제든 편한 시간에 상담 받으실 수 있습니다
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">비밀 보장</h3>
              <p className="text-sm text-muted-foreground">
                모든 상담 내용은 철저히 비밀이 보장됩니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sinjeom;
