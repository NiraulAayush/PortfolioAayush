"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"
import { Menu, BrainCircuit } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/quiz", label: "Quiz", icon: <BrainCircuit className="h-4 w-4 mr-1" /> },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    if (isOpen) {
      setIsOpen(false)
    }

    // Use router.push instead of Link for programmatic navigation
    router.push(href)

    // Scroll to top immediately
    window.scrollTo(0, 0)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="link" className="font-bold text-xl p-0" onClick={() => handleNavigation("/")}>
            Aayush<span className="text-primary">Niraula</span>
          </Button>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant={pathname === link.href ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.icon && link.icon}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant={pathname === link.href ? "default" : "ghost"}
                  onClick={() => handleNavigation(link.href)}
                  className="flex items-center"
                >
                  {link.icon && link.icon}
                  {link.label}
                </Button>
              ))}
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
