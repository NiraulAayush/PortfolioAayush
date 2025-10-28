import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Aayush <span className="text-primary">Niraula</span>
            </h1>
            <p className="text-xl text-muted-foreground">Ensuring Quality One Test at a Time</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Specialized in:</h3>
              <div className="flex flex-wrap gap-2">
                {["Manual Testing", "Cypress Automation", "API Testing", "Bug Reporting", "Test Case Design"].map(
                  (skill) => (
                    <div key={skill} className="flex items-center text-sm bg-muted px-3 py-1 rounded-full">
                      <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-primary" />
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first md:order-last">
            <Image src="/images/aayush-profile.png" alt="Aayush Niraula" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Brief Summary Section */}
      <section className="py-16 border-t">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Professional Summary</h2>
          <p className="text-lg text-muted-foreground">
            Detail-oriented QA and Test Automation Engineer with extensive hands-on experience in manual testing, API
            automation, and UI automation. Proven ability to identify bugs, write comprehensive test reports, and
            develop automation scripts that enhance efficiency and streamline processes. Committed to ensuring software
            reliability and quality through structured testing methodologies and advanced automation tools.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Core Competencies</h2>
          <p className="text-lg text-muted-foreground mt-3">Key skills that define my testing approach</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Manual Testing",
              description: "Test case development and bug reports with detailed steps, expected/actual results",
            },
            {
              title: "Test Automation",
              description: "Building Cypress and Selenium scripts and automating UI workflows",
            },
            {
              title: "API Testing",
              description: "API testing and automation using Postman and API Dog, validating responses",
            },
            {
              title: "Tools & Technologies",
              description: "Git, GitHub, Cypress, Appium, Selenium, Postman, API Dog, Python, JavaScript",
            },
          ].map((skill) => (
            <div
              key={skill.title}
              className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-3">
            Showcasing my testing expertise through real-world applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Abroad Sathi",
              description: "Comprehensive testing for Vrit Technologies' platform",
              image: "/images/abroad-sathi.png",
              tools: ["Test Planning", "Manual Testing", "Selenium"],
            },
            {
              title: "College Info Nepal",
              description: "Quality assurance for Vrit Technologies' educational platform",
              image: "/images/college-info-nepal.png",
              tools: ["Test Cases", "Bug Reporting", "Manual Testing"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-muted relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
