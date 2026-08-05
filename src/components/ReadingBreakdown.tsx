import React, { useState } from 'react';
import { READING_PASSAGES } from '../data/readings';
import { AnnotatedVerb, ReadingPassage } from '../types';
import { Search, CheckCircle2, XCircle, Info, FileText } from 'lucide-react';

export const ReadingBreakdown: React.FC = () => {
  const [selectedPassageId, setSelectedPassageId] = useState<string>('passage_1');
  const [activeVerbInfo, setActiveVerbInfo] = useState<AnnotatedVerb | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const passage: ReadingPassage =
    READING_PASSAGES.find((p) => p.id === selectedPassageId) || READING_PASSAGES[0];

  const renderInteractiveText = (text: string, verbsMap: Record<string, AnnotatedVerb>) => {
    const words = text.split(/(\s+|[.,!¿?¡])/);

    return words.map((token, idx) => {
      const cleanToken = token.trim().toLowerCase();
      let verbMatch: AnnotatedVerb | undefined = undefined;

      for (const key of Object.keys(verbsMap)) {
        if (cleanToken === key || text.toLowerCase().includes(key) && cleanToken && key.includes(cleanToken)) {
          if (cleanToken === key || cleanToken.length > 2 && key.startsWith(cleanToken)) {
            verbMatch = verbsMap[key];
            break;
          }
        }
      }

      if (verbMatch) {
        const isSelected = activeVerbInfo?.verbForm === verbMatch.verbForm;
        return (
          <span
            key={idx}
            onClick={() => setActiveVerbInfo(verbMatch)}
            className={`cursor-pointer px-1 py-0.5 font-bold font-mono transition-colors inline-block my-0.5 border ${
              isSelected
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] accent-border'
                : 'bg-red-50 text-[#D72638] border-[#D72638] hover:bg-[#1A1A1A] hover:text-white'
            }`}
            title="Click to inspect past tense grammar"
          >
            {token}
          </span>
        );
      }

      return <span key={idx}>{token}</span>;
    });
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Passage Selector Bar */}
      <div className="bg-white border border-[#1A1A1A] p-5 space-y-3">
        <div className="flex items-center space-x-2 border-b border-[#E5E5E5] pb-2">
          <FileText className="w-5 h-5 accent-text" />
          <h3 className="font-extrabold text-sm uppercase tracking-tight text-[#1A1A1A]">
            Interactive Editorial Reading Passages
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {READING_PASSAGES.map((p) => (
            <button
              key={p.id}
              id={`passage-btn-${p.id}`}
              onClick={() => {
                setSelectedPassageId(p.id);
                setActiveVerbInfo(null);
                setUserAnswers({});
              }}
              className={`text-xs font-mono uppercase px-3 py-1.5 border transition-all ${
                selectedPassageId === p.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                  : 'bg-[#F8F8F8] text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Reading & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Spanish Reading Column */}
        <div className="lg:col-span-2 bg-white border border-[#1A1A1A] p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase bg-[#1A1A1A] text-white px-2.5 py-1 font-bold block tracking-widest w-fit mb-2">
              CLICK HIGHLIGHTED VERBS TO INSPECT
            </span>
            <h3 className="text-3xl font-extrabold uppercase text-[#1A1A1A] tracking-tight">
              {passage.title}
            </h3>
            <p className="text-xs text-zinc-600 font-mono mt-1">
              {passage.subtitle}
            </p>
          </div>

          {/* Interactive Spanish Text Box */}
          <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-6 text-lg font-serif italic leading-relaxed text-[#1A1A1A] space-y-4">
            <p>{renderInteractiveText(passage.spanishText, passage.verbsInPassage)}</p>
          </div>

          {/* English Translation Collapsible Box */}
          <div className="border border-[#E5E5E5] bg-[#F8F8F8] p-4 space-y-1.5">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold tracking-widest">
              ENGLISH TRANSLATION
            </span>
            <p className="text-xs text-[#1A1A1A] italic leading-relaxed font-sans">
              "{passage.englishTranslation}"
            </p>
          </div>

          {/* Comprehension Quiz Questions */}
          <div className="border-t border-[#1A1A1A] pt-6 space-y-4">
            <h4 className="font-mono text-xs uppercase font-extrabold text-[#1A1A1A]">
              Grammar Comprehension Questions
            </h4>
            
            {passage.comprehensionQuestions.map((q, qIdx) => {
              const selectedOpt = userAnswers[qIdx];
              const isSubmitted = selectedOpt !== undefined;

              return (
                <div key={qIdx} className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 space-y-3">
                  <p className="text-xs font-bold text-[#1A1A1A]">
                    {qIdx + 1}. {q.question}
                  </p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      const isRight = oIdx === q.correctIndex;

                      let btnStyle = 'bg-white border-[#E5E5E5] text-[#1A1A1A] hover:border-[#1A1A1A]';
                      if (isSubmitted) {
                        if (isRight) {
                          btnStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold';
                        } else if (isChosen) {
                          btnStyle = 'bg-red-50 border-[#D72638] text-[#D72638] font-bold';
                        } else {
                          btnStyle = 'bg-white border-[#E5E5E5] text-zinc-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          id={`comp-opt-${qIdx}-${oIdx}`}
                          onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))}
                          className={`w-full text-left p-2.5 border text-xs font-mono transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isRight && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                          {isSubmitted && isChosen && !isRight && <XCircle className="w-4 h-4 text-[#D72638]" />}
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <p className="text-xs font-mono text-zinc-700 pt-2 border-t border-[#E5E5E5]">
                      💡 {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Verb Grammar Inspector Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-[#1A1A1A] p-6 space-y-4 sticky top-20">
            <div className="flex items-center space-x-2 border-b border-[#1A1A1A] pb-2">
              <Search className="w-4 h-4 accent-text" />
              <h4 className="font-mono text-xs uppercase font-extrabold text-[#1A1A1A]">
                Grammar Inspector
              </h4>
            </div>

            {activeVerbInfo ? (
              <div className="space-y-4 text-xs">
                <div className="bg-[#1A1A1A] text-white p-4 border-l-4 border-[#D72638] space-y-1">
                  <span className="text-[9px] font-mono uppercase accent-text block font-bold tracking-widest">Verb Form In Passage</span>
                  <p className="text-2xl font-mono font-bold text-white">{activeVerbInfo.verbForm}</p>
                  <p className="text-xs text-zinc-300">
                    Infinitive: <strong className="text-white font-mono">{activeVerbInfo.infinitive}</strong> ("{activeVerbInfo.englishTranslation}")
                  </p>
                </div>

                <div className="space-y-1.5 border-b border-[#E5E5E5] pb-3">
                  <span className="font-extrabold text-[#1A1A1A] uppercase block font-mono text-[11px]">Tense Classification</span>
                  <p className="font-bold text-[#1A1A1A]">{activeVerbInfo.tenseName}</p>
                  <span className="inline-block bg-[#F8F8F8] text-[#1A1A1A] border border-[#E5E5E5] font-mono text-[11px] px-2 py-0.5">
                    {activeVerbInfo.formula}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-extrabold text-[#1A1A1A] uppercase block font-mono text-[11px]">Grammar Analysis in Context</span>
                  <p className="text-zinc-700 font-sans leading-relaxed">
                    {activeVerbInfo.reasonInContext}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-zinc-500 space-y-2">
                <Info className="w-8 h-8 accent-text mx-auto opacity-80" />
                <p className="text-xs font-mono leading-relaxed">
                  Click any highlighted verb in the text on the left to see its tense classification, base infinitive, vector formula, and grammar analysis!
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

