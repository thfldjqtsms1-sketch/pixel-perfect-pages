import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Moon, Sparkles } from 'lucide-react';

const quickLinks = [
  {
    id: 'zodiac',
    name: '띠별운세',
    icon: Star,
    href: '/zodiac-fortune',
    color: 'bg-primary',
  },
  {
    id: 'constellation',
    name: '별자리운세',
    icon: Moon,
    href: '/constellation',
    color: 'bg-secondary',
  },
  {
    id: 'dream',
    name: '꿈해몽',
    icon: Sparkles,
    href: '/dream',
    color: 'bg-accent',
  },
  {
    id: 'community',
    name: '커뮤니티',
    icon: Heart,
    href: '/community',
    color: 'bg-primary',
  },
];

const QuickLinks = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full ${link.color} text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <link.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
