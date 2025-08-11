import type { Tutor } from "@/lib/tutors";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { QueenIcon } from "./icons/queen-icon";
import { KingIcon } from "./icons/king-icon";
import { KnightIcon } from "./icons/knight-icon";

const masteryIcons: { [key: string]: React.ReactNode } = {
  'Queen': <QueenIcon className="h-4 w-4" />,
  'King': <KingIcon className="h-4 w-4" />,
  'Knight': <KnightIcon className="h-4 w-4" />,
};

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <Card className="flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader>
        <Image
          src={tutor.image}
          alt={`Portrait of ${tutor.name}`}
          width={400}
          height={400}
          className="rounded-lg object-cover aspect-square"
          data-ai-hint="tutor portrait"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle>{tutor.name}</CardTitle>
        <CardDescription className="mt-1">{tutor.title}</CardDescription>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            {masteryIcons[tutor.masteryLevel]}
            <span>{tutor.masteryLevel} of {tutor.subject}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 line-clamp-3">
          "{tutor.philosophy}"
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tutor.qualifications.map((qual) => (
            <Badge key={qual} variant="secondary">{qual}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/tutors/${tutor.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
