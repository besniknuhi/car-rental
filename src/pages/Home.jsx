import Booking from "../components/Booking";
import Hero from "../components/Hero";
import Plan from "../components/Plan";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import TestimonialsComp from "../components/TestimonialsComp";
import Faq from "../components/Faq";
import Download from "../components/Download";

export default function Home() {
  return (
    <>
      <Hero />
      <Booking />
      <Plan />
      <PickCar />
      <Banner />
      <ChooseUs />
      <TestimonialsComp />
      <Faq />
      <Download />
    </>
  );
}
