"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ImageIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Lahv+",
      description: "UI automation and API testing for ankaEK's application",
      category: "professional",
      image: "/images/lahv-plus.png",
      tools: ["Cypress", "API Testing", "API Dog"],
      highlights: [
        "Automated signup, profile creation, and core UI flows using Cypress",
        "Conducted API testing to validate response structure and server reliability",
        "Identified workflow bugs and collaborated with developers to ensure stable builds",
        "Reduced manual testing workload through comprehensive automation",
      ],
      github: null,
      demo: null,
    },
    {
      id: 2,
      title: "Connect Persona",
      description: "Manual and automated testing for ankaEK's user onboarding platform",
      category: "professional",
      image: "/images/connect-persona.png",
      tools: ["Manual Testing", "Cypress", "Test Cases"],
      highlights: [
        "Performed manual and automated testing for user onboarding and profile flows",
        "Designed and executed test cases covering functional and regression areas",
        "Validated backend APIs and cross-verified UI data consistency",
        "Ensured smooth user experience across the platform",
      ],
      github: null,
      demo: null,
    },
    {
      id: 3,
      title: "a-OK",
      description: "Automation testing and API validation for ankaEK's application",
      category: "professional",
      image: "/images/aok.png",
      tools: ["Cypress", "API Testing", "Automation"],
      highlights: [
        "Automated signup and profile fill-up workflows to enhance test coverage",
        "Verified API responses and front-end integration with automation scripts",
        "Reduced testing cycle time through script reuse and workflow optimization",
        "Built scalable automation framework for regression testing",
      ],
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: "Abroad Sathi",
      description: "Comprehensive testing for Vrit Technologies' platform",
      category: "professional",
      image: "/images/abroad-sathi.png",
      tools: ["Test Planning", "Manual Testing", "Selenium"],
      highlights: [
        "Designed and executed functional test cases for web features",
        "Performed both manual and Selenium-based automation testing",
        "Ensured smooth UI and functional flow across the platform",
        "Collaborated with development team to resolve identified issues",
      ],
      github: null,
      demo: null,
    },
    {
      id: 5,
      title: "College Info Nepal",
      description: "Quality assurance for Vrit Technologies' educational platform",
      category: "professional",
      image: "/images/college-info-nepal.png",
      tools: ["Test Cases", "Bug Reporting", "Manual Testing"],
      highlights: [
        "Created detailed test cases and documented bugs with steps and screenshots",
        "Conducted comprehensive manual testing to verify end-to-end functionality",
        "Ensured quality across the platform's educational features",
        "Collaborated with development team to ensure product reliability",
      ],
      github: null,
      demo: null,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="page-header">Projects</h1>
      <p className="text-muted-foreground text-lg text-center mb-12">
        Showcasing my testing expertise through real-world applications
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {["professional", "personal"].map((category) => (
          <TabsContent key={category} value={category}>
            {projects.filter((project) => project.category === category).length === 0 ? (
              <div className="flex items-center justify-center py-16">
                <p className="text-muted-foreground text-lg">Come back later for personal projects</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function ProjectCard({ project }) {
  const [imageError, setImageError] = React.useState(false)

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative w-full h-48 bg-muted flex items-center justify-center">
        {!imageError ? (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-muted">
            <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-2" />
            <p className="text-sm text-muted-foreground">Image unavailable</p>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool) => (
            <span key={tool} className="bg-primary/10 text-primary text-sm px-2.5 py-0.5 rounded-full">
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Key Highlights:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-2">
        {project.github && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
        )}
        {project.demo && (
          <Button asChild size="sm">
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Link>
          </Button>
        )}
        <Button variant="ghost" size="sm" className="ml-auto">
          <ImageIcon className="h-4 w-4 mr-2" />
          Screenshots
        </Button>
      </CardFooter>
    </Card>
  )
}
