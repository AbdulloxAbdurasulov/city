import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SmartBuildings from '../components/SmartBuildings';
import SmartEcosystem from '../components/SmartEcosystem';
import SmartMobility from '../components/SmartMobility';
import DigitalServices from '../components/DigitalServices';
import HealthAndWellbeing from '../components/HealthAndWellbeing';
import SocialResponsibility from '../components/SocialResponsibility';
import SmartGovernance from '../components/SmartGovernance';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SmartBuildings />
      <SmartEcosystem />
      <SmartMobility />
      <DigitalServices />
      <HealthAndWellbeing />
      <SocialResponsibility />
      <SmartGovernance />
      <Footer />
    </>
  );
}
