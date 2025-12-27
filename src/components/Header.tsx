import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '신점', href: '/sinjeom' },
    { name: '사주', href: '/saju' },
    { name: '타로', href: '/tarot' },
    { name: '심리상담', href: '/counseling' },
    { name: 'AI서비스', href: '/ai-services' },
    { name: '커뮤니티', href: '/community' },
    { name: '이용방법', href: '/guide' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                운명의창
              </span>
              <span className="absolute -top-1 -right-3 text-xs text-secondary font-medium">
                ✦
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">로그인</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-b-2xl"
            >
              <nav className="flex flex-col py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium transition-colors duration-300 hover:bg-primary/10 hover:text-primary rounded-lg mx-2 ${
                      location.pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-border mx-4 pt-4 mt-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 px-4 py-3 mx-2 rounded-lg bg-primary text-primary-foreground"
                  >
                    <User className="w-4 h-4" />
                    <span className="font-medium">로그인</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
