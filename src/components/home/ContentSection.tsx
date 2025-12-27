import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: '사주사이트가 생겨난 배경과 사주어플',
    content: `사주사이트가 생겨난 이유와 배경은 주로 현대 사회에서 운세 및 점술 서비스에 대한 수요 증가와 정보 기술의 발달로 인해 사람들이 점차 과거의 지인들의 소개로 찾아가던 방식에서 벗어나 사주어플과 같은 플랫폼을 통하여 정보를 접하고 있습니다.

사주사이트 상담을 요청하기 위해 사주 명리 전문가를 직접 찾아가야 하는 과거와는 달리 인터넷의 전문가로 사람들이 언제든지 쉽게 자신의 사주를 확인하고 싶어하는 온라인 플랫폼에서 사용자에 대한 수요를 충족시키려는 사주사이트가 발전하게 된 특징입니다.`,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=400&fit=crop',
  },
  {
    id: 2,
    title: '사주사이트의 특징과 사주어플의 매력',
    content: `사주사이트는 사주 명리학을 기반으로 다양한 사용자 기능을 제공하는 것이 특징입니다. 일반적으로 이러한 사주사이트는 사용자가 생년월일과 출생을 입력하면 자동으로 사주 팔자를 확인하고, 다양한 설명을 제공합니다.

이러한 사주어플에서 제공되는 여러가지 해석은 개인의 성격, 운세, 직업, 인간관계, 건강 등 다양한 측면을 포함하여 정보를 제공합니다.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
  },
  {
    id: 3,
    title: '사주사이트가 주는 편의성과 장점',
    content: `사주사이트는 다양한 편의성을 제공하는 장점이 있습니다. 특히 현대의 사주사이트는 과거의 소개를 받아 찾아가는 방식이 아닌, 필요시 언제든지 인터넷에 접속할 수 있어, 특별한 일상 속에서 시간과 장소에 구애받지 않고 사주 상담 서비스를 받을 수 있습니다.

또한 사주어플의 경우 일일 운세, 월간 운세 등의 예측 기능과 특정 범위에 대한 탐구 가능 여부를 확인하고, 해석 결과를 그래프로 나타내어 이해하기 쉽게 제공합니다.`,
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=500&h=400&fit=crop',
  },
  {
    id: 4,
    title: '사주사이트와 사주어플의 올바른 접근법',
    content: `사주사이트를 이용할 때 가장 중요하게 여겨야 할 점은 사주어플을 너무 많이 믿는 것은 몇 가지 위험과 부정적인 영향이 있을 수 있습니다.

우선 사주사이트의 너무 과도한 맹목적인 신뢰는 개인의 자율적인 결정권을 약화시킬 수 있습니다. 사주사이트를 이용할 때 너무 지나친 믿음은 자기 성찰과 성장의 기회를 오히려 심각하게 방해하는 요인이 됩니다.`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop',
  },
];

const ContentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            사주사이트 이야기
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            사주명리학의 역사와 현대적 활용에 대해 알아보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="aspect-square sm:aspect-auto overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {article.content}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
