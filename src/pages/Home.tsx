import Layout from '@/components/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import ServiceGrid from '@/components/home/ServiceGrid';
import QuickLinks from '@/components/home/QuickLinks';
import VisitorCounter from '@/components/home/VisitorCounter';
import InfoCards from '@/components/home/InfoCards';
import ContentSection from '@/components/home/ContentSection';
import PartnershipBanner from '@/components/home/PartnershipBanner';

const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <ServiceGrid />
      <QuickLinks />
      <VisitorCounter />
      <InfoCards />
      <ContentSection />
      <PartnershipBanner />
    </Layout>
  );
};

export default Home;
