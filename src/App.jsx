import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import ClubIntro from './components/ClubIntro';
import VideoSection from './components/VideoSection';
import ClubBenefits from './components/ClubBenefits';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <main>
        <ProblemsSection />
        <ClubIntro />
        <VideoSection />
        <ClubBenefits />
        <ReviewsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
