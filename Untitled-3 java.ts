<!DOCTYPE html><html>
import YomamentorHeader from "@/components/YomamentorHeader";
import YomamentorHero from "@/components/YomamentorHero";
import YomamentorAbout from "@/components/YomamentorAbout";
import YomamentorServices from "@/components/YomamentorServices";
import YomamentorTestimonials from "@/components/YomamentorTestimonials";
import YomamentorPackages from "@/components/YomamentorPackages";
import YomamentorCTA from "@/components/YomamentorCTA";
import YomamentorFooter from "@/components/YomamentorFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Header with Navigation */}
      <YomamentorHeader />

      {/* Hero Section - Main headline and CTA */}
      <YomamentorHero />

      {/* About Section */}
      <YomamentorAbout />

      {/* Services Section */}
      <YomamentorServices />

      {/* Testimonials Section */}
      <YomamentorTestimonials />

      {/* Packages Section */}
      <YomamentorPackages />

      {/* Final CTA Section */}
      <YomamentorCTA />

      {/* Footer */}
      <YomamentorFooter />

      {/* Smooth Scroll Behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .font-plus-jakarta-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}