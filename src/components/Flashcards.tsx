import React, { useState } from 'react';
import { FLASHCARD_DECKS } from '../data/flashcards';
import { Flashcard } from '../types';
import { RotateCw, Check, X, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';

export const Flashcards: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, review: 0 });

  const currentDeck = FLASHCARD_DECKS.filter(
    (card) => selectedDeck === 'all' || card.deckCategory === selectedDeck
  );

  const currentCard: Flashcard | undefined = currentDeck[currentIndex];

  const handleNext = (known: boolean) => {
    if (known) {
      setScore((s) => ({ ...s, correct: s.correct + 1 }));
    } else {
      setScore((s) => ({ ...s, review: s.review + 1 }));
    }
    setIsFlipped(false);
    if (currentIndex < currentDeck.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore({ correct: 0, review: 0 });
  };

  const categories = [
    { id: 'all', label: 'All Decks' },
    { id: 'preterite_vs_imperfect', label: 'Preterite vs Imperfect' },
    { id: 'irregular_past', label: 'Irregular Preterites' },
    { id: 'compound_tenses', label: 'Compound Tenses' },
    { id: 'periphrases', label: 'Past Periphrases' },
    { id: 'special_uses', label: 'Courtesy & Modal Uses' },
  ];

  return (
    <div className="space-y-6 font-sans">
      
      {/* Deck Selector Header */}
      <div className="bg-white border border-[#1A1A1A] p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E5E5] pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 accent-text" />
            <h3 className="font-extrabold text-sm uppercase tracking-tight text-[#1A1A1A]">
              Active Recall Flashcard Practice
            </h3>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono">
            <span className="text-zinc-600">
              Card {currentDeck.length > 0 ? currentIndex + 1 : 0} / {currentDeck.length}
            </span>
            <span className="text-emerald-700 font-bold">Known: {score.correct}</span>
            <span className="accent-text font-bold">Review: {score.review}</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`deck-btn-${cat.id}`}
              onClick={() => {
                setSelectedDeck(cat.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`text-xs font-mono uppercase px-3 py-1.5 border transition-colors ${
                selectedDeck === cat.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                  : 'bg-[#F8F8F8] text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Editorial Flashcard Container */}
      {currentCard ? (
        <div className="max-w-2xl mx-auto space-y-4">
          
          <div
            id="flashcard-card"
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] min-h-[340px] p-8 sm:p-10 flex flex-col justify-between transition-all relative border-t-4 border-t-[#D72638]"
          >
            {/* Card Badge Top */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <span className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] accent-text">
                EXERCISE 0{currentIndex + 1} / {isFlipped ? 'ANSWER & RULE' : 'SPANISH PROMPT'}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase flex items-center space-x-1">
                <RotateCw className="w-3.5 h-3.5 mr-1" /> Click anywhere to flip
              </span>
            </div>

            {/* Card Body */}
            <div className="py-8 space-y-4">
              {!isFlipped ? (
                /* FRONT */
                <div className="space-y-4 text-center">
                  <p className="text-2xl sm:text-3xl font-normal font-serif italic leading-snug text-white">
                    "{currentCard.frontSpanish}"
                  </p>
                  <p className="text-xs font-mono text-zinc-400">
                    Context Cue: <span className="text-white underline">{currentCard.cueContext}</span>
                  </p>
                </div>
              ) : (
                /* BACK */
                <div className="space-y-4">
                  <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-1">
                    <span className="text-[10px] font-mono accent-text uppercase block font-bold tracking-widest">Complete Translation</span>
                    <p className="text-xl font-normal font-serif italic text-white">
                      "{currentCard.backEnglish}"
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300 font-sans">
                    <div className="flex items-start space-x-2">
                      <span className="font-mono text-zinc-400 uppercase font-bold shrink-0">Rule:</span>
                      <span className="leading-relaxed">{currentCard.ruleExplanation}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="border-t border-zinc-800 pt-3 text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {isFlipped ? 'Self-grade below to advance' : 'Tap to reveal answer & rule breakdown'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              id="flashcard-flip-btn"
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex-1 py-3 bg-white hover:bg-[#F8F8F8] border border-[#1A1A1A] text-[#1A1A1A] font-mono text-xs uppercase font-bold flex items-center justify-center space-x-2"
            >
              <RotateCw className="w-4 h-4" />
              <span>{isFlipped ? 'Show Front' : 'Show Answer'}</span>
            </button>

            {isFlipped && (
              <>
                <button
                  id="flashcard-need-practice-btn"
                  onClick={() => handleNext(false)}
                  className="flex-1 py-3 bg-red-50 hover:bg-red-100 border border-[#D72638] text-[#D72638] font-mono text-xs uppercase font-bold flex items-center justify-center space-x-1.5"
                >
                  <X className="w-4 h-4" />
                  <span>Need Practice</span>
                </button>

                <button
                  id="flashcard-got-it-btn"
                  onClick={() => handleNext(true)}
                  className="flex-1 py-3 bg-[#1A1A1A] hover:bg-zinc-800 text-white font-mono text-xs uppercase font-bold flex items-center justify-center space-x-1.5"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Got It Right</span>
                </button>
              </>
            )}
          </div>

        </div>
      ) : (
        /* Deck Completed View */
        <div className="bg-white border border-[#1A1A1A] p-8 text-center space-y-4 max-w-md mx-auto">
          <HelpCircle className="w-12 h-12 accent-text mx-auto" />
          <h3 className="text-2xl font-extrabold uppercase text-[#1A1A1A]">
            Deck Completed!
          </h3>
          <p className="text-xs text-zinc-600 font-mono">
            You scored {score.correct} known and {score.review} needing review.
          </p>
          <button
            id="flashcard-restart-btn"
            onClick={handleReset}
            className="w-full py-3.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase font-bold flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Restart Deck</span>
          </button>
        </div>
      )}

    </div>
  );
};

