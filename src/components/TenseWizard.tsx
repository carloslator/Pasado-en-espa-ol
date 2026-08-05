import React, { useState } from 'react';
import { PAST_TENSES } from '../data/tenses';
import { PastTenseInfo } from '../types';
import { Zap, CheckCircle2 } from 'lucide-react';

export const TenseWizard: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario_1');

  const scenarios = [
    {
      id: 'scenario_1',
      title: 'A single completed action at a specific time',
      englishExample: '"Yesterday I bought a book" or "I left at 5 PM"',
      targetTenseId: 'preterite',
      why: 'In Spanish, closed past events with a clear beginning and end use the Preterite (Snapshot 📸).'
    },
    {
      id: 'scenario_2',
      title: 'A past habit, repeated routine, or childhood memory',
      englishExample: '"When I was young, I played outside every day"',
      targetTenseId: 'imperfect',
      why: 'Habitual background routines without a defined end point use the Imperfect (Movie 🎬).'
    },
    {
      id: 'scenario_3',
      title: 'Setting the background scene, age, weather, or time',
      englishExample: '"It was 8 o\'clock and it was raining when..."',
      targetTenseId: 'imperfect',
      why: 'Background environment, time, weather, and mental states in the past use the Imperfect.'
    },
    {
      id: 'scenario_4',
      title: 'An action connected to today or current ongoing time frame',
      englishExample: '"This morning I have drunk two cups of coffee"',
      targetTenseId: 'present_perfect',
      why: 'Because "this morning" is still part of the current day, use Present Perfect (Antepresente).'
    },
    {
      id: 'scenario_5',
      title: 'An event that happened BEFORE another past event',
      englishExample: '"When I arrived at 8:00, she had already left at 7:30"',
      targetTenseId: 'past_perfect',
      why: 'The earlier past event uses Pluperfect / Past Perfect (Antecopretérito).'
    },
    {
      id: 'scenario_6',
      title: 'Reporting what someone said they WOULD do (Future of past)',
      englishExample: '"He said he would come tomorrow"',
      targetTenseId: 'conditional',
      why: 'A future projection viewed from a past speech moment uses the Conditional (Pospretérito).'
    },
    {
      id: 'scenario_7',
      title: 'Making a polite, courteous request',
      englishExample: '"I wanted to ask you a favor" or "Could you help me?"',
      targetTenseId: 'imperfect',
      why: 'Spanish speakers dislocate the Imperfect ("Quería") or Conditional ("Querría") to soften requests.'
    },
    {
      id: 'scenario_8',
      title: 'Something that HAD JUST happened moments ago',
      englishExample: '"I had just stepped out when it started raining"',
      targetTenseId: 'recent_past',
      why: 'Use the aspectual periphrasis "Acababa de + infinitivo" (Pasado reciente).'
    }
  ];

  const activeScenario = scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];
  const matchedTenseInfo: PastTenseInfo | undefined = PAST_TENSES.find(
    (t) => t.id === activeScenario.targetTenseId
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Intro Header */}
      <div className="bg-white border border-[#1A1A1A] p-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 accent-text" />
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#1A1A1A]">
            Past Tense Decision Wizard
          </h3>
        </div>
        <p className="text-xs text-zinc-600 font-sans">
          Select what you want to express in English to find the exact Spanish past tense, formula, and sample conjugation!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Scenarios List Column */}
        <div className="md:col-span-1 space-y-2">
          <span className="text-[10px] font-mono uppercase bg-[#1A1A1A] text-white px-2.5 py-1 font-bold block tracking-widest">
            CHOOSE YOUR INTENTION
          </span>
          <div className="space-y-2">
            {scenarios.map((scen, idx) => {
              const isSelected = scen.id === selectedScenarioId;
              return (
                <button
                  key={scen.id}
                  id={`wiz-scen-${scen.id}`}
                  onClick={() => setSelectedScenarioId(scen.id)}
                  className={`w-full text-left p-3.5 border transition-colors space-y-1 ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                      : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                    <span className={isSelected ? 'accent-text font-bold' : 'text-zinc-400'}>0{idx + 1}.</span>
                  </div>
                  <p className="text-xs leading-snug">{scen.title}</p>
                  <p className={`text-[10px] font-mono italic ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {scen.englishExample}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Recommendation Outcome Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 space-y-6 sticky top-20">
            
            <div className="border-b border-[#1A1A1A] pb-4 space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">RECOMMENDED SPANISH TENSE</span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tighter text-[#1A1A1A]">
                {matchedTenseInfo?.nameEnglish}
              </h3>
              <p className="text-xs font-mono text-zinc-600">
                RAE Name: <strong className="text-[#1A1A1A]">{matchedTenseInfo?.nameSpanishRAE}</strong> | Bello: <strong className="text-[#1A1A1A]">{matchedTenseInfo?.nameBello}</strong>
              </p>
            </div>

            {/* Why This Tense */}
            <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 space-y-2">
              <div className="flex items-center space-x-2 font-extrabold text-xs uppercase font-mono text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 accent-text" />
                <span>Why this choice fits your intention:</span>
              </div>
              <p className="text-xs text-[#1A1A1A] leading-relaxed">
                {activeScenario.why}
              </p>
            </div>

            {/* Mental Model & Formula */}
            {matchedTenseInfo && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Mental Model</span>
                  <span className="font-bold text-[#1A1A1A]">{matchedTenseInfo.mentalModel}</span>
                </div>
                <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Vector Formula (Rojo)</span>
                  <span className="font-mono font-bold text-[#1A1A1A]">{matchedTenseInfo.rojoFormula}</span>
                </div>
              </div>
            )}

            {/* Sample Sentence */}
            {matchedTenseInfo && (
              <div className="bg-[#1A1A1A] text-white p-6 border-l-4 border-[#D72638] space-y-2">
                <span className="text-[10px] font-mono uppercase accent-text font-bold block tracking-widest">Example Sentence</span>
                <p className="text-2xl font-normal font-serif italic text-white">
                  "{matchedTenseInfo.sampleSentence.spanish}"
                </p>
                <p className="text-xs text-zinc-300">
                  "{matchedTenseInfo.sampleSentence.english}"
                </p>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};

