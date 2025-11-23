import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Is there a free plan available?",
    answer: "Yes! Our free plan includes up to 5 team members, unlimited tasks, real-time collaboration, and basic chat functionality. It's perfect for small teams or those just getting started. You can upgrade to Pro anytime as your team grows.",
  },
  {
    question: "How does real-time collaboration work?",
    answer: "Our platform uses WebSocket technology to sync changes instantly across all connected devices. When someone creates a task, updates a status, or sends a message, everyone sees it immediately without refreshing. It's like Google Docs, but for task management.",
  },
  {
    question: "Can I invite guests without accounts?",
    answer: "Absolutely! On the Pro plan, you can invite clients, contractors, or stakeholders as guests. They get limited access to specific projects without needing to create a full account. This is perfect for client collaboration and external stakeholders.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For annual plans, we also offer bank transfers for enterprise customers. All payments are processed securely through Stripe.",
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use 256-bit SSL encryption, daily automated backups, and store all data in SOC 2 Type II certified data centers. We're also GDPR and CCPA compliant. Your data is encrypted both in transit and at rest.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes! You can export your data at any time in multiple formats (CSV, JSON, PDF). We believe your data is yours, and we make it easy to take it with you if you ever decide to leave. No lock-in, no hassle.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Save 20% when you pay annually. For example, the Pro plan at $12/user/month becomes just $9.60/user/month when billed annually. That's over 2 months free!",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you're approaching your limits. On the free plan, if you exceed 5 members, we'll prompt you to upgrade. We never lock you out or delete your data. You'll always have access to export your information.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes! We have native apps for iOS and Android, plus our web app is fully responsive and works great on mobile browsers. All features are available on mobile, including real-time chat and notifications.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free plan users get email support with responses within 24 hours. Pro plan users get priority support with faster response times, live chat during business hours, and access to our dedicated success team for onboarding and training.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};
    
