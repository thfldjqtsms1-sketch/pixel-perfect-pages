import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  UserPlus, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Star,
  ChevronRight 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: '상담사 검색',
    description: '원하는 분야의 상담사를 검색하세요. 신점, 사주, 타로, 심리상담 등 다양한 분야의 전문가를 찾을 수 있습니다.',
  },
  {
    id: 2,
    icon: Star,
    title: '후기 확인',
    description: '다른 이용자들의 생생한 후기를 확인하세요. 상담사의 전문성과 상담 스타일을 미리 파악할 수 있습니다.',
  },
  {
    id: 3,
    icon: Calendar,
    title: '예약하기',
    description: '원하는 날짜와 시간을 선택하여 예약하세요. 상담사의 일정을 실시간으로 확인할 수 있습니다.',
  },
  {
    id: 4,
    icon: MessageCircle,
    title: '상담 진행',
    description: '전화, 채팅, 영상통화 등 원하는 방식으로 상담을 진행합니다. 편한 방식을 선택하세요.',
  },
];

const faqs = [
  {
    question: '상담 비용은 어떻게 되나요?',
    answer: '상담 비용은 상담사와 상담 유형에 따라 다릅니다. 각 상담사 프로필에서 상세 비용을 확인하실 수 있습니다.',
  },
  {
    question: '예약 취소는 어떻게 하나요?',
    answer: '예약 취소는 마이페이지에서 가능합니다. 상담 24시간 전까지 무료 취소가 가능합니다.',
  },
  {
    question: '상담 내용은 비밀이 보장되나요?',
    answer: '네, 모든 상담 내용은 철저히 비밀이 보장됩니다. 상담사는 비밀유지 서약을 준수합니다.',
  },
  {
    question: '환불은 어떻게 받나요?',
    answer: '상담 불만족 시 24시간 이내에 고객센터로 문의해주시면 환불 검토가 가능합니다.',
  },
];

const Guide = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              이용방법
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              운명의창 이용 방법을 안내해드립니다.
              간단한 4단계로 전문 상담을 받아보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              이용 단계
            </h2>
            <p className="text-muted-foreground">
              간단한 4단계로 상담을 시작하세요
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 mb-8 last:mb-0"
              >
                {/* Step Number & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif font-bold text-xl text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            고객센터로 문의해주세요
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0504-0987-2001"
              className="flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-bold hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0504-0987-2001
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 문의
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Guide;
