import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl mb-6 flex-shrink-0">
              <Image
                src="/images/aayush-profile.png"
                alt="Aayush Niraula"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4" /> View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey into Quality Assurance began with a passion for ensuring software works flawlessly for all
              users. As a B.Sc. CSIT student at Tribhuvan University, I've been developing my technical skills while
              gaining practical experience in the QA field.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as an interest in software development evolved into a deep appreciation for the critical role
              QA plays in the software development lifecycle. I found satisfaction in being the last line of defense
              before software reaches users, ensuring they receive a polished, bug-free experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through my training at Skill Shikshya and projects at Vrit Technologies, I've expanded my testing toolkit
              from manual testing to automation with Selenium, continuously learning new technologies and methodologies
              to enhance my testing capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe that quality is not just about finding bugs, but about understanding the user's perspective and
              ensuring the software meets their needs. My testing approach combines technical rigor with user empathy to
              deliver comprehensive test coverage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building software that's not just built but tested relentlessly. I value attention to
              detail and thorough documentation to ensure that bugs are not only found but properly communicated to
              development teams for efficient resolution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Career Aspirations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As I continue to grow in my QA career, I aspire to become a skilled test automation engineer, building
              robust frameworks that ensure software quality at scale. I'm particularly interested in expanding my
              expertise in API testing and performance testing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm committed to continuous learning and staying updated with the latest testing tools and methodologies.
              Currently, I'm focusing on enhancing my Selenium skills and exploring other automation frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My ultimate goal is to contribute to building high-quality software products that provide exceptional user
              experiences, working collaboratively with development teams to implement effective testing strategies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Beyond Testing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When I'm not hunting for bugs, I enjoy expanding my knowledge in front-end development, as evidenced by my
              Coursera certification. I'm also interested in exploring new technologies and contributing to open-source
              projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of community and knowledge sharing, and I'm always eager to connect with fellow QA
              professionals to exchange ideas and learn from their experiences.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
