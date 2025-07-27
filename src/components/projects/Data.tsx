// This file uses React state for the image carousel and must run on the client.
// Mark it as a Client Component so Next.js knows to hydrate it on the client.
'use client';

import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { useState } from 'react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'LiDAR Infrastructure Safety - TxDOT Project',
    description:
      'Developed a robust pipeline for Texas Department of Transportation (TxDOT) to process Velodyne LiDAR sensor data in real time for infrastructure safety evaluation. The system segments PCAP files into fixed-time sequences and converts data to CSV format for analysis in VeloView & ParaView, ensuring lossless capture with multi-process parallelism for scalable deployment.',
    techStack: [
      'Python',
      'LiDAR Processing',
      'PCAP Analysis',
      'VeloView',
      'ParaView',
      'Real-time Data Processing',
      'Multiprocessing',
      'Computer Vision',
      'Sensor Data Analytics'
    ],
    date: '2024-2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan/LiDAR-Infrastructure-Safety-TxDOT',
      },
      {
        name: 'Research Documentation',
        // Replace with the actual URL to your documentation or report
        url: 'https://drive.google.com/your-research-document.pdf',
      }
    ],
    // Updated image list for the LiDAR project.  These point to real LiDAR
    // diagrams stored in the public folder. Each path begins with `/` so
    // Next.js serves the image from the `public` directory【804110948676109†L461-L466】.
    images: [
      { src: '/projects/lidar/pipeline_overview.png', alt: 'LiDAR pipeline overview' },
      { src: '/projects/lidar/udp_decoding.png', alt: 'LiDAR UDP packet decoding' },
      { src: '/projects/lidar/calibration_process.png', alt: 'LiDAR calibration process' },
      { src: '/projects/lidar/background_filtering.png', alt: 'LiDAR background filtering comparison' },
      { src: '/projects/lidar/dbscan_clustering.png', alt: 'LiDAR DBSCAN clustering diagram' },
      { src: '/projects/lidar/packet_stream_funnel.png', alt: 'LiDAR packet stream processing funnel' },
      { src: '/projects/lidar/pcap_recording_funnel.png', alt: 'LiDAR PCAP recording process funnel' },
    ],
    // Provide a concise code snippet to illustrate the pipeline. This will be
    // displayed in the project details component.
    code: `# Simplified example of decoding Velodyne packets and writing CSV\nimport csv, socket\nfrom velodyne_decoder import decode_packet\n\nwith open('output.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['x','y','z','intensity'])\n    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    sock.bind(('0.0.0.0', 2368))\n    while True:\n        packet, _ = sock.recvfrom(1206)\n        points = decode_packet(packet)\n        writer.writerows(points)`,
  },
  {
    title: 'PolyHope - Hope Speech & Sarcasm Detection',
    description:
      'A dual-task neural framework leveraging Transformers and BiLSTM for multilingual classification of hope speech and sarcasm detection. Built for social media content moderation and sentiment analytics use cases, the system integrates multi-head attention and contextual embedding fusion for enhanced accuracy in understanding nuanced human language patterns.',
    techStack: [
      'Python',
      'PyTorch',
      'Transformers',
      'BiLSTM',
      'BERT',
      'Multi-head Attention',
      'NLP',
      'Sentiment Analysis',
      'Deep Learning'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Research Paper',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/polyhope-1.png',
        alt: 'PolyHope model architecture',
      },
      {
        src: '/polyhope-2.png',
        alt: 'Sentiment analysis results',
      },
    ],
  },
  {
    title: 'AI vs Human Text Detection Framework',
    description:
      'Designed a sophisticated classifier using entropy, perplexity, and DetectGPT-based techniques to distinguish between AI-generated and human-written text. The system was tested against ChatGPT, Claude, and other LLM outputs using adversarial samples and deployed as a live Streamlit application for academic and journalistic integrity assessment.',
    techStack: [
      'Python',
      'Transformers',
      'DetectGPT',
      'Streamlit',
      'NLP',
      'Statistical Analysis',
      'Machine Learning',
      'Text Classification'
    ],
    date: '2024',
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/ai-detection-1.png',
        alt: 'AI text detection interface',
      },
      {
        src: '/ai-detection-2.png',
        alt: 'Detection accuracy results',
      }
    ],
  },
  {
    title: 'Upcoming Research Project 1',
    description:
      'Currently in development - Advanced AI system for real-time multilingual sentiment analysis with focus on social media applications and content moderation. Stay tuned for updates!',
    techStack: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Deep Learning'],
    date: '2025',
    links: [
      {
        name: 'Coming Soon',
        url: 'https://github.com/ronyrahmaan',
      },
    ],
    images: [
      {
        src: '/placeholder-project-1.png',
        alt: 'Upcoming project preview',
      }
    ],
  },
  {
    title: 'Upcoming Research Project 2',
    description:
      'In progress - Novel approach to LiDAR data processing for autonomous vehicle navigation with enhanced safety protocols. Research collaboration with industry partners.',
    techStack: ['Python', 'Computer Vision', 'LiDAR', 'Machine Learning', 'Safety Systems'],
    date: '2025',
    links: [
      {
        name: 'Research Preview',
        url: 'https://github.com/ronyrahmaan',
      },
    ],
    images: [
      {
        src: '/placeholder-project-2.png',
        alt: 'LiDAR research preview',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  // Manage state for image carousel. Display one image at a time with
  // keyboard‑accessible controls. If no images are provided, the carousel
  // gracefully does not render.
  const images = projectData.images ?? [];
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {/* Image carousel: show one image at a time with arrow controls */}
      {images.length > 0 && (
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900">
          <Image
            src={images[currentImg].src}
            alt={images[currentImg].alt}
            width={1280}
            height={720}
            // Use object-contain to prevent cropping and add padding for breathing room
            className="h-72 w-full object-contain p-4 sm:h-96"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lg font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                ‹
              </button>
              <button
                onClick={nextImg}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-lg font-bold text-foreground shadow-md backdrop-blur hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      {/* Code snippet section */}
      {projectData.code && (
        <div>
          <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            Code Snippet
          </h3>
          <pre className="max-h-60 overflow-auto rounded-lg bg-neutral-100 p-4 text-xs font-mono dark:bg-neutral-800">
            <code>{projectData.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Research Project',
    title: 'LiDAR Infrastructure Safety - TxDOT Project',
    src: '/lidar-preview.png',
    content: <ProjectContent project={{ title: 'LiDAR Infrastructure Safety - TxDOT Project' }} />,
  },
  {
    category: 'NLP Research',
    title: 'PolyHope - Hope Speech & Sarcasm Detection',
    src: '/polyhope-preview.png',
    content: <ProjectContent project={{ title: 'PolyHope - Hope Speech & Sarcasm Detection' }} />,
  },
  {
    category: 'AI Detection',
    title: 'AI vs Human Text Detection Framework',
    src: '/ai-detection-preview.png',
    content: <ProjectContent project={{ title: 'AI vs Human Text Detection Framework' }} />,
  },
  {
    category: 'Upcoming',
    title: 'Upcoming Research Project 1',
    src: '/placeholder-preview-1.png',
    content: <ProjectContent project={{ title: 'Upcoming Research Project 1' }} />,
  },
  {
    category: 'Upcoming',
    title: 'Upcoming Research Project 2',
    src: '/placeholder-preview-2.png',
    content: <ProjectContent project={{ title: 'Upcoming Research Project 2' }} />,
  },
];
