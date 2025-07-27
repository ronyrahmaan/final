/*
 * Custom collaboration modal imported from an external source. This component
 * presents detailed information about full‑time positions, internships and
 * research opportunities Rahman is interested in, along with technical
 * expertise and contact options. It uses framer‑motion for animations and
 * lucide‑react icons for visuals.
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  MapPin,
  Code2,
  Target,
  Briefcase,
  Sparkles,
  Brain,
  ChevronRight,
  Mail,
  MessageSquare,
} from 'lucide-react';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollaborationModal: React.FC<CollaborationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'full-time' | 'internship' | 'research'>('full-time');

  const opportunities = {
    'full-time': {
      title: 'Full‑Time Roles',
      description: 'Contribute as a core team member and thought leader',
      icon: <Briefcase className="w-4 h-4" />,
      content: {
        description:
          '🎯 Seeking impactful positions where I can architect and deploy cutting‑edge AI solutions, lead teams and drive innovation across the stack.',
        idealRoles: [
          'AI Research Engineer',
          'Machine Learning & NLP Specialist',
          'Data Scientist / ML Scientist',
          'Technical Lead – Applied AI',
        ],
        companyFocus: [
          'AI‑driven startups and scale‑ups',
          'Research & innovation labs',
          'Technology leaders pioneering generative AI',
          'Cross‑disciplinary teams in healthcare, robotics or sustainability',
        ],
      },
    },
    internship: {
      title: 'Internships & Fellowships',
      description: 'Deep dive into emerging technologies',
      icon: <Sparkles className="w-4 h-4" />,
      content: {
        description:
          '🌟 Looking for immersive programs to refine my skills in generative AI, machine learning and data engineering while contributing tangible results.',
        idealRoles: [
          'Research & Development Intern (AI/ML)',
          'Data Science Intern',
          'ML Engineering Rotation',
          'Innovation Fellowship',
        ],
        companyFocus: [
          '3–6 month intensive programs',
          'Summer research labs and ML residencies',
          'Part‑time roles alongside graduate studies',
          'Competitive fellowship cohorts',
        ],
      },
    },
    research: {
      title: 'Research Collaborations',
      description: 'Exploring the frontiers of AI',
      icon: <Brain className="w-4 h-4" />,
      content: {
        description:
          '🔬 Passionate about advancing the state of the art in large language models, multimodal learning and ethical AI.',
        idealRoles: [
          'LLM Fine‑Tuning & Prompt Engineering',
          'Multimodal & Sensor Fusion',
          'Responsible AI & Safety',
          'NLP for Low‑Resource Languages',
        ],
        companyFocus: [
          'Academic & industrial research partnerships',
          'Open‑source communities',
          'Conference & journal collaborations',
          'Cross‑disciplinary innovation initiatives',
        ],
      },
    },
  };

  const techStack = {
    'AI/ML': [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Hugging Face',
      'LangChain',
      'scikit‑learn',
      'Weights & Biases',
    ],
    Backend: ['Python', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB'],
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'D3.js'],
    DevOps: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions'],
  };

  const techColors = {
    'AI/ML': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
    Backend: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    Frontend: 'bg-green-500/20 text-green-600 border-green-500/30',
    DevOps: 'bg-orange-500/20 text-orange-600 border-orange-500/30',
  } as const;

  const handleContactClick = (type: 'email' | 'message') => {
    if (type === 'email') {
      window.open(
        'mailto:ara02434@ttu.edu?subject=Collaboration Opportunity&body=Hi Rahman,%0A%0AI saw your AI research portfolio and I\'m interested in discussing collaboration opportunities.%0A%0ABest regards',
        '_blank',
      );
    } else {
      window.open('https://www.linkedin.com/in/md-a-rahman-558519194', '_blank');
    }
    onClose();
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-neutral-900 p-6 border-b border-neutral-200 dark:border-neutral-700 rounded-t-3xl z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-accent border-2 border-blue-500/20 shadow-lg">
                  <img
                    src="/profile-rahman.png"
                    alt="Md A Rahman – Professional Headshot"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/landing-memojis.png';
                      target.className = 'h-full w-full object-cover object-center scale-150 translate-y-2';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Md A Rahman</h2>
                  <p className="text-muted-foreground">AI Research Engineer & Innovation Catalyst</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-green-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  Available
                </span>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <h3 className="font-medium text-foreground">Duration</h3>
                </div>
                <p className="text-sm text-muted-foreground">Flexible commitment – from 3 months to permanent positions</p>
              </div>
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <h3 className="font-medium text-foreground">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">Remote/Hybrid preferred, open to relocation for the right opportunity</p>
              </div>
              <div className="bg-accent rounded-2xl p-4 hover:bg-accent/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-purple-500" />
                  <h3 className="font-medium text-foreground">Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">AI/ML Research, Full‑Stack Development, Innovation</p>
              </div>
            </div>

            {/* Opportunity Types Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(opportunities).map(([key, opportunity]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as 'full-time' | 'internship' | 'research')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-accent text-muted-foreground hover:bg-accent/70'
                    }`}
                  >
                    {opportunity.icon}
                    <span className="text-sm">{opportunity.title}</span>
                  </button>
                ))}
              </div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-accent rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  {opportunities[activeTab].icon}
                  {opportunities[activeTab].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {opportunities[activeTab].content.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {activeTab === 'research' ? 'Research Interests:' : 'Ideal Roles:'}
                    </h4>
                    <ul className="space-y-2">
                      {opportunities[activeTab].content.idealRoles.map((role, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {activeTab === 'research' ? 'Collaboration Types:' : 'Company Focus:'}
                    </h4>
                    <ul className="space-y-2">
                      {opportunities[activeTab].content.companyFocus.map((focus, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* What I Bring & Goals */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  What I Bring
                </h3>
                <div className="space-y-4">
                  <div>
                  <h4 className="font-medium text-foreground mb-1">💡 AI/ML & Generative Practice</h4>
                    <p className="text-sm text-muted-foreground">
                      Hands‑on experience building machine learning, deep learning and generative AI solutions across academia and industry — from developing LiDAR safety systems and multilingual NLP pipelines at Texas Tech to fine‑tuning large language models on Hugging Face and deploying ML models and AI‑driven applications at One Stop IT Solutions. I also performed data analytics and visualization at IMPIT Limited.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">📊 Big Data & MLOps</h4>
                    <p className="text-sm text-muted-foreground">
                      Skilled in large‑scale data processing using Apache Spark, Hadoop and Hive, with expertise in exploratory data analysis, visualization and dashboarding. Experienced in deploying ML models via FastAPI, Flask and Streamlit and monitoring experiments with Weights & Biases and TensorBoard.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🤝 Leadership & Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Proven leadership as a team lead during internships and project collaborations. Adept at cross‑functional communication, mentoring peers and ensuring projects are delivered efficiently and collaboratively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Goals & Vision
                </h3>
                <div className="space-y-4">
                  <div>
                  <h4 className="font-medium text-foreground mb-1">🌍 Impactful & Inclusive AI Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Create technologies that genuinely improve lives — from generative models that assist clinicians and educators to smart transportation systems that save energy and enhance safety. I aim to ensure my work has positive societal impact across diverse communities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🧠 Ethical & Responsible AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Champion fair, transparent and accountable AI development. Ensure models are trained on diverse datasets and respect user privacy while mitigating bias.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">🔗 Collaborative Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Partner with diverse teams to push boundaries, share knowledge and foster cultures of curiosity, learning and interdisciplinary problem‑solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bg-accent rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3 text-center md:text-left">{category}</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all hover:scale-105 ${techColors[category as keyof typeof techColors]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm excited to discuss how we can work together to build innovative solutions and push the boundaries of AI technology. Let's create something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
                <button
                  onClick={() => handleContactClick('message')}
                  className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  LinkedIn Message
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CollaborationModal;