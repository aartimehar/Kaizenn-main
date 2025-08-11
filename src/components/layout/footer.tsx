import Link from "next/link";
import { ChessLogo } from "@/components/icons/chess-logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <ChessLogo />
            </Link>
            <p className="text-muted-foreground">
              Strategic learning for academic mastery.
            </p>
            <div className="flex gap-2">
              <Link href="#" aria-label="Twitter">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" aria-label="Facebook">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" aria-label="Instagram">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/find-a-tutor" className="text-muted-foreground hover:text-foreground">Find a Tutor</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get strategic insights and updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KaizenChess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
