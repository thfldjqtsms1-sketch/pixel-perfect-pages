import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Send } from 'lucide-react';

const Saju = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-amber-700 to-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              📜 전통 사주명리학
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              사주
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              태어난 연월일시 네 기둥으로 보는 당신의 운명.
              사주팔자를 통해 삶의 방향을 찾아보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Input Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-card p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                사주 정보 입력
              </h2>
              
              <form className="space-y-6">
                {/* Birth Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    생년월일 (양력)
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Birth Time */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    태어난 시간
                  </label>
                  <select
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">시간 선택</option>
                    <option value="23-01">자시 (23:00 ~ 01:00)</option>
                    <option value="01-03">축시 (01:00 ~ 03:00)</option>
                    <option value="03-05">인시 (03:00 ~ 05:00)</option>
                    <option value="05-07">묘시 (05:00 ~ 07:00)</option>
                    <option value="07-09">진시 (07:00 ~ 09:00)</option>
                    <option value="09-11">사시 (09:00 ~ 11:00)</option>
                    <option value="11-13">오시 (11:00 ~ 13:00)</option>
                    <option value="13-15">미시 (13:00 ~ 15:00)</option>
                    <option value="15-17">신시 (15:00 ~ 17:00)</option>
                    <option value="17-19">유시 (17:00 ~ 19:00)</option>
                    <option value="19-21">술시 (19:00 ~ 21:00)</option>
                    <option value="21-23">해시 (21:00 ~ 23:00)</option>
                    <option value="unknown">모름</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <User className="w-4 h-4 text-primary" />
                    성별
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-3 px-6 rounded-lg font-medium transition-all ${
                        gender === 'male'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      남성
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-3 px-6 rounded-lg font-medium transition-all ${
                        gender === 'female'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      여성
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  사주 분석하기
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            사주로 알 수 있는 것들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '성격과 기질', description: '타고난 성격과 성향을 분석합니다', icon: '🧠' },
              { title: '재물운', description: '재물 복과 경제적 운을 알려드립니다', icon: '💰' },
              { title: '직업운', description: '적성에 맞는 직업을 알아봅니다', icon: '💼' },
              { title: '연애운', description: '인연과 궁합을 분석합니다', icon: '💕' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Saju;
