import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Resume & Certifications</h1>
        <p className="text-muted-foreground">My professional experience and qualifications in quality assurance</p>
      </div>

      <Tabs defaultValue="resume" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="resume" className="mt-6">
          <div className="space-y-8">
            {/* Experience Section */}
            <section>
              <h2 className="section-header flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5" />
                </span>
                Professional Experience
              </h2>

              <div className="space-y-6">
                {/* ankaEK Experience */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Software Quality Assurance Intern</CardTitle>
                        <CardDescription>ankaEK - Anamnagar</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">Jun 2025 - Current</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Performed manual testing of web and app workflows using Chrome DevTools, identifying and
                          reporting critical bugs with clear, concise documentation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Designed and executed test cases and prepared structured test case reports.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Automated repetitive UI testing workflows using Cypress; including signup, profile creation,
                          and key user flows in Lahv+, Connect Persona, and a-OK applications; reducing manual workload
                          significantly.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Conducted API testing and automation using API Dog, verifying response status codes and
                          validating API behavior against expected outcomes.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Collaborated with developers via Git and GitHub for issue tracking, version control, and
                          project updates.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Improved efficiency of regression testing and built a foundation in end-to-end automation for
                          scalable QA processes.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Skill Shikshya Experience */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Software Quality Assurance Trainee</CardTitle>
                        <CardDescription>Skill Shikshya - Sankhamul</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">Mar 2025 - Jun 2025</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Underwent a structured QA training focused on manual and automated testing methodologies.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Learned defect life cycle, test case writing, and test planning under professional
                          supervision.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Gained exposure to real-world testing scenarios, including functional and regression testing.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Strengthened understanding of testing frameworks and industry-level QA workflows.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Vrit Technologies Experience */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>QA Tester</CardTitle>
                        <CardDescription>Vrit Technologies</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">Project-based work</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Designed and executed functional test cases for web features.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Performed both manual and Selenium-based automation testing, ensuring smooth UI and functional
                          flow.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Created detailed test cases and documented bugs with steps and screenshots.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Conducted comprehensive manual testing to verify end-to-end functionality.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="section-header flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5" />
                </span>
                Education
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Bachelor of Science: Computer Science And Information Technology</CardTitle>
                        <CardDescription>Tribhuvan University</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">Jun 2025</span>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Intermediate (+2): Science</CardTitle>
                        <CardDescription>National Examination Board</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">2020</span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Quality Assurance Trainee</CardTitle>
                <CardDescription>Skill Shikshya</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Certification in quality assurance training covering manual testing, test case writing, and automation
                  concepts.
                </p>
                <div className="text-sm text-muted-foreground">Issued: Jun 2025</div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Front-End Development</CardTitle>
                <CardDescription>Coursera</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  Certification in front-end development fundamentals, covering HTML, CSS, and JavaScript.
                </p>
                <div className="text-sm text-muted-foreground">Issued: Jul 2023</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              I'm continuously expanding my knowledge through online courses and certifications to enhance my QA skills
              and stay updated with industry best practices.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact me for verification or more details</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
