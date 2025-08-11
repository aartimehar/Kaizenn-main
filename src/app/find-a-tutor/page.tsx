import TutorCard from "@/components/tutor-card";
import { tutors } from "@/lib/tutors";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function FindATutorPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Find Your Strategic Mentor</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Assess the board, select your master, and execute your learning strategy.
          </p>
        </div>

        <div className="sticky top-16 z-40 bg-secondary/80 backdrop-blur-sm py-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search by name or keyword..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="literature">Literature</SelectItem>
                <SelectItem value="Math">Mathematics</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by mastery" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="king">King</SelectItem>
                <SelectItem value="queen">Queen</SelectItem>
                <SelectItem value="knight">Knight</SelectItem>
              </SelectContent>
            </Select>
            <Button>Apply Filters</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}
