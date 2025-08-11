"use server";

import { smartTutorMatching } from "@/ai/flows/smart-tutor-matching";
import { tutors } from "@/lib/tutors";
import { z } from "zod";

const TutorMatchStateSchema = z.object({
  studentProfile: z.string(),
  tutor: z
    .object({
      id: z.string(),
      name: z.string(),
      title: z.string(),
      subject: z.string(),
      philosophy: z.string(),
      image: z.string(),
    })
    .optional(),
  reason: z.string().optional(),
  error: z.string().optional(),
});

type TutorMatchState = z.infer<typeof TutorMatchStateSchema>;

export async function getMatchedTutor(
  prevState: TutorMatchState,
  formData: FormData
): Promise<TutorMatchState> {
  const studentProfile = formData.get("studentProfile") as string;

  if (!studentProfile || studentProfile.length < 20) {
    return {
      studentProfile,
      error: "Please provide a more detailed description of your learning needs (at least 20 characters).",
    };
  }

  try {
    const tutorProfiles = tutors
      .map(
        (t) => `
      Tutor Name: ${t.name}
      Title: ${t.title}
      Subject: ${t.subject}
      Mastery Level: ${t.masteryLevel}
      Teaching Philosophy: ${t.philosophy}
      Bio: ${t.bio}
    `
      )
      .join("\n---\n");

    const result = await smartTutorMatching({
      studentProfile,
      tutorProfiles,
    });

    const matchedTutorName = result.matchedTutor.match(/Tutor Name: (.*?)\n/)?.[1];
    
    if (!matchedTutorName) {
        return { studentProfile, error: "Could not identify a matched tutor from the response." };
    }

    const matchedTutor = tutors.find(tutor => tutor.name === matchedTutorName.trim());

    if (!matchedTutor) {
      return {
        studentProfile,
        error: `Tutor "${matchedTutorName.trim()}" not found in our database.`,
      };
    }

    return {
      studentProfile,
      tutor: {
        id: matchedTutor.id,
        name: matchedTutor.name,
        title: matchedTutor.title,
        subject: matchedTutor.subject,
        philosophy: matchedTutor.philosophy,
        image: matchedTutor.image
      },
      reason: result.reason,
    };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
    return {
      studentProfile,
      error: `AI processing failed: ${errorMessage}`,
    };
  }
}
