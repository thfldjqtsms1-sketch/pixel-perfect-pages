import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, MousePointerClick } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const targetVisitors = 1684;
  const targetClicks = 650;

  useEffect(() => {
    if (isInView) {
      const visitorTimer = setInterval(() => {
        setVisitorCount((prev) => {
          if (prev >= targetVisitors) {
            clearInterval(visitorTimer);
            return targetVisitors;
          }
          return prev + Math.ceil(targetVisitors / 50);
        });
      }, 30);

      const clickTimer = setInterval(() => {
        setClickCount((prev) => {
          if (prev >= targetClicks) {
            clearInterval(clickTimer);
            return targetClicks;
          }
          return prev + Math.ceil(targetClicks / 50);
        });
      }, 30);

      return () => {
        clearInterval(visitorTimer);
        clearInterval(clickTimer);
      };
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">
            오늘의 방문자 & 문의하기 클릭수
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-primary-foreground/80 text-sm mb-2">오늘 방문자 수</p>
            <p className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">
              {Math.min(visitorCount, targetVisitors).toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <MousePointerClick className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-primary-foreground/80 text-sm mb-2">문의하기 클릭 수</p>
            <p className="text-5xl md:text-6xl font-bold text-primary-foreground font-serif">
              {Math.min(clickCount, targetClicks).toLocaleString()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
