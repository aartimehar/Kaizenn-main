import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Master Your Next Move
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Every grandmaster started with a single move. Begin your journey to academic mastery with KaizenChess — where strategic learning meets exceptional results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">
                  Start Your Strategic Journey
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/find-a-tutor">
                  Browse Tutors
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 10,000+ Strategic Learners on the path to excellence.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            width={600}
            height={400}
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            data-ai-hint="diverse students learning"
          />
        </div>
      </div>
    </section>
  );
}
