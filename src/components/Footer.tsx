import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: '신점', href: '/sinjeom' },
    { name: '사주', href: '/saju' },
    { name: '타로', href: '/tarot' },
    { name: '심리상담', href: '/counseling' },
  ];

  const aiLinks = [
    { name: 'AI 사주', href: '/ai-services' },
    { name: 'AI 궁합', href: '/ai-services' },
    { name: 'AI 운세', href: '/ai-services' },
    { name: 'AI 로또', href: '/ai-services' },
  ];

  const supportLinks = [
    { name: '이용방법', href: '/guide' },
    { name: '커뮤니티', href: '/community' },
    { name: '업무제휴', href: '/partnership' },
    { name: '고객센터', href: '/support' },
  ];

  return (
    <footer className="bg-korean-dark text-primary-foreground">
      {/* Quick Contact Bar */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <a
              href="tel:0504-0987-2001"
              className="flex items-center space-x-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">0504-0987-2001</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-secondary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">카카오톡 상담</span>
            </a>
            <a
              href="mailto:contact@unmyeongui-chang.kr"
              className="flex items-center space-x-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">이메일 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold text-primary-foreground">
                운명의창
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              전통 사주명리학과 현대 AI 기술의 조화로운 만남.
              당신의 운명을 이해하고 더 나은 미래를 설계하세요.
            </p>
            <div className="flex items-start space-x-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>서울특별시 강남구 테헤란로 123, 운명빌딩 5층</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">상담 서비스</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">AI 서비스</h4>
            <ul className="space-y-2">
              {aiLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">고객지원</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} 운명의창. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/50">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                개인정보처리방침
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
