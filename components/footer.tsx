import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl mb-4 block">
              Aayush<span className="text-primary">Niraula</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Detail-oriented QA and Test Automation Engineer with extensive hands-on experience in manual testing, API
              automation, and UI automation. Committed to ensuring software reliability and quality.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link
                href="https://github.com/NiraulAayush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/aayush-niraula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:aayushniraula2025@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/resume", label: "Resume" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Nepal</li>
              <li>aayushniraula2025@gmail.com</li>
              <li>+977-9804788038</li>
              <li className="pt-2">
                <Link href="/contact" className="text-primary hover:underline">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Aayush Niraula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
