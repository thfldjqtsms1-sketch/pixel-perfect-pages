import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Users, Target, Dice1 } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiServices = [
  {
    id: 'ai-saju',
    name: 'AI 사주',
    icon: Bot,
    description: 'AI가 분석하는 정확한 사주팔자',
    features: ['생년월일 자동 분석', '상세한 운세 해석', '맞춤형 조언 제공'],
    color: 'from-blue-500 to-cyan-500',
    href: '#',
  },
  {
    id: 'ai-compatibility',
    name: 'AI 궁합',
    icon: Users,
    description: '두 사람의 궁합을 AI로 분석',
    features: ['연애 궁합 분석', '결혼 궁합 분석', '친구/동료 궁합'],
    color: 'from-pink-500 to-rose-500',
    href: '#',
  },
  {
    id: 'ai-fortune',
    name: 'AI 운세',
    icon: Sparkles,
    description: '오늘의 운세를 AI가 알려드립니다',
    features: ['일일 운세', '주간/월간 운세', '띠별/별자리별'],
    color: 'from-purple-500 to-violet-500',
    href: '#',
  },
  {
    id: 'ai-lotto',
    name: 'AI 로또',
    icon: Dice1,
    description: 'AI 알고리즘 기반 번호 추천',
    features: ['통계 기반 분석', '행운의 번호 추천', '당첨 확률 향상'],
    color: 'from-green-500 to-emerald-500',
    href: '#',
  },
];

const AIServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-indigo-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              🤖 AI 기반 서비스
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              AI 서비스
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              전통 명리학과 최신 AI 기술의 만남.
              빠르고 정확한 AI 분석 서비스를 경험해보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className={`h-40 bg-gradient-to-br ${service.color} p-6 flex items-end`}>
                    <div>
                      <service.icon className="w-12 h-12 text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-foreground font-medium mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      시작하기
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              AI 서비스의 특징
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: '빠른 분석', description: '몇 초 만에 결과를 확인할 수 있습니다', icon: '⚡' },
              { title: '높은 정확도', description: '빅데이터 기반의 정확한 분석', icon: '🎯' },
              { title: '무료 이용', description: '기본 서비스는 무료로 제공됩니다', icon: '🆓' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServices;
