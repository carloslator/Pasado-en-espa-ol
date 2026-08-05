import React, { useState } from 'react';
import { PAST_TENSES } from '../data/tenses';
import { PastTenseId } from '../types';
import { Compass, CheckCircle2, Info, Layers } from 'lucide-react';

export const GrammarMatrix: React.FC = () => {
  const [selectedTense, setSelectedTense] = useState<PastTenseId>('preterite');
  const activeTenseInfo = PAST_TENSES.find((t) => t.id === selectedTense) || PAST_TENSES[0];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Intro Banner - Editorial Header */}
      <section className="bg-[#1A1A1A] text-white p-8 sm:p-10 border-b-4 border-[#D72638]">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="accent-bg text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
              SYSTEMATIC GRAMMAR REFERENCE
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Unit 01 / Past Tenses</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-tight uppercase">
            Mastering Spanish Past Tenses
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-3xl font-light">
            Spanish distinguishes between <strong className="text-white font-semibold underline decoration-[#D72638] underline-offset-4">completed actions</strong>, <strong className="text-white font-semibold underline decoration-[#D72638] underline-offset-4">ongoing background habits</strong>, <strong className="text-white font-semibold underline decoration-[#D72638] underline-offset-4">past events connected to now</strong>, and <strong className="text-white font-semibold underline decoration-[#D72638] underline-offset-4">events prior to other events</strong>.
            This guide simplifies these concepts with English mental models grounded in linguistic research (Andrés Bello, Reichenbach, Guillermo Rojo).
          </p>
        </div>
      </section>

      {/* Visual Timeline Vector Diagram */}
      <section className="bg-white border border-[#E5E5E5] p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 accent-text" />
            <h3 className="text-lg font-extrabold uppercase tracking-tight">
              Linguistic Timeline: How Spanish Locates Past Events
            </h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            Rojo &amp; Reichenbach Vector Models
          </span>
        </div>

        <p className="text-xs text-zinc-600 font-mono">
          [O = Speech Moment (NOW) | -V = Anterior / Earlier | oV = Simultaneous | +V = Posterior / Later relative to Reference]
        </p>

        {/* Timeline Vector Graphic */}
        <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[650px] relative py-8 px-4">
            
            {/* Axis Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#1A1A1A] -translate-y-1/2" />

            {/* Past Left Marker */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#1A1A1A] text-white font-mono text-[10px] px-2 py-0.5 uppercase tracking-widest">
              ANTERIOR (-V)
            </div>

            {/* Origin (Speech Moment - O / S) */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full accent-bg border-2 border-[#1A1A1A] z-10" />
              <span className="font-mono text-xs font-bold text-[#1A1A1A] mt-2">ORIGIN (O / S)</span>
              <span className="text-[10px] text-zinc-500 font-mono">"AHORA" (Now)</span>
            </div>

            {/* Tense Marker Points on Line */}
            <div className="flex justify-between items-center relative z-10 pr-32 pl-28">
              
              {/* Pluperfect */}
              <div 
                onClick={() => setSelectedTense('past_perfect')}
                className={`cursor-pointer group flex flex-col items-center p-2.5 border transition-all ${
                  selectedTense === 'past_perfect' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] font-bold font-mono uppercase">Pluperfect</span>
                <span className="text-[9px] opacity-80">(O-V)-V</span>
                <div className={`w-2.5 h-2.5 my-1 group-hover:scale-125 transition-transform ${selectedTense === 'past_perfect' ? 'accent-bg' : 'bg-[#1A1A1A]'}`} />
                <span className="text-[10px] font-mono">había hablado</span>
              </div>

              {/* Preterite */}
              <div 
                onClick={() => setSelectedTense('preterite')}
                className={`cursor-pointer group flex flex-col items-center p-2.5 border transition-all ${
                  selectedTense === 'preterite' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] font-bold font-mono uppercase">Preterite</span>
                <span className="text-[9px] opacity-80">O-V</span>
                <div className={`w-2.5 h-2.5 my-1 group-hover:scale-125 transition-transform ${selectedTense === 'preterite' ? 'accent-bg' : 'bg-[#1A1A1A]'}`} />
                <span className="text-[10px] font-mono">hablé</span>
              </div>

              {/* Imperfect */}
              <div 
                onClick={() => setSelectedTense('imperfect')}
                className={`cursor-pointer group flex flex-col items-center p-2.5 border transition-all ${
                  selectedTense === 'imperfect' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] font-bold font-mono uppercase">Imperfect</span>
                <span className="text-[9px] opacity-80">(O-V)oV</span>
                <div className={`w-2.5 h-2.5 my-1 group-hover:scale-125 transition-transform ${selectedTense === 'imperfect' ? 'accent-bg' : 'bg-[#1A1A1A]'}`} />
                <span className="text-[10px] font-mono">hablaba</span>
              </div>

              {/* Conditional */}
              <div 
                onClick={() => setSelectedTense('conditional')}
                className={`cursor-pointer group flex flex-col items-center p-2.5 border transition-all ${
                  selectedTense === 'conditional' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] font-bold font-mono uppercase">Conditional</span>
                <span className="text-[9px] opacity-80">(O-V)+V</span>
                <div className={`w-2.5 h-2.5 my-1 group-hover:scale-125 transition-transform ${selectedTense === 'conditional' ? 'accent-bg' : 'bg-[#1A1A1A]'}`} />
                <span className="text-[10px] font-mono">hablaría</span>
              </div>

              {/* Present Perfect */}
              <div 
                onClick={() => setSelectedTense('present_perfect')}
                className={`cursor-pointer group flex flex-col items-center p-2.5 border transition-all ${
                  selectedTense === 'present_perfect' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] font-bold font-mono uppercase">Present Perf.</span>
                <span className="text-[9px] opacity-80">(OoV)-V</span>
                <div className="w-2.5 h-2.5 accent-bg my-1 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-mono">he hablado</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Tense Comparison Matrix Table */}
      <section className="bg-white border border-[#1A1A1A]">
        <div className="p-4 border-b border-[#1A1A1A] bg-[#F8F8F8] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 accent-text" />
            <h3 className="font-extrabold text-sm uppercase tracking-tight text-[#1A1A1A]">
              Spanish Past Tense Comparison Matrix
            </h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            Click any row to inspect detail
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#1A1A1A] text-white font-mono uppercase text-[10px] tracking-wider">
                <th className="p-3 border-r border-zinc-700">English Tense</th>
                <th className="p-3 border-r border-zinc-700">RAE Academic Name</th>
                <th className="p-3 border-r border-zinc-700">Bello Name (1847)</th>
                <th className="p-3 border-r border-zinc-700">English Mental Model</th>
                <th className="p-3">Sample Verb</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {PAST_TENSES.map((tense) => {
                const isSelected = tense.id === selectedTense;
                return (
                  <tr
                    key={tense.id}
                    id={`tense-row-${tense.id}`}
                    onClick={() => setSelectedTense(tense.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#F0F0F0] font-bold border-l-4 accent-border' : 'hover:bg-[#F8F8F8]'
                    }`}
                  >
                    <td className="p-3 font-semibold text-[#1A1A1A] border-r border-[#E5E5E5]">
                      {isSelected && <span className="accent-text mr-1">→</span>}
                      {tense.nameEnglish}
                    </td>
                    <td className="p-3 text-zinc-700 border-r border-[#E5E5E5]">
                      {tense.nameSpanishRAE}
                    </td>
                    <td className="p-3 text-zinc-600 font-mono border-r border-[#E5E5E5]">
                      {tense.nameBello}
                    </td>
                    <td className="p-3 border-r border-[#E5E5E5]">
                      <span className="inline-block bg-[#1A1A1A] text-white font-mono px-2 py-0.5 text-[10px] uppercase tracking-wider">
                        {tense.mentalModel}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-[#1A1A1A] font-bold">
                      {tense.sampleSentence.spanish.split(' ')[1] || tense.sampleSentence.spanish}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Selected Tense Deep Dive Inspector */}
      <section className="bg-white border border-[#1A1A1A] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1A1A1A] pb-4 gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase bg-[#1A1A1A] text-white px-2 py-0.5 font-bold">
              TENSE INSPECTOR
            </span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tighter text-[#1A1A1A] mt-2">
              {activeTenseInfo.nameEnglish}
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-1">
              RAE: <strong className="text-[#1A1A1A]">{activeTenseInfo.nameSpanishRAE}</strong> | Bello: <strong className="text-[#1A1A1A]">{activeTenseInfo.nameBello}</strong> | Vector Formula: <strong className="text-[#1A1A1A]">{activeTenseInfo.rojoFormula}</strong>
            </p>
          </div>
          <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-3 max-w-xs text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Mental Model</span>
            <span className="font-bold text-sm text-[#1A1A1A]">{activeTenseInfo.mentalModel}</span>
          </div>
        </div>

        {/* When to Use & Key Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Rules & Situations */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#1A1A1A] flex items-center space-x-1.5 border-b border-[#1A1A1A] pb-2">
              <CheckCircle2 className="w-4 h-4 accent-text" />
              <span>When To Use (Simple Rules)</span>
            </h4>
            <ul className="space-y-3 text-xs text-[#1A1A1A]">
              {activeTenseInfo.whenToUse.map((rule, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="accent-text font-bold text-sm leading-none">—</span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trigger Words & Form Formulas */}
          <div className="space-y-6">
            
            {/* Key Triggers */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#1A1A1A] flex items-center space-x-1.5 border-b border-[#1A1A1A] pb-2">
                <Info className="w-4 h-4 accent-text" />
                <span>Key Signal &amp; Trigger Words</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeTenseInfo.keyTriggers.map((trigger, idx) => (
                  <span key={idx} className="bg-[#F8F8F8] border border-[#E5E5E5] text-[#1A1A1A] font-mono text-xs px-2.5 py-1">
                    {trigger}
                  </span>
                ))}
              </div>
            </div>

            {/* Regular Form Endings */}
            <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Regular Ending Formulas</span>
              <div className="text-xs font-mono text-[#1A1A1A] space-y-1">
                <div><strong className="text-zinc-600">-AR:</strong> {activeTenseInfo.regularFormulas.ar}</div>
                <div><strong className="text-zinc-600">-ER/-IR:</strong> {activeTenseInfo.regularFormulas.er_ir}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Sample Sentence Card - Editorial Focus */}
        <div className="bg-[#1A1A1A] text-white p-6 border-l-4 border-[#D72638] space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="font-mono text-[10px] accent-text uppercase tracking-widest font-bold">EXAMPLE IN CONTEXT</span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase">Equivalent: "{activeTenseInfo.englishEquivalent}"</span>
          </div>
          <p className="text-2xl font-normal font-serif italic leading-tight text-white">
            "{activeTenseInfo.sampleSentence.spanish}"
          </p>
          <p className="text-xs text-zinc-300 font-sans">
            <strong className="text-white">Translation:</strong> "{activeTenseInfo.sampleSentence.english}"
          </p>
          <p className="text-xs text-zinc-400 font-mono border-t border-zinc-800 pt-2 mt-2">
            💡 <strong>Why this tense:</strong> {activeTenseInfo.sampleSentence.explanation}
          </p>
        </div>

        {/* Dislocated / Special Modal Uses */}
        {activeTenseInfo.dislocatedUses && activeTenseInfo.dislocatedUses.length > 0 && (
          <div className="border border-[#E5E5E5] bg-[#F8F8F8] p-5 space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#1A1A1A]">
              Special Dislocated &amp; Modal Uses (Usos Dislocados — Bello &amp; Rojo)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {activeTenseInfo.dislocatedUses.map((use, idx) => (
                <div key={idx} className="bg-white border border-[#E5E5E5] p-3.5 space-y-1">
                  <span className="font-bold text-[#1A1A1A] block">{use.useCase}</span>
                  <p className="font-serif italic text-sm text-[#1A1A1A]">"{use.example}"</p>
                  <p className="text-zinc-600 text-[11px] font-sans">"{use.meaningInEnglish}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

