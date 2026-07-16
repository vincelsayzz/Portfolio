/**
 * Hand-drawn, dependency-free SVG icons. Every icon uses `currentColor`
 * so it inherits color (and the neon glow filter) straight from CSS -
 * no icon font or extra npm package required.
 */

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10.2V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M7.5 7.35a.15.15 0 100-.3.15.15 0 000 .3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3 17v-4.1c0-1.3.9-2.4 2.3-2.4s2.2 1.1 2.2 2.4V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.3 10.2V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.8 21v-6.6h2.2l.4-2.7h-2.6V9.9c0-.8.2-1.3 1.3-1.3h1.4V6.2c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9.4v2.7h2v6.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 6.2l7.6 6.1a1.6 1.6 0 002 0l7.6-6.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.73 7.77 6.51 9.03.48.09.65-.21.65-.46v-1.79c-2.65.58-3.2-1.14-3.2-1.14-.44-1.11-1.06-1.4-1.06-1.4-.87-.59.07-.58.07-.58.96.07 1.46.98 1.46.98.85 1.46 2.24 1.04 2.78.79.09-.62.34-1.04.61-1.28-2.12-.24-4.35-1.06-4.35-4.71 0-1.04.37-1.89.98-2.56-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.62.98a9.1 9.1 0 014.77 0c1.82-1.24 2.62-.98 2.62-.98.51 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.66-2.23 4.47-4.36 4.7.35.3.65.89.65 1.8v2.66c0 .25.17.56.66.46A9.51 9.51 0 0021.5 12c0-5.25-4.25-9.5-9.5-9.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleDriveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 3L21 19H3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 3L12 13.5M3 19L12 13.5M21 19L12 13.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function FigmaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 7A2.5 2.5 0 019.5 4.5 2.5 2.5 0 0112 7V9.5H7V7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M7 9.5H12V14.5H7V9.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="9.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 9.5H14.5A2.5 2.5 0 0117 12 2.5 2.5 0 0114.5 14.5H12V9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.5 6.5h-3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 4.5H19.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19.5 4.5L10.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 11L12 4L20 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.5V19a1 1 0 001 1h3v-5h4v5h3a1 1 0 001-1V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EducationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.5 9L12 4.5L21.5 9L12 13.5L2.5 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.5 11V16C6.5 16 8.5 18 12 18C15.5 18 17.5 16 17.5 16V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 9V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CertificationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 14L7.5 21L12 18.5L16.5 21L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 9L11 10.5L14.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeadershipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="8.5" r="2.6" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
      <path
        d="M14.8 13.7c2.2.4 3.9 2.2 3.9 4.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}