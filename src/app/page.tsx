import HeroSection from './heroSection/page'
import Banner from "./banner/banner"
import Feactured from "./Featured/featture"
import BookingForm from './Form/page';
import Footer from './Footer/page';

export default function Home() {
  return (
    <div>
      <Banner/>
      <HeroSection/>
      <Feactured/>
      <BookingForm />
      <Footer />
    </div>
  );
}
