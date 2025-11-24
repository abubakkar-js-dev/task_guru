import FAQ from "@/components/marketing/FAQ";
import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import Newsletter from "@/components/marketing/NewsLetter";
import Testimonials from "@/components/marketing/Testimonials";
import VideoPreview from "@/components/marketing/VideoPreview";

export default function Home() {
  return (
    <div>
        {/* Hero  */}
        <Hero />
        {/* Video Preview */}
        <VideoPreview />
        {/*  Feature Section */}
        <Features />
        {/* How Its Works Section */}
        <HowItWorks />
        {/* Testimonials Section */}
        <Testimonials />
        {/* FAQ Section */}
        <FAQ />
        {/* Newsletter Section */}
        <Newsletter />
    </div>
  );
}
