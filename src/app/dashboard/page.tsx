import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookMarked, MessageSquare, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="bg-checkered-pattern">
      <div className="container py-12 md:py-24">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Player Dashboard</CardTitle>
            <CardDescription>
              This is your command center. Track your progress, manage sessions, and access resources.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">sessions this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">unread messages</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Learning Resources</CardTitle>
                  <BookMarked className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">new resources available</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Ready for your next move?</h3>
                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/find-a-tutor">Book a New Session</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/smart-matching">Use Smart Match</Link>
                    </Button>
                </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
