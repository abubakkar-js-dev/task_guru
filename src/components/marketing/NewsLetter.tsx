"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!consent) {
      toast({
        title: "Consent required",
        description: "Please agree to receive emails from us",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send to your email service
    toast({
      title: "Successfully subscribed! 🎉",
      description: "Check your inbox for a confirmation email",
    });
    
    setEmail("");
    setConsent(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-full bg-background/10 mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get productivity tips, feature updates, and exclusive insights delivered to your inbox every week.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/95 border-background/20 text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-background text-primary hover:bg-background/90 shadow-lg"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-start gap-3 text-left">
              <Checkbox 
                id="consent" 
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-1 bg-background/95 border-background/20"
              />
              <label 
                htmlFor="consent" 
                className="text-sm text-primary-foreground/90 leading-relaxed cursor-pointer"
              >
                I agree to receive marketing emails from TaskFlow. You can unsubscribe at any time. 
                Read our <span className="underline">Privacy Policy</span>.
              </label>
            </div>
          </form>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            📧 Join 10,000+ subscribers • 🔒 No spam, ever • ✨ Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};
