import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { GBFlagIcon, TRFlagIcon } from './icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLocalization();

  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center space-x-2 z-10">
      <button
        onClick={() => setLanguage('tr')}
        className={`p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity ${language === 'tr' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
        aria-label="Türkçeye geç"
        title="Türkçe"
      >
        <TRFlagIcon />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
        aria-label="Switch to English"
        title="English"
      >
        <GBFlagIcon />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
