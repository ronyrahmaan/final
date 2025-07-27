/**
 * This is the landing page for Md A Rahman's AI research portfolio. It
 * largely follows the structure of the original page from the upstream
 * project but has been adapted to remove references to the previous owner
 * (Raphael Girud) and to improve the user experience. The quick‑question
 * prompts align with the updated HelperBoost component and the "Open to
 * Collaborate" button has been replaced with a modal that outlines
 * Rahman's collaboration interests and internship opportunities.
 */

'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Layers,
  Laugh,
  PartyPopper,
  UserRoundSearch,
  BriefcaseIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
// Import the modal component that shows collaboration details
import OpenToCollaborateModal from '@/components/open-to-collaborate-modal';

/* ---------- quick‑question data ---------- */
// These prompts mirror those in the updated HelperBoost component and are
// tailored to Md A Rahman's research and interests. The keys correspond
// to UI buttons shown on the landing page.
const questions = {
  About: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What research are you working on right now?',
  Skills: 'What are your skills? Give me a list of your technical and research skills.',
  Hobbies: 'Tell me about your hobbies and personal interests.',
  Contact: 'How can I reach you? Are you open to collaboration?',
  Experience: 'Tell me about your work experience and roles you have held.',
  Vision: 'What is your long‑term vision and what motivates you?',
  Research: 'What are your main research areas and current projects?',
  Internships: 'Are you open to internships or other forms of collaboration?',
  Resume: 'Where can I download your full CV?',
} as const;

const questionConfig = [
  { key: 'About', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Hobbies', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
  { key: 'Experience', color: '#F17C0A', icon: BriefcaseIcon },
  { key: 'Vision', color: '#009688', icon: Laugh },
  { key: 'Research', color: '#7D4CDB', icon: Layers },
  { key: 'Internships', color: '#E09142', icon: BriefcaseIcon },
  { key: 'Resume', color: '#5A697B', icon: BriefcaseBusiness },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Dynamic roles that rotate after the main heading. Each role represents
  // a professional descriptor relevant to Rahman's expertise. Colors map to
  // each role for subtle visual variation. The index increments every few
  // seconds using a timer.
  const roles = [
    'AI Researcher',
    'AI/ML Engineer',
    'NLP Specialist',
    'Generative AI Enthusiast',
    'Data Scientist',
  ];
  const roleColors = [
    'text-blue-600 dark:text-blue-400',
    'text-purple-600 dark:text-purple-400',
    'text-green-600 dark:text-green-400',
    'text-pink-600 dark:text-pink-400',
    'text-orange-600 dark:text-orange-400',
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goToChat = (query: string) => router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Preload assets in background
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    // Preload videos too
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word with Rahman's full name */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[8rem] leading-none font-black text-transparent select-none sm:block lg:text-[12rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Md A Rahman
        </div>
      </div>

      {/* GitHub button */}
      <div className="absolute top-6 right-8 z-20">
        <GithubButton animationDuration={1.5} label="Star" size={'sm'} repoUrl="https://github.com/ronyrahmaan" />
      </div>

      <div className="absolute top-6 left-6 z-20">
        {/* Use the new modal trigger for collaboration */}
        <OpenToCollaborateModal />
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Md&nbsp;A&nbsp;Rahman
        </h2>
        {/* Main profession headline */}
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          AI Research Engineer
        </h1>
        {/* Dynamically rotating descriptors. The colour changes with each role. */}
        <div
          className={`mt-2 min-h-[1.5rem] min-w-[14rem] text-base font-medium sm:text-lg md:text-xl ${roleColors[roleIndex]} transition-colors duration-500`}
        >
          {roles[roleIndex]}
        </div>
      </motion.div>

      {/* centre portrait */}
      <div className="relative z-10 h-56 w-48 overflow-hidden rounded-xl sm:h-80 sm:w-72">
        <Image
          src="/landing-memojis.png"
          alt="Md A Rahman – Professional Portrait"
          width={800}
          height={800}
          priority
          className="object-cover object-center"
        />
      </div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free‑form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about my AI research…"
              className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick‑question grid */}
        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}