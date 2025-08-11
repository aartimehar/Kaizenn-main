import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plan Your Next Move</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to elevate your academic strategy? Connect with our team to discuss your learning objectives.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Consultation Inquiry</CardTitle>
              <CardDescription>Fill out the form below and we'll be in touch shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Magnus" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Carlsen" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="master@kaizenchess.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Describe your learning objectives..." />
                </div>
                <Button type="submit" className="w-full">Submit Inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
