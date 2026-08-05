import { useState } from 'react';
import { Header, TabType } from './components/Header';
import { GrammarMatrix } from './components/GrammarMatrix';
import { TenseWizard } from './components/TenseWizard';
import { VerbConjugator } from './components/VerbConjugator';
import { Flashcards } from './components/Flashcards';
import { QuizEngine } from './components/QuizEngine';
import { ReadingBreakdown } from './components/ReadingBreakdown';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('matrix');

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans flex flex-col border-t-[12px] border-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      
      {/* Top Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Stage */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'matrix' && <GrammarMatrix />}
        {activeTab === 'wizard' && <TenseWizard />}
        {activeTab === 'verbs' && <VerbConjugator />}
        {activeTab === 'flashcards' && <Flashcards />}
        {activeTab === 'quiz' && <QuizEngine />}
        {activeTab === 'readings' && <ReadingBreakdown />}
      </main>

      {/* Editorial Aesthetic Footer */}
      <footer className="border-t border-[#1A1A1A] bg-[#F8F8F8] py-8 text-[#1A1A1A] font-sans mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 accent-text" />
              <span className="font-mono font-bold text-xs uppercase tracking-widest">
                LUZ SPANISH / EDITORIAL GRAMMAR REFERENCE
              </span>
            </div>
            <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
              Based on Montero-Cádiz (2019) <em className="serif-italic font-normal">"La Temporalidad Lingüística en Español"</em>, incorporating foundational theories by Andrés Bello (1847), Hans Reichenbach (1947), Guillermo Rojo &amp; Alexandre Veiga (1999), Gilles Luquet (2004), Jukka Havu (1998), and RAE NGLE (2009).
            </p>
          </div>

          <div className="text-right font-mono text-[10px] text-zinc-500 uppercase space-y-0.5 border-l md:border-l-0 border-[#E5E5E5] pl-4 md:pl-0">
            <div>Editorial Aesthetic Edition</div>
            <div>Built for English Learners of Spanish</div>
          </div>

        </div>
      </footer>

    </div>
  );
}

