import { tutors } from "@/lib/tutors";
import TutorCard from "../tutor-card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TutorsSection() {
  const featuredTutors = tutors.slice(0, 3);

  return (
    <section id="tutors" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Your Strategic Mentors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn from educational grandmasters. Our tutors don't just teach subjects - they develop strategic thinkers.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/find-a-tutor">
                    View All Mentors
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
