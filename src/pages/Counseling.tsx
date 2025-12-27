import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Smile, Phone, MessageCircle } from 'lucide-react';

const counselingTypes = [
  {
    id: 'personal',
    title: '개인상담',
    icon: Brain,
    description: '개인적인 고민과 스트레스를 해결합니다',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'couple',
    title: '연애상담',
    icon: Heart,
    description: '연애와 결혼에 관한 고민을 나눕니다',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'family',
    title: '가족상담',
    icon: Users,
    description: '가족 간의 갈등을 해결합니다',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'career',
    title: '진로상담',
    icon: Smile,
    description: '직업과 진로에 대한 방향을 찾습니다',
    color: 'from-amber-500 to-orange-600',
  },
];

const Counseling = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-pink-700 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              💚 전문 심리상담
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              심리상담
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              전문 심리상담사와 함께 마음의 짐을 내려놓으세요.
              당신의 이야기를 경청하고 함께 해결책을 찾아드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Counseling Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              상담 분야
            </h2>
            <p className="text-muted-foreground">
              다양한 분야의 전문 상담을 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {counselingTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              >
                <div className={`h-32 bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                  <type.icon className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card rounded-3xl shadow-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              지금 바로 상담 시작하기
            </h2>
            <p className="text-muted-foreground mb-8">
              전문 상담사가 24시간 대기하고 있습니다
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0504-0987-2001"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                전화 상담
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                채팅 상담
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Counseling;
