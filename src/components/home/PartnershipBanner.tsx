import { motion } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const PartnershipBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative bg-primary rounded-2xl shadow-2xl overflow-hidden max-w-sm">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 p-1 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 pt-8">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full mb-3">
              무료 제휴 이벤트 안내
            </span>
            <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
              무료 제휴 이벤트 안내
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              전국의 점집, 타로샵, 철학관, 심리상담소를 대상으로{' '}
              <span className="text-secondary font-bold">오픈기념 무료제휴</span> 이벤트를 진행합니다.
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-primary-foreground/90 text-sm text-center">
              광고 전문 회사가 직접 운영하는
              <br />
              사주 플랫폼과 함께 성장 하세요!
            </p>
            <p className="text-secondary text-xs text-center font-medium">
              ※ 무료제휴 이벤트는 조기종료 될 수 있습니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:0504-0987-2001"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>문의전화</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>카톡문의</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnershipBanner;
