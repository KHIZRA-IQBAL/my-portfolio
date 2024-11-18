import Header from "@/components/header/header";
import Herosection from "@/components/hero-section/herosection";
import AboutBottomImage from "@/components/about/about-bottom-image/about-bottom"
import About from "@/components/about/about";
import Portfolio from "@/components/portfollio/portfolio";
import Services from "@/components/services-of-us/services";
import Testimonial from "@/components/testimonial/testimonial";
import ContactUs from "@/components/contact-us/contactus";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
     <>
    <Header/>
    <Herosection/>
    <About/>
    <AboutBottomImage/>
    <Portfolio/>
    <Services/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
