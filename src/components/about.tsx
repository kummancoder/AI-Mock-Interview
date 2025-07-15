// src/components/about.tsx
import React, { ReactNode } from "react";

// Props type for FeatureCard
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

// Reusable component for feature highlights
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => (
  <div className="bg-brand-light-dark p-6 rounded-lg border border-gray-800">
    <div className="flex items-center text-brand-accent mb-4">
      {icon}
      <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
    </div>
    <p className="text-brand-text-secondary">{children}</p>
  </div>
);

// Placeholder icons - can be replaced with icons from a library
const TargetIcon = () => (
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
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const BrainIcon = () => (
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
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ChatIcon = () => (
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
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const About: React.FC = () => (
  <div className="container mx-auto px-6 py-16">
    {/* Page Header */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-white mb-4">Our Mission</h1>
      <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
        We are democratizing interview preparation, providing every candidate
        with the tools and confidence needed to land their dream job.
      </p>
    </div>

    {/* The Challenge & Our Solution */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">
          The Challenge of Modern Interviews
        </h2>
        <p className="text-brand-text-secondary leading-relaxed">
          Job interviews are high-stakes and often stressful. Candidates
          struggle with a lack of realistic practice, subjective feedback, and
          the anxiety of the unknown. Knowing what to say and how to say it can
          be the difference between a job offer and a rejection.
        </p>
      </div>
      <div className="bg-brand-light-dark p-8 rounded-lg border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">
          Our AI-Powered Solution
        </h2>
        <p className="text-brand-text-secondary leading-relaxed">
          Our platform transforms interview prep by creating a safe, effective
          practice environment. We use advanced AI to simulate real interview
          scenarios, ask relevant questions, and provide instant, objective
          feedback so you can refine your answers and build unshakable
          confidence.
        </p>
      </div>
    </div>

    {/* What Makes Us Different */}
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-white mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard icon={<TargetIcon />} title="Hyper-Realistic Simulations">
          Practice with AI-generated questions tailored to the specific job
          description you provide, ensuring every session is relevant to your
          goals.
        </FeatureCard>
        <FeatureCard icon={<BrainIcon />} title="Expert-Level Feedback">
          Our AI, powered by expertly crafted prompts, analyzes your responses
          for clarity, structure, and impact—going beyond what generic tools
          like ChatGPT can offer.
        </FeatureCard>
        <FeatureCard
          icon={<ChatIcon />}
          title="Actionable Performance Insights"
        >
          Receive detailed feedback on everything from filler words to applying
          proven techniques like the STAR method, with clear suggestions for
          improvement.
        </FeatureCard>
      </div>
    </div>

    {/* Our Story Section */}
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
      <p className="text-brand-text-secondary leading-relaxed">
        Founded by a team of career coaches, AI specialists, and software
        engineers, our platform was born from a shared passion for leveling the
        playing field in the job market. We saw firsthand how many talented
        individuals were held back not by a lack of skill, but by a lack of
        interview practice. We are committed to continuously improving our
        platform to ensure we provide the highest quality experience for
        everyone navigating their career path.
      </p>
    </div>
  </div>
);

export default About;
