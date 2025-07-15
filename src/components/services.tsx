// src/components/services.tsx
import React, { ReactNode } from "react";

// Type for the ServiceCard props
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

// A reusable component for service cards
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => (
  <div className="bg-brand-light-dark p-8 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center text-brand-accent mb-4">
      {icon}
      <h3 className="text-2xl font-bold text-white ml-4">{title}</h3>
    </div>
    <p className="text-brand-text-secondary leading-relaxed">{children}</p>
  </div>
);

// Type for the Step props
interface StepProps {
  number: string;
  title: string;
  description: string;
}

// A reusable component for the "How it Works" steps
const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 h-10 w-10 bg-brand-light-dark border-2 border-brand-accent rounded-full flex items-center justify-center text-brand-accent font-bold text-xl">
      {number}
    </div>
    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
    <p className="text-brand-text-secondary">{description}</p>
  </div>
);

// Placeholder icons
const InterviewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h1m6 4l-2-2m0 0l-2 2m2-2v6"
    />
  </svg>
);

const ReportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);

const Services: React.FC = () => (
  <div className="container mx-auto px-6 py-16">
    {/* Page Header */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-white mb-4">Our Core Services</h1>
      <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
        We provide a suite of AI-powered tools designed to give you the ultimate
        edge in your job search. Practice smarter, get objective feedback, and
        walk into every interview with confidence.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      <ServiceCard icon={<InterviewIcon />} title="AI Mock Interviews">
        Engage in hyper-realistic interview simulations tailored to your target
        role. Our AI asks relevant, challenging questions to prepare you for any
        scenario.
      </ServiceCard>
      <ServiceCard icon={<ReportIcon />} title="Instant Feedback Reports">
        Receive a comprehensive analysis of your performance. Our reports break
        down your speech, pacing, use of filler words, and the substance of your
        answers.
      </ServiceCard>
      <ServiceCard icon={<ResumeIcon />} title="Resume Optimization">
        Upload your resume to get an AI-driven analysis that helps you optimize
        it for both Applicant Tracking Systems (ATS) and human recruiters,
        ensuring you make a great first impression.
      </ServiceCard>
    </div>

    {/* How It Works Section */}
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-white mb-12">How It Works</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 top-5 h-full border-l-2 border-gray-700"></div>
        <div className="space-y-12">
          <Step
            number="1"
            title="Upload a Job Description"
            description="Provide a link to the job you're targeting. Our AI uses it to customize the interview questions, making your practice sessions highly relevant."
          />
          <Step
            number="2"
            title="Start Your Mock Interview"
            description="Begin your video-based mock interview whenever you're ready. Our AI interviewer will guide you through the session just like a real hiring manager."
          />
          <Step
            number="3"
            title="Receive & Review Your Feedback"
            description="Immediately after, you'll get a detailed performance report. Use the actionable insights to refine your answers and improve for the next round."
          />
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="bg-brand-light-dark text-center p-12 rounded-lg border border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Land Your Dream Job?
      </h2>
      <p className="text-brand-text-secondary max-w-2xl mx-auto mb-8">
        Stop guessing and start preparing with data-driven insights. Sign up for
        a free trial and experience the future of interview coaching.
      </p>
      <a
        href="#"
        className="bg-brand-accent text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
      >
        Start Your Free Trial
      </a>
    </div>
  </div>
);

export default Services;
