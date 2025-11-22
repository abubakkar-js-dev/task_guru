import { Play } from "lucide-react";

export default function videoPreview(){
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground">
            Watch how teams collaborate seamlessly with real-time updates and instant chat
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant-xl border border-border bg-muted aspect-video group cursor-pointer">
            {/* Video Placeholder with Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-background rounded-full p-6 shadow-elegant group-hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-primary fill-primary" />
                </div>
              </div>
            </div>
            
            {/* Actual video would be embedded here */}
            <video 
              className="w-full h-full object-cover opacity-0"
              poster="/placeholder-video.jpg"
              controls
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ⏱️ 60 seconds • 👥 Real-time collaboration • 💬 Instant chat
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}