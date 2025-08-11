import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Grade 11 Student",
    image: "https://placehold.co/100x100.png",
    fallback: "AJ",
    testimonial: "KaizenChess transformed my understanding of calculus. My tutor helped me see the patterns, and my grade jumped from a C to an A-. It felt like learning the rules to a new game.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    title: "University Applicant",
    image: "https://placehold.co/100x100.png",
    fallback: "PS",
    testimonial: "The 'Endgame' prep for my entrance exams was a game-changer. The strategic approach to problem-solving gave me a huge confidence boost. I got into my first-choice university!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Parent of a Middle-Schooler",
    image: "https://placehold.co/100x100.png",
    fallback: "MC",
    testimonial: "My daughter's confidence in her writing has soared. Her tutor doesn't just correct mistakes; she teaches the strategy behind effective communication. I highly recommend their approach.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Winning Strategies in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Victory speaks volumes. Discover how our strategic approach has helped students achieve remarkable academic breakthroughs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{item.testimonial}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={item.image} alt={item.name} data-ai-hint="student portrait"/>
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
