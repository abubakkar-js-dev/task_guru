import {
  BarChart3,
  Bell,
  CheckSquare,
  Layers,
  MessageSquare,
  Smartphone,
  Tag,
  Users,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const features = [
  {
    icon: CheckSquare,
    title: "Real-time Task Management",
    description:
      "Create, assign, and track tasks with instant updates across your entire team.",
  },
  {
    icon: MessageSquare,
    title: "Instant Team Chat",
    description:
      "Built-in messaging keeps conversations in context. No more switching apps.",
  },
  {
    icon: Layers,
    title: "Visual Kanban & List Views",
    description:
      "Switch between board and list views. Organize work the way that suits you best.",
  },
  {
    icon: Tag,
    title: "Custom Labels & Priorities",
    description:
      "Color-code tasks, set priorities, and create custom workflows for your projects.",
  },
  {
    icon: Users,
    title: "Guest Collaboration",
    description:
      "Invite clients or contractors without requiring them to create an account.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Manage tasks on any device. Native experience on desktop, tablet, and mobile.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Stay informed with intelligent alerts. Never miss important updates or deadlines.",
  },
  {
    icon: BarChart3,
    title: "Activity Analytics",
    description:
      "Track team performance and project progress with insightful reports and metrics.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Stay Productive
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed for teams who want to focus on work, not
            learning complex tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
