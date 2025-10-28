import { NextResponse } from "next/server"

export async function GET() {
  const cvContent = `AAYUSH NIRAULA
aayushniraula2025@gmail.com | 9841343886 | Kathmandu, Nepal 44600
GitHub: NiraulaAayush | LinkedIn: Aayush Niraula | Website: www.aayushniraula.com.np

PROFESSIONAL SUMMARY
Detail-oriented QA and Test Automation Engineer with extensive hands-on experience in manual testing, API automation, and UI automation. Proven ability to identify bugs, write comprehensive test reports, and develop automation scripts that enhance efficiency and streamline processes. Committed to ensuring software reliability and quality through structured testing methodologies and advanced automation tools. Strong advocate for continuous improvement in testing practices to deliver high-quality software solutions.

SKILLS
Version Control & Collaboration: Git, GitHub
Automation & Testing Tools: Cypress, Appium, Selenium, Postman, API Dog
Programming & Scripting: Python, JavaScript (basic), HTML/CSS
Testing Expertise: Manual Testing, API Testing, UI Automation, Test Case Design, Bug Reporting, Test Planning

WORK HISTORY
Software Quality Assurance Intern - AnkaEk, Anamnagar (Jun 2025 - Current)
• Performed manual testing of web and app workflows using Chrome DevTools, identifying and reporting critical bugs with clear, concise documentation.
• Designed and executed test cases and prepared structured test case reports.
• Automated repetitive UI testing workflows using Cypress; including signup, profile creation, and key user flows in Lahv+, Connect Persona, and a-OK applications; reducing manual workload significantly.
• Conducted API testing and automation using API Dog, verifying response status codes and validating API behavior against expected outcomes.
• Collaborated with developers via Git and GitHub for issue tracking, version control, and project updates.
• Improved efficiency of regression testing and built a foundation in end-to-end automation for scalable QA processes.

Software Quality Assurance Trainee - Skill Shikshya, Sankhamul (Mar 2025 - Jun 2025)
• Underwent a structured QA training focused on manual and automated testing methodologies.
• Learned defect life cycle, test case writing, and test planning under professional supervision.
• Gained exposure to real-world testing scenarios, including functional and regression testing.
• Strengthened understanding of testing frameworks and industry-level QA workflows.

EDUCATION
Bachelor of Science: Computer Science And Information Technology - Tribhuvan University (Jun 2025)
Intermediate (+2): Science - National Examination Board (2020)

CERTIFICATIONS
Quality Assurance Trainee - Skill Shikshya (Issued Jun 2025)
Front-End Development - Coursera (Issued Jul 2023)

PROJECTS
Lahv+ | ankaEk
• Automated signup, profile creation, and core UI flows using Cypress.
• Conducted API testing to validate response structure and server reliability.
• Identified workflow bugs and collaborated with developers to ensure stable builds.

Connect Persona | ankaEk
• Performed manual and automated testing for user onboarding and profile flows.
• Designed and executed test cases covering functional and regression areas.
• Validated backend APIs and cross-verified UI data consistency.

a-OK | ankaEk
• Automated signup and profile fill-up workflows to enhance test coverage.
• Verified API responses and front-end integration with automation scripts.
• Reduced testing cycle time through script reuse and workflow optimization.

Abroad Sathi | Vrit Technologies
• Designed and executed functional test cases for web features.
• Performed both manual and Selenium-based automation testing, ensuring smooth UI and functional flow.

College Info Nepal | Vrit Technologies
• Created detailed test cases and documented bugs with steps and screenshots.
• Conducted comprehensive manual testing to verify end-to-end functionality.`

  // Create a simple text-based PDF response
  const pdfContent = generateSimplePDF(cvContent)

  return new NextResponse(pdfContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Aayush_Niraula_Resume.pdf"',
    },
  })
}

function generateSimplePDF(text: string): Buffer {
  // Simple PDF generation using basic PDF structure
  const lines = text.split("\n")
  let yPosition = 750
  const pageHeight = 842
  const margin = 40
  const lineHeight = 12

  let pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${calculateContentLength(lines, margin, lineHeight, pageHeight)} >>
stream
BT
/F1 10 Tf
${margin} ${yPosition} Td
`

  lines.forEach((line) => {
    if (yPosition < margin + lineHeight) {
      yPosition = pageHeight - margin
      pdfContent += `\nET\nendstream\nendobj\n`
      // For simplicity, we'll just continue on same page
    }

    const escapedLine = line.replace(/[()\\]/g, "\\$&")
    pdfContent += `(${escapedLine}) Tj\n0 -${lineHeight} Td\n`
    yPosition -= lineHeight
  })

  pdfContent += `ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000500 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
600
%%EOF`

  return Buffer.from(pdfContent, "utf-8")
}

function calculateContentLength(lines: string[], margin: number, lineHeight: number, pageHeight: number): number {
  let length = 0
  lines.forEach((line) => {
    const escapedLine = line.replace(/[()\\]/g, "\\$&")
    length += escapedLine.length + 50 // Approximate PDF command overhead
  })
  return length
}
