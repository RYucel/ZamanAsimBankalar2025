import React from 'react';

export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4 text-gray-500" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export const ArrowDownIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4 text-gray-500" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5 text-gray-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const TRFlagIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-6 rounded-sm" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" className={className}>
        <rect width="32" height="24" fill="#E30A17"/>
        <path d="M13.5 12a5 5 0 100 .001z" fill="#fff"/>
        <path d="M15 12a4 4 0 100 .001z" fill="#E30A17"/>
        <path d="M19.5 12l-2.43-1.644-1.5 2.598 1.5-2.598L17.07 10.356 15 8l1.5 2.598 2.43-1.644-1.5 2.598L19.5 12z" fill="#fff"/>
    </svg>
);

export const GBFlagIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-6 rounded-sm" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36" className={className}>
      <clipPath id="a"><path d="M0 0v36h60V0z"/></clipPath>
      <clipPath id="b"><path d="M30 18v18h30V18zM0 18v18h30V18zM30 0v18h30V0zM0 0v18h30V0z"/></clipPath>
      <g clipPath="url(#a)">
        <path d="M0 0v36h60V0z" fill="#012169"/>
        <path d="M0 0l60 36m0-36L0 36" stroke="#fff" strokeWidth="6"/>
        <path d="M0 0l60 36m0-36L0 36" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
);
