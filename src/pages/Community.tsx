import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Users, Plus } from 'lucide-react';
import { useState } from 'react';

const posts = [
  {
    id: 1,
    category: '후기',
    title: '사주 상담 받고 왔어요! 정말 신기했습니다',
    author: '행복한하루',
    date: '2025-12-27',
    views: 245,
    likes: 32,
    comments: 15,
  },
  {
    id: 2,
    category: '질문',
    title: '타로 상담 처음인데 어떤 분께 받으면 좋을까요?',
    author: '궁금이',
    date: '2025-12-26',
    views: 189,
    likes: 8,
    comments: 23,
  },
  {
    id: 3,
    category: '후기',
    title: '청운 선생님 신점 후기 (강추!!)',
    author: '밝은미래',
    date: '2025-12-25',
    views: 567,
    likes: 89,
    comments: 45,
  },
  {
    id: 4,
    category: '자유',
    title: '오늘 띠별운세 확인하셨나요?',
    author: '하루시작',
    date: '2025-12-25',
    views: 123,
    likes: 15,
    comments: 7,
  },
  {
    id: 5,
    category: '후기',
    title: 'AI 궁합 진짜 잘 맞네요 ㅋㅋ',
    author: '연애고수',
    date: '2025-12-24',
    views: 312,
    likes: 56,
    comments: 28,
  },
];

const categories = ['전체', '후기', '질문', '자유', '공지'];

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredPosts = activeCategory === '전체' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 pattern-korean opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              커뮤니티
            </h1>
            <p className="text-lg text-primary-foreground/80">
              다양한 후기와 정보를 나누는 공간입니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
            <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors">
              <Plus className="w-4 h-4" />
              글쓰기
            </button>
          </div>

          {/* Posts List */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                <a
                  href="#"
                  className="block p-4 md:p-6 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded w-fit">
                      {post.category}
                    </span>
                    <h3 className="flex-1 font-medium text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  page === 1
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
