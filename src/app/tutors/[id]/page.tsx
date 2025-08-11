import { tutors } from "@/lib/tutors";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageSquare, Star, DollarSign } from "lucide-react";
import { KingIcon, KnightIcon, QueenIcon } from "@/components/icons";

export function generateStaticParams() {
    return tutors.map((tutor) => ({
        id: tutor.id,
    }));
}

const masteryIcons: { [key: string]: React.ReactNode } = {
  'Queen': <QueenIcon className="h-6 w-6 text-accent" />,
  'King': <KingIcon className="h-6 w-6 text-accent" />,
  'Knight': <KnightIcon className="h-6 w-6 text-accent" />,
};

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((p) => p.id === params.id);

  if (!tutor) {
    notFound();
  }

  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Tutor Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Image
                  src={tutor.image}
                  alt={`Portrait of ${tutor.name}`}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover aspect-square w-full"
                  data-ai-hint="tutor portrait"
                />
                <h1 className="text-3xl font-bold mt-4">{tutor.name}</h1>
                <p className="text-muted-foreground">{tutor.title}</p>
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-accent fill-accent" />
                        <span className="font-bold">{tutor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <DollarSign className="w-5 h-5 text-muted-foreground" />
                        <span className="font-bold">{tutor.hourlyRate}</span>
                        <span className="text-sm text-muted-foreground">/ hour</span>
                    </div>
                </div>
                <Button className="w-full mt-6">Book a Strategic Session</Button>
                <Button variant="outline" className="w-full mt-2">
                    <MessageSquare className="mr-2 h-4 w-4" /> Send a Message
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {tutor.qualifications.map((qual) => (
                  <Badge key={qual} variant="default">{qual}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl">About {tutor.name}</CardTitle>
                            <CardDescription className="mt-2 text-base">"{tutor.philosophy}"</CardDescription>
                        </div>
                        <div className="flex flex-col items-center">
                            {masteryIcons[tutor.masteryLevel]}
                            <p className="text-xs font-bold mt-1">{tutor.masteryLevel}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{tutor.bio}</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Availability</CardTitle>
                    <CardDescription>This calendar is for demonstration. Full booking functionality coming soon.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center text-muted-foreground p-8">
                    <div className="text-center space-y-2">
                    <Calendar className="h-16 w-16 mx-auto"/>
                    <p>Calendar placeholder</p>
                    <p className="text-sm">Availability: {tutor.availability}</p>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
