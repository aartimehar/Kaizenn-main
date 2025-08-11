"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getMatchedTutor } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Analyzing..." : "Find My Master Tutor"}
    </Button>
  );
}

export default function SmartMatchingPage() {
  const initialState = {
    studentProfile: "",
    error: undefined,
    tutor: undefined,
    reason: undefined,
  };
  const [state, formAction] = useFormState(getMatchedTutor, initialState);

  return (
    <div className="bg-checkered-pattern">
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">AI-Powered Tutor Matching</h1>
          <p className="text-muted-foreground md:text-xl">
            Describe your learning style and goals. Our AI will analyze your needs and find the perfect strategic mentor for you.
          </p>
        </div>

        <Card>
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Your Learning Profile</CardTitle>
              <CardDescription>
                The more detail you provide, the better the match. Consider including subjects, topics you struggle with, learning pace, and what you look for in a tutor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-2">
                <Label htmlFor="studentProfile" className="sr-only">Student Profile</Label>
                <Textarea
                  id="studentProfile"
                  name="studentProfile"
                  placeholder="e.g., 'I am a 10th-grade student struggling with advanced algebra concepts, specifically quadratic equations. I am a visual learner and need someone who can explain things patiently with real-world examples...'"
                  rows={6}
                  required
                  defaultValue={state.studentProfile}
                />
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.error && (
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Matching Error</AlertTitle>
                <AlertDescription>
                    {state.error}
                </AlertDescription>
            </Alert>
        )}

        {state.tutor && state.reason && (
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle>Your Recommended Tutor</CardTitle>
                    <CardDescription>Our AI has identified the best strategic fit for you.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-[150px_1fr] gap-6">
                    <Image src={state.tutor.image} alt={state.tutor.name} width={150} height={150} className="rounded-lg object-cover aspect-square"/>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">{state.tutor.name}</h3>
                        <p className="text-muted-foreground">{state.tutor.title}</p>
                        <p className="text-sm font-medium">Subject: {state.tutor.subject}</p>
                        
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                     <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Reasoning for the Match</AlertTitle>
                        <AlertDescription>
                            {state.reason}
                        </AlertDescription>
                    </Alert>
                    <Button asChild>
                        <Link href={`/tutors/${state.tutor.id}`}>View Full Profile & Book</Link>
                    </Button>
                </CardFooter>
            </Card>
        )}
      </div>
    </div>
    </div>
  );
}
