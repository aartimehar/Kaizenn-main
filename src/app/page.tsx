import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import TutorsSection from "@/components/landing/tutors-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import PhilosophySection from "@/components/landing/philosophy-section";
import ContactSection from "@/components/landing/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <TutorsSection />
      <TestimonialsSection />
      <PhilosophySection />
      <ContactSection />
    </div>
  );
}
