import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, FileText, Settings, PenTool as Tool } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      id: "manual",
      name: "Manual Testing",
      icon: <FileText className="h-5 w-5" />,
      description: "Methodical approaches to discover and document software issues",
      skills: [
        { name: "Test Case Development", proficiency: 85 },
        { name: "Bug Reporting", proficiency: 90 },
        { name: "Exploratory Testing", proficiency: 80 },
        { name: "Regression Testing", proficiency: 75 },
        { name: "Test Planning", proficiency: 80 },
        { name: "Defect Tracking", proficiency: 85 },
      ],
    },
    {
      id: "automation",
      name: "Test Automation",
      icon: <Code className="h-5 w-5" />,
      description: "Tools and frameworks for automated test execution",
      skills: [
        { name: "Cypress", proficiency: 80 },
        { name: "Selenium WebDriver", proficiency: 75 },
        { name: "Appium", proficiency: 70 },
        { name: "Test Script Development", proficiency: 75 },
        { name: "Python for Automation", proficiency: 70 },
        { name: "JavaScript (basic)", proficiency: 65 },
      ],
    },
    {
      id: "api",
      name: "API Testing",
      icon: <Tool className="h-5 w-5" />,
      description: "Testing application programming interfaces",
      skills: [
        { name: "Postman", proficiency: 85 },
        { name: "API Dog", proficiency: 80 },
        { name: "HTTP Methods", proficiency: 80 },
        { name: "Request Headers/Params", proficiency: 80 },
        { name: "Status Code Validation", proficiency: 85 },
        { name: "Response Validation", proficiency: 80 },
      ],
    },
    {
      id: "tools",
      name: "Tools & Technologies",
      icon: <Settings className="h-5 w-5" />,
      description: "Software and technologies that support the testing process",
      skills: [
        { name: "Git & GitHub", proficiency: 80 },
        { name: "Python", proficiency: 70 },
        { name: "JavaScript", proficiency: 65 },
        { name: "HTML/CSS", proficiency: 75 },
        { name: "Chrome DevTools", proficiency: 85 },
        { name: "Version Control", proficiency: 80 },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="page-header">Skills & Expertise</h1>
      <p className="text-muted-foreground text-lg text-center mb-12">
        A comprehensive overview of my quality assurance capabilities
      </p>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {category.icon}
              <span className="hidden md:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16">
        <h2 className="section-header text-center">Additional Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Test Methodologies",
              items: ["Functional Testing", "UI Testing", "Regression Testing", "Smoke Testing", "Sanity Testing"],
            },
            {
              title: "Development Knowledge",
              items: [
                "Basic Front-End Development",
                "Understanding of SDLC",
                "Version Control with Git",
                "Chrome DevTools",
                "Web Technologies",
              ],
            },
            {
              title: "Soft Skills",
              items: ["Attention to Detail", "Problem Solving", "Documentation", "Team Collaboration", "Communication"],
            },
          ].map((group) => (
            <Card key={group.title} className="h-full">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
