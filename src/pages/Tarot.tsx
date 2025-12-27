import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shuffle, Eye, Sparkles } from 'lucide-react';

const tarotCards = [
  { id: 1, name: '바보', meaning: '새로운 시작, 순수함', reversed: '무모함, 경솔' },
  { id: 2, name: '마법사', meaning: '창조력, 능력', reversed: '속임수, 망상' },
  { id: 3, name: '여사제', meaning: '직관, 신비', reversed: '비밀, 숨겨진 것' },
  { id: 4, name: '여황제', meaning: '풍요, 모성', reversed: '의존, 공허' },
  { id: 5, name: '황제', meaning: '권위, 안정', reversed: '지배욕, 경직' },
  { id: 6, name: '교황', meaning: '전통, 교육', reversed: '편견, 억압' },
];

const Tarot = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setSelectedCard(null);
    setTimeout(() => {
      setIsShuffling(false);
    }, 1500);
  };

  const handleCardSelect = (index: number) => {
    if (!isShuffling) {
      setSelectedCard(index);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              🃏 신비로운 타로
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              타로
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              카드가 전하는 메시지를 통해 미래의 길을 찾아보세요.
              직관적인 타로 리딩으로 당신의 질문에 답합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tarot Reading Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              오늘의 타로 카드를 뽑아보세요
            </h2>
            <p className="text-muted-foreground mb-8">
              마음을 집중하고 카드 한 장을 선택해주세요
            </p>
            
            <button
              onClick={handleShuffle}
              disabled={isShuffling}
              className="flex items-center justify-center gap-2 mx-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Shuffle className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} />
              카드 섞기
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
            {tarotCards.map((card, index) => (
              <motion.button
                key={card.id}
                onClick={() => handleCardSelect(index)}
                initial={{ rotateY: 180 }}
                animate={{ 
                  rotateY: selectedCard === index ? 0 : 180,
                  scale: selectedCard === index ? 1.1 : 1,
                }}
                whileHover={{ scale: isShuffling ? 1 : 1.05 }}
                transition={{ duration: 0.6 }}
                className={`aspect-[2/3] rounded-xl relative cursor-pointer transform-gpu ${
                  isShuffling ? 'animate-pulse' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Back */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                
                {/* Card Front */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 p-3 flex flex-col items-center justify-center shadow-lg"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-2xl mb-1">✨</span>
                  <span className="text-xs font-bold text-purple-800 text-center">
                    {card.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Card Reading */}
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto bg-card rounded-2xl shadow-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {tarotCards[selectedCard].name}
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">정방향</span>
                  <p className="font-medium text-foreground">{tarotCards[selectedCard].meaning}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">역방향</span>
                  <p className="font-medium text-foreground">{tarotCards[selectedCard].reversed}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tarot;
