// src/components/contact.tsx
import React from "react";

// Type definition for FAQ Item
interface FaqItemProps {
  question: string;
  answer: string;
}

// Reusable component for FAQ items
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => (
  <div className="py-6 border-b border-gray-800">
    <h4 className="text-xl font-semibold text-white mb-2">{question}</h4>
    <p className="text-brand-text-secondary">{answer}</p>
  </div>
);

// Simple SVG Icons for contact details
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Contact: React.FC = () => (
  <div className="container mx-auto px-6 py-16">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
      <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
        We're here to help you ace your next interview. If you have questions
        about our AI mock interview simulations, feedback reports, or pricing,
        our team is ready to assist you.
      </p>
    </div>

    {/* Main Content: Two-column layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Column 1: Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Contact Information
          </h3>
          <p className="text-brand-text-secondary mb-6">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-brand-accent">
                <PhoneIcon />
              </div>
              <span className="text-brand-text-secondary">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-brand-accent">
                <MailIcon />
              </div>
              <span className="text-brand-text-secondary">
                support@aimockinterview.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-brand-accent">
                <LocationIcon />
              </div>
              <span className="text-brand-text-secondary">
                123 AI Street, Tech City, 12345
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Business Hours
          </h3>
          <ul className="text-brand-text-secondary space-y-2">
            <li>Monday - Friday: 9am - 6pm (EST)</li>
            <li>Saturday: 10am - 4pm (EST)</li>
            <li>Sunday & Holidays: Closed</li>
          </ul>
        </div>

        <div className="bg-brand-light-dark h-64 rounded-lg border border-gray-800 flex items-center justify-center">
          <p className="text-brand-text-secondary">Google Map Placeholder</p>
        </div>
      </div>

      {/* Column 2: Contact Form */}
      <div className="bg-brand-light-dark p-8 rounded-lg border border-gray-800">
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-brand-text-secondary mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-brand-text-secondary mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-brand-text-secondary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
              className="w-full p-3 bg-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-brand-accent text-black font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-24">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        <FaqItem
          question="What is the main benefit of an AI mock interview?"
          answer="Our platform provides instant, objective feedback on your answers, pacing, and communication style, helping you identify areas for improvement much faster than traditional practice."
        />
        <FaqItem
          question="Can I try a mock interview for free?"
          answer="Yes, we offer a free trial that includes one complete AI mock interview. You can experience our feedback system firsthand by signing up with the 'Get Started' button."
        />
        <FaqItem
          question="How is my performance evaluated?"
          answer="Our AI analyzes metrics like the clarity of your answers, use of relevant keywords, speech rate, and filler words to provide a comprehensive performance report with actionable tips."
        />
      </div>
    </div>
  </div>
);

export default Contact;
