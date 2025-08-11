import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-secondary">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Begin your journey to academic mastery.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Magnus Carlsen" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="master@kaizenchess.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label>I am a...</Label>
            <RadioGroup defaultValue="student" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tutor" id="r2" />
                <Label htmlFor="r2">Tutor</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Create Account</Button>
          <p className="text-xs text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline hover:text-primary">
                Login
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
