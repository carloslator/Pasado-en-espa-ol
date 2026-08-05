import React from 'react';
import { BookOpen, Table, CreditCard, HelpCircle, FileText, Zap } from 'lucide-react';

export type TabType = 'matrix' | 'verbs' | 'flashcards' | 'quiz' | 'readings' | 'wizard';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'matrix' as TabType, num: '01', label: 'Grammar Matrix', icon: BookOpen },
    { id: 'wizard' as TabType, num: '02', label: 'Tense Wizard', icon: Zap },
    { id: 'verbs' as TabType, num: '03', label: 'Verb Library', icon: Table },
    { id: 'flashcards' as TabType, num: '04', label: 'Flashcards', icon: CreditCard },
    { id: 'quiz' as TabType, num: '05', label: 'Practice Quiz', icon: HelpCircle },
    { id: 'readings' as TabType, num: '06', label: 'Reading Breakdown', icon: FileText },
  ];

  return (
    <header className="border-b border-[#1A1A1A] bg-[#F8F8F8] text-[#1A1A1A] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 gap-4">
          
          {/* Editorial Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#1A1A1A] text-white font-mono font-extrabold text-xs tracking-widest px-2.5 py-1.5 uppercase">
              LUZ
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tighter uppercase leading-none">
                  LUZ SPANISH
                </h1>
                <span className="accent-text font-serif italic text-lg font-normal">the past tenses</span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">
                Editorial Grammar Guide &amp; Linguistic Reference
              </p>
            </div>
          </div>

          {/* Editorial Numbered Navigation */}
          <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-tight px-3 py-2 transition-colors border ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A] hover:bg-[#F0F0F0]'
                  }`}
                >
                  <span className={isActive ? 'accent-text font-bold' : 'text-zinc-400 font-mono'}>{item.num}.</span>
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

        </div>
      </div>
    </header>
  );
};

