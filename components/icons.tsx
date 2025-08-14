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

export const TRFlagIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-6 rounded-sm border border-gray-200" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" className={className}>
        <rect width="32" height="24" fill="#FFFFFF"/>
        <rect y="2.5" width="32" height="3" fill="#E30A17"/>
        <rect y="18.5" width="32" height="3" fill="#E30A17"/>
        <path d="M14.5 12a3.5 3.5 0 1 0 0 .001z" fill="#E30A17"/>
        <path d="M15.5 12a2.8 2.8 0 1 0 0 .001z" fill="#FFFFFF"/>
        <path d="M18.25,10.6l0.8,2.15l2.35,-0.5l-1.8,1.4l0.8,2.15l-1.8,-1.4l-1.8,1.4l0.8,-2.15l-1.8,-1.4l2.35,0.5z" fill="#E30A17"/>
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

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);