import { FolderPlus, UserPlus, Rocket } from "lucide-react";

const steps = [
  {
    icon: FolderPlus,
    title: "Create Your Workspace",
    description: "Set up your project workspace in seconds. Customize it to match your team's workflow.",
  },
  {
    icon: UserPlus,
    title: "Invite Your Team",
    description: "Add team members with a simple email invitation. They'll be collaborating in minutes.",
  },
  {
    icon: Rocket,
    title: "Start Collaborating",
    description: "Create tasks, chat in real-time, and watch your productivity soar. It's that simple.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Get started in three simple steps. No credit card required.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent opacity-30"></div>
                  )}
                  
                  <div className="relative inline-flex mb-6">
                    <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-full"></div>
                    <div className="relative bg-background border-2 border-primary rounded-full p-6 shadow-elegant">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
