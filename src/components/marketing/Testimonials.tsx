import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    rating: 5,
    quote:
      "This tool transformed how our team collaborates. The real-time updates and built-in chat eliminated so many meetings. We&apos;re 40% more productive.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "StartupXYZ",
    rating: 5,
    quote:
      "Finally, a task management tool that doesn't get in the way. Clean interface, powerful features, and the guest collaboration feature is a game-changer for client projects.",
    initials: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    company: "Design Studio",
    rating: 5,
    quote:
      "Love the visual kanban boards! Managing creative projects has never been easier. The mobile app means I can stay connected even when I'm on set.",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved By Teams Everywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of teams who&apos;ve transformed their workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-elegant transition-all duration-300 relative"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
