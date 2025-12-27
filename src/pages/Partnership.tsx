import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  BadgeCheck, 
  Phone, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: '매출 증가',
    description: '월 평균 30% 이상의 신규 고객 유입 효과',
  },
  {
    icon: Users,
    title: '고객 확보',
    description: '매일 수천 명의 방문자에게 노출',
  },
  {
    icon: BadgeCheck,
    title: '신뢰도 향상',
    description: '검증된 플랫폼에서 활동하는 전문가로 인정',
  },
];

const requirements = [
  '점술/상담 관련 경력 3년 이상',
  '관련 자격증 또는 수료증 보유',
  '정기적인 상담 가능',
  '온라인 상담 환경 구축',
];

const Partnership = () => {
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
              🤝 함께 성장해요
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              업무제휴
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              운명의창과 함께 성장할 파트너를 모집합니다.
              전국의 점집, 타로샵, 철학관, 심리상담소의 입점을 환영합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Banner */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-2">
              ✨ 오픈기념 이벤트
            </span>
            <h2 className="text-2xl font-bold text-secondary-foreground">
              무료 제휴 이벤트 진행 중!
            </h2>
            <p className="text-secondary-foreground/80 mt-1">
              선착순 마감 | 지금 바로 신청하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              제휴 혜택
            </h2>
            <p className="text-muted-foreground">
              운명의창과 함께하면 이런 혜택이 있어요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-card"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                입점 자격 요건
              </h2>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="text-center mb-6">
                <Handshake className="w-16 h-16 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  지금 바로 신청하세요
                </h3>
                <p className="text-muted-foreground mt-2">
                  담당자가 24시간 내 연락드립니다
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:0504-0987-2001"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  전화 문의
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-secondary/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡 문의
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnership;
