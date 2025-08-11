import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Philosophy</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Kaizen Advantage</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kaizen means continuous improvement — the heart of both chess mastery and academic excellence. Discover our commitment to strategic learning that builds lasting success.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Connecting chess strategy to learning methodology.
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Emphasizing critical thinking and strategic planning.
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Fostering a community of collaborative excellence.
              </li>
            </ul>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            width={600}
            height={400}
            alt="Team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            data-ai-hint="diverse team collaboration"
          />
        </div>
      </div>
    </section>
  );
}
