import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PawnIcon } from "../icons/pawn-icon";
import { KnightIcon } from "../icons/knight-icon";
import { QueenIcon } from "../icons/queen-icon";
import { Button } from "../ui/button";
import Link from "next/link";

const serviceTiers = [
  {
    icon: <PawnIcon className="h-10 w-10 text-accent" />,
    title: "Opening Game",
    level: "Beginner",
    description: "Build a strong foundation and master the core concepts of your subjects.",
  },
  {
    icon: <KnightIcon className="h-10 w-10 text-accent" />,
    title: "Middle Game",
    level: "Intermediate",
    description: "Develop strategic skills, apply knowledge, and tackle complex problems with confidence.",
  },
  {
    icon: <QueenIcon className="h-10 w-10 text-accent" />,
    title: "Endgame",
    level: "Advanced",
    description: "Refine your mastery, prepare for competitive exams, and achieve peak performance.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Learning Strategy</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Like chess, learning requires the right strategy. Explore our comprehensive approach to academic excellence, designed to help you think several moves ahead.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {serviceTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center">
                {tier.icon}
                <CardTitle className="mt-4">{tier.title}</CardTitle>
                <CardDescription>{tier.level}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center text-muted-foreground">{tier.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/signup">
              Execute Strategy
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
