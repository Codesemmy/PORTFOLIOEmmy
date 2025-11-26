// src/assets/icons/icons.tsx
import React from "react";

// -----------------------------
// Placeholder Icon Component
// -----------------------------
const PlaceholderIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" stroke="black" strokeWidth="2" />
    <path d="M6 12H18" stroke="black" strokeWidth="2" />
  </svg>
);

// -----------------------------
// Tech Stack Icons (Placeholders)
// -----------------------------
export const AntDesignIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const BootstrapIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ElectronIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const FirebaseIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const GitIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const JavascriptIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const JqueryIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const MaterialUiIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const NetlifyIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ReduxIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const SassIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const WebpackIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;

// -----------------------------
// Social Icons
// -----------------------------
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
    <path d="M9 18C9 17 9 16 9.5 15.5C8 15.5 7 14.5 7 13C7 12 7.5 11 8 10.5C7.9 10 7.8 9 8.2 8C8.2 8 9.3 8 10.5 9C11.1 8.8 11.7 8.7 12.3 8.7C12.9 8.7 13.5 8.8 14.1 9C15.3 8 16.4 8 16.4 8C16.8 9 16.7 10 16.6 10.5C17.1 11 17.5 12 17.5 13C17.5 14.5 16.5 15.5 15 15.5C15.5 16 15.5 17 15.5 18" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="black" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2" />
    <circle cx="17" cy="7" r="1" fill="black" />
  </svg>
);

export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20 7.5C19.4 7.8 18.8 8 18.1 8.1C18.8 7.7 19.3 7 19.5 6.2C18.9 6.5 18.2 6.7 17.5 6.8C16.9 6.1 16 5.7 15.1 5.7C13.4 5.7 12 7.1 12 8.9C12 9.2 12 9.5 12.1 9.8C9.7 9.7 7.6 8.6 6.1 6.9C5.8 7.4 5.7 8.1 5.7 8.7C5.7 9.9 6.3 10.9 7.3 11.5C6.8 11.5 6.3 11.4 5.9 11.2C5.9 12.8 7 14.1 8.5 14.4C8.2 14.5 7.9 14.5 7.6 14.5C7.4 14.5 7.2 14.5 7 14.4C7.4 15.7 8.7 16.6 10.2 16.6C9.1 17.5 7.7 18 6.2 18C5.9 18 5.6 18 5.3 17.9C6.8 18.9 8.6 19.5 10.5 19.5C15.1 19.5 17.9 15.2 17.9 11.3C17.9 11.2 17.9 11 17.9 10.9C18.6 10.4 19.3 9.7 19.8 8.9L20 7.5Z" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="black" strokeWidth="2" />
    <rect x="7" y="10" width="2" height="7" fill="black" />
    <circle cx="8" cy="8" r="1" fill="black" />
    <path d="M13 17V12.5C13 11.7 13.7 11 14.5 11C15.3 11 16 11.7 16 12.5V17" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// -----------------------------
// Contact/Social Icons
// -----------------------------
export const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <PlaceholderIcon {...props} />
);
export const GmailDarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <PlaceholderIcon {...props} />
);
export const LinkedInContactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <PlaceholderIcon {...props} />
);
export const TwitterContactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <PlaceholderIcon {...props} />
);

// -----------------------------
// Decorative Rectangles
// -----------------------------
export const GoldRects: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100" height="50" {...props}>
    <rect width="100" height="50" fill="gold" />
  </svg>
);

export const GreenRects: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100" height="50" {...props}>
    <rect width="100" height="50" fill="green" />
  </svg>
);

export const PinkRects: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100" height="50" {...props}>
    <rect width="100" height="50" fill="pink" />
  </svg>
);

export const PurpleRects: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100" height="50" {...props}>
    <rect width="100" height="50" fill="purple" />
  </svg>
);
