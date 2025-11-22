import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
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
    </div>
  );
}
