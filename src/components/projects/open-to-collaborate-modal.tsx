// The original modal used a basic card inside a Dialog from shadcn. This updated
// version wraps the new CollaborationModal component from ``collaboration-modal.tsx``
// and exposes a simple button that toggles its visibility. By managing the
// modal state locally and passing ``isOpen``/``onClose`` props to
// CollaborationModal, we avoid duplicating modal logic and ensure a cohesive
// design across the application.
import { useState } from 'react';
import CollaborationModal from './collaboration-modal';

/**
 * Modal component that reveals the types of collaborations and opportunities
 * Md A Rahman is interested in. The trigger mimics the original "Open to
 * Collaborate" button with a pulsing green dot. When clicked, a dialog
 * appears with a card detailing research roles, internships and areas
 * of interest.
 */
export default function OpenToCollaborateModal() {
  // Manage local state to control visibility of the collaboration pop‑up. When
  // ``isOpen`` is true, the CollaborationModal will be rendered on top of
  // everything else. ``setIsOpen(false)`` is passed down to close it.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
      >
        {/* Green pulse dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Open to Collaborate
      </button>
      {/* Render the comprehensive modal when requested */}
      <CollaborationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}