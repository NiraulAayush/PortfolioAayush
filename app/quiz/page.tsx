"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Trophy, AlertTriangle, Shuffle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

// Large pool of QA questions
const questionPool = [
  {
    id: 1,
    question: "What is the primary goal of Quality Assurance in software development?",
    options: [
      "To fix all bugs in the code",
      "To ensure the software meets requirements and is free of defects",
      "To write documentation for developers",
      "To develop new features faster",
    ],
    correctAnswer: 1,
    explanation:
      "Quality Assurance focuses on ensuring that the software meets requirements and is free of defects through systematic testing and evaluation.",
  },
  {
    id: 2,
    question: "Which testing technique involves examining the internal structure of the application?",
    options: ["Black Box Testing", "White Box Testing", "Grey Box Testing", "Alpha Testing"],
    correctAnswer: 1,
    explanation:
      "White Box Testing examines the internal structure, design, and coding of software to verify the flow of inputs and outputs.",
  },
  {
    id: 3,
    question: "What is a 'Test Case' in QA terminology?",
    options: [
      "A document describing how to execute a test",
      "A bug found during testing",
      "A testing environment",
      "A testing tool",
    ],
    correctAnswer: 0,
    explanation:
      "A Test Case is a document that describes the steps, expected results, and actual results of a specific test scenario.",
  },
  {
    id: 4,
    question: "What is regression testing?",
    options: [
      "Testing performed by end users",
      "Testing new features only",
      "Testing to ensure existing functionality still works after changes",
      "Testing performed by developers",
    ],
    correctAnswer: 2,
    explanation:
      "Regression testing is performed to ensure that existing functionality still works correctly after changes, updates, or fixes have been made to the software.",
  },
  {
    id: 5,
    question: "What does STLC stand for in QA?",
    options: [
      "Software Testing Life Cycle",
      "System Testing Level Check",
      "Software Test Level Certification",
      "Standard Testing Logic Control",
    ],
    correctAnswer: 0,
    explanation:
      "STLC stands for Software Testing Life Cycle, which defines the stages and activities involved in the testing process from requirements to closure.",
  },
  {
    id: 6,
    question: "Which of the following is NOT a type of functional testing?",
    options: ["Unit Testing", "Integration Testing", "Performance Testing", "Acceptance Testing"],
    correctAnswer: 2,
    explanation:
      "Performance Testing is a type of non-functional testing that evaluates how a system performs under a particular workload, not what functions it performs.",
  },
  {
    id: 7,
    question: "What is the purpose of a test plan?",
    options: [
      "To list all the bugs found in testing",
      "To document the strategy, resources, schedule, and scope of testing",
      "To describe how to fix defects",
      "To provide user documentation",
    ],
    correctAnswer: 1,
    explanation:
      "A test plan documents the strategy, approach, resources, schedule, and scope of testing activities to ensure organized and comprehensive testing.",
  },
  {
    id: 8,
    question: "What is a 'defect' in software testing?",
    options: [
      "A feature that users don't like",
      "A deviation from expected behavior or requirements",
      "A slow-performing function",
      "An outdated piece of code",
    ],
    correctAnswer: 1,
    explanation:
      "A defect (or bug) is a deviation from the expected behavior or a variance from the specified requirements in the software.",
  },
  {
    id: 9,
    question: "Which testing is performed without planning and documentation?",
    options: ["Smoke Testing", "Exploratory Testing", "Regression Testing", "Acceptance Testing"],
    correctAnswer: 1,
    explanation:
      "Exploratory Testing is a type of testing where testers explore the application without formal test cases, learning and testing simultaneously.",
  },
  {
    id: 10,
    question: "What is the main purpose of load testing?",
    options: [
      "To find security vulnerabilities",
      "To verify the system works under expected load conditions",
      "To check if the UI is user-friendly",
      "To ensure all features work correctly",
    ],
    correctAnswer: 1,
    explanation:
      "Load testing verifies that the system can handle the expected load (number of users, transactions, etc.) while maintaining acceptable performance.",
  },
  {
    id: 11,
    question: "What is a test harness?",
    options: [
      "A collection of test data",
      "A framework that enables automated testing",
      "A document describing test cases",
      "A tool for tracking bugs",
    ],
    correctAnswer: 1,
    explanation:
      "A test harness is a collection of software and test data configured to test a program unit by running it under varying conditions and monitoring its behavior and outputs.",
  },
  {
    id: 12,
    question: "Which of the following is a black box testing technique?",
    options: ["Path Testing", "Statement Coverage", "Equivalence Partitioning", "Code Walkthrough"],
    correctAnswer: 2,
    explanation:
      "Equivalence Partitioning is a black box testing technique that divides input data into valid and invalid partitions and selects representative values from each partition for testing.",
  },
  {
    id: 13,
    question: "What is the purpose of a traceability matrix in testing?",
    options: [
      "To track the time spent on testing",
      "To map test cases to requirements",
      "To document test results",
      "To assign tasks to testers",
    ],
    correctAnswer: 1,
    explanation:
      "A traceability matrix maps test cases to requirements, ensuring that all requirements are covered by tests and helping to track the testing progress.",
  },
  {
    id: 14,
    question: "What is the difference between verification and validation?",
    options: [
      "They are the same thing",
      "Verification is done by users, validation by testers",
      "Verification ensures we're building the product right, validation ensures we're building the right product",
      "Verification is automated, validation is manual",
    ],
    correctAnswer: 2,
    explanation:
      "Verification ensures we're building the product right (conforming to specifications), while validation ensures we're building the right product (meeting user needs).",
  },
  {
    id: 15,
    question: "What is a test oracle?",
    options: [
      "A senior tester who makes all testing decisions",
      "A mechanism to determine if a test has passed or failed",
      "A tool that generates test cases",
      "A database of test results",
    ],
    correctAnswer: 1,
    explanation:
      "A test oracle is a mechanism, process, or document that can be used to determine whether a test has passed or failed by providing expected results to compare against actual results.",
  },
  {
    id: 16,
    question: "What is the main purpose of smoke testing?",
    options: [
      "To test fire alarm systems in the office",
      "To verify that the most critical functions work",
      "To test the entire application thoroughly",
      "To check the UI design",
    ],
    correctAnswer: 1,
    explanation:
      "Smoke testing is a preliminary test that verifies the most critical functions of the application work before proceeding with more extensive testing.",
  },
  {
    id: 17,
    question: "Which of the following is NOT a test design technique?",
    options: ["Boundary Value Analysis", "Decision Table Testing", "Defect Management", "State Transition Testing"],
    correctAnswer: 2,
    explanation:
      "Defect Management is a process of handling defects, not a test design technique. The other options are techniques used to design effective test cases.",
  },
  {
    id: 18,
    question: "What is the purpose of a test environment?",
    options: [
      "To create test cases",
      "To simulate the production environment for testing",
      "To document test results",
      "To track defects",
    ],
    correctAnswer: 1,
    explanation:
      "A test environment is set up to simulate the production environment where the software will run, allowing testers to execute tests in conditions similar to real-world usage.",
  },
  {
    id: 19,
    question: "What is the main benefit of test automation?",
    options: [
      "It eliminates the need for manual testing",
      "It finds all bugs in the software",
      "It reduces time and resources needed for repetitive tests",
      "It improves the quality of the application code",
    ],
    correctAnswer: 2,
    explanation:
      "Test automation reduces the time and resources needed for repetitive tests, allowing testers to focus on more complex scenarios and improving testing efficiency.",
  },
  {
    id: 20,
    question: "What is a test metric?",
    options: [
      "A tool used for measuring test coverage",
      "A standard for writing test cases",
      "A quantitative measure used to track and assess the testing process",
      "A method for estimating testing time",
    ],
    correctAnswer: 2,
    explanation:
      "A test metric is a quantitative measure that helps track and assess the testing process, progress, quality, and health of the testing effort.",
  },
]

export default function QuizPage() {
  const [questions, setQuestions] = useState<typeof questionPool>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20)
  const [quizStarted, setQuizStarted] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState(3)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to randomly select questions from the pool
  const getRandomQuestions = (count: number) => {
    // Create a copy of the question pool to avoid modifying the original
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random())
    // Take the first 'count' questions
    return shuffled.slice(0, count)
  }

  // Trigger confetti when showing the final result
  useEffect(() => {
    if (showResult && !showExplanation) {
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [showResult, showExplanation])

  // Timer logic
  useEffect(() => {
    if (quizStarted && !showExplanation && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout)
            handleTimeout()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [quizStarted, currentQuestion, showExplanation, showResult])

  const startQuiz = () => {
    // Select random questions when starting the quiz
    setQuestions(getRandomQuestions(questionsPerQuiz))
    setQuizStarted(true)
    setStartTime(Date.now())
    setTimeLeft(20)
    setCorrectAnswers(0)
    setScore(0)
    setCurrentQuestion(0)
  }

  const handleTimeout = () => {
    setShowExplanation(true)
    setIsCorrect(false)
  }

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
  }

  const calculateScore = (timeTaken: number) => {
    // Base score for correct answer
    const baseScore = 300

    // Time bonus (max 700 points if answered instantly)
    const maxTimeBonus = 700
    const timeBonus = Math.max(0, maxTimeBonus * (1 - timeTaken / 20))

    return Math.round(baseScore + timeBonus)
  }

  const handleNextQuestion = () => {
    // Reset for next question
    setShowExplanation(false)
    setSelectedOption(null)
    setTimeLeft(20)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setEndTime(Date.now())
      setShowResult(true)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    const correct = selectedOption === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setShowExplanation(true)

    if (correct) {
      setCorrectAnswers((prev) => prev + 1)
      const questionScore = calculateScore(20 - timeLeft)
      setScore(score + questionScore)
    }

    if (timerRef.current) clearInterval(timerRef.current)
  }

  const resetQuiz = () => {
    // Get new random questions when resetting
    setQuestions(getRandomQuestions(questionsPerQuiz))
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setCorrectAnswers(0)
    setShowResult(false)
    setShowExplanation(false)
    setQuizStarted(false)
    setTimeLeft(20)
    setStartTime(null)
    setEndTime(null)
  }

  const getScoreMessage = () => {
    if (score >= 2500) return "Outstanding! You're a QA expert!"
    if (score >= 2000) return "Excellent! You have strong QA knowledge!"
    if (score >= 1500) return "Great job! You know your QA concepts well!"
    if (score >= 1000) return "Good work! You have a solid understanding of QA!"
    if (score >= 500) return "Nice effort! Keep learning about QA!"
    return "Thanks for taking the quiz! Keep exploring QA concepts!"
  }

  const getTotalTime = () => {
    if (startTime && endTime) {
      const totalSeconds = Math.round((endTime - startTime) / 1000)
      return `${totalSeconds} seconds`
    }
    return "N/A"
  }

  const handleQuestionsCountChange = (count: number) => {
    setQuestionsPerQuiz(count)
  }

  if (!quizStarted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="page-header">QA Knowledge Quiz</h1>
        <p className="text-muted-foreground text-lg text-center mb-12">
          Test your Quality Assurance knowledge with this quick quiz!
        </p>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Test Your QA Knowledge?</CardTitle>
            <CardDescription className="text-lg mt-2">
              Answer questions about Quality Assurance and see how you score!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium">Timed Questions</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll have 20 seconds to answer each question. The faster you answer, the higher your score!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium">Score Up to 1000 Points</h3>
                  <p className="text-sm text-muted-foreground">
                    Each correct answer earns points based on how quickly you respond.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shuffle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium">Random Questions</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions are randomly selected from a pool of {questionPool.length} QA topics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Number of Questions:</h3>
              <div className="flex gap-2">
                {[3, 5, 10].map((count) => (
                  <Button
                    key={count}
                    variant={questionsPerQuiz === count ? "default" : "outline"}
                    onClick={() => handleQuestionsCountChange(count)}
                    className="flex-1"
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={startQuiz} className="w-full">
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="page-header">Quiz Results</h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription className="text-lg mt-2">Here's how you did on the QA knowledge quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-primary">{score}</h2>
                <p className="text-muted-foreground mt-1">Total Score</p>
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Questions Answered:</span>
                  <span>{questions.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Correct Answers:</span>
                  <span>
                    {correctAnswers} of {questions.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total Time:</span>
                  <span>{getTotalTime()}</span>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-medium text-lg">{getScoreMessage()}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button onClick={resetQuiz} className="w-full">
                Try Again
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href="/skills">View QA Skills</a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-medium mb-2">Loading questions...</h2>
          <p className="text-muted-foreground">Please wait while we prepare your quiz.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="page-header">QA Knowledge Quiz</h1>

      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-primary" />
            <span className={`font-medium ${timeLeft <= 5 ? "text-red-500" : ""}`}>{timeLeft}s</span>
          </div>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedOption?.toString()} className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      disabled={showExplanation}
                      onClick={() => handleOptionSelect(index)}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className={`flex-grow p-3 rounded-md cursor-pointer ${
                        showExplanation
                          ? index === questions[currentQuestion].correctAnswer
                            ? "bg-green-100 dark:bg-green-900/20"
                            : selectedOption === index
                              ? "bg-red-100 dark:bg-red-900/20"
                              : ""
                          : "hover:bg-muted"
                      }`}
                    >
                      {option}
                      {showExplanation && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle className="inline ml-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-md ${
                    isCorrect ? "bg-green-100 dark:bg-green-900/20" : "bg-amber-100 dark:bg-amber-900/20"
                  }`}
                >
                  <div className="flex items-start">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-medium">{isCorrect ? "Correct!" : "Incorrect"}</h3>
                      <p className="text-sm mt-1">{questions[currentQuestion].explanation}</p>
                      {isCorrect && (
                        <p className="text-sm font-medium mt-2">
                          You earned {calculateScore(20 - timeLeft)} points for this question!
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {!showExplanation ? (
                <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion}>
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Current Score</div>
                <div className="font-bold text-primary">{score}</div>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
