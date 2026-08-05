import React, { useState } from 'react';
import { VERB_DATABASE } from '../data/verbs';
import { PAST_TENSES } from '../data/tenses';
import { PastTenseId, SubjectPerson, VerbConjugation } from '../types';
import { Search, Filter, AlertCircle, Info } from 'lucide-react';

export const VerbConjugator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVerbInfinitive, setSelectedVerbInfinitive] = useState<string>('hablar');
  const [selectedTense, setSelectedTense] = useState<PastTenseId>('preterite');

  const filteredVerbs = VERB_DATABASE.filter((v) => {
    const matchesSearch =
      v.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.englishMeaning.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || v.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeVerb: VerbConjugation =
    VERB_DATABASE.find((v) => v.infinitive === selectedVerbInfinitive) || VERB_DATABASE[0];

  const persons: { key: SubjectPerson; label: string; english: string }[] = [
    { key: 'yo', label: 'Yo', english: 'I' },
    { key: 'tu', label: 'Tú', english: 'You (sing. informal)' },
    { key: 'el_ella_usted', label: 'Él / Ella / Ud.', english: 'He / She / You (formal)' },
    { key: 'nosotros', label: 'Nosotros / -as', english: 'We' },
    { key: 'vosotros', label: 'Vosotros / -as', english: 'You all (Spain)' },
    { key: 'ellos_ellas_ustedes', label: 'Ellos / Ellas / Uds.', english: 'They / You all' },
  ];

  return (
    <div className="space-y-6 font-sans">
      
      {/* Search and Category Filter Bar */}
      <div className="bg-white border border-[#1A1A1A] p-5 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="verb-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search verb (e.g., hablar, tener, say, eat)..."
              className="w-full pl-9 pr-3 py-2 bg-[#F8F8F8] border border-[#E5E5E5] text-xs font-mono text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-zinc-500 mr-1 hidden sm:block" />
            {[
              { id: 'all', label: 'All Verbs' },
              { id: 'regular', label: 'Regular' },
              { id: 'irregular', label: 'Irregular' },
              { id: 'stem_changing', label: 'Stem Change' },
              { id: 'spelling_change', label: 'Spelling Change' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-[11px] font-mono uppercase px-3 py-1.5 border whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                    : 'bg-[#F8F8F8] text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Verb Selector Chips */}
        <div className="flex flex-wrap gap-1.5 border-t border-[#E5E5E5] pt-3">
          {filteredVerbs.map((verb) => (
            <button
              key={verb.infinitive}
              id={`verb-chip-${verb.infinitive}`}
              onClick={() => setSelectedVerbInfinitive(verb.infinitive)}
              className={`text-xs font-mono px-3 py-1 border transition-all ${
                selectedVerbInfinitive === verb.infinitive
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                  : 'bg-white text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
              }`}
            >
              {verb.infinitive}
              <span className={`text-[10px] ml-1 ${selectedVerbInfinitive === verb.infinitive ? 'accent-text font-bold' : 'opacity-60'}`}>
                ({verb.englishMeaning})
              </span>
            </button>
          ))}
          {filteredVerbs.length === 0 && (
            <p className="text-xs text-zinc-500 font-mono py-2">No verbs match your search filter.</p>
          )}
        </div>
      </div>

      {/* Main Verb Conjugation Table Card */}
      <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 space-y-6">
        
        {/* Active Verb Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1A1A1A] pb-4 gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold uppercase text-[#1A1A1A] font-mono">
                {activeVerb.infinitive}
              </span>
              <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 border font-bold ${
                activeVerb.category === 'irregular'
                  ? 'bg-red-50 text-[#D72638] border-[#D72638]'
                  : activeVerb.category === 'stem_changing'
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-[#F8F8F8] text-[#1A1A1A] border-[#E5E5E5]'
              }`}>
                {activeVerb.category.replace('_', ' ')}
              </span>
            </div>
            <p className="text-xs text-zinc-600 font-sans mt-1">
              English: <strong className="text-[#1A1A1A]">"{activeVerb.englishMeaning}"</strong>
            </p>
          </div>

          {activeVerb.notes && (
            <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-3 text-xs font-mono text-[#1A1A1A] flex items-start space-x-2 max-w-sm">
              <Info className="w-4 h-4 accent-text shrink-0 mt-0.5" />
              <span>{activeVerb.notes}</span>
            </div>
          )}
        </div>

        {/* Past Tense Selector Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-[#E5E5E5] pb-3">
          {PAST_TENSES.map((tense) => (
            <button
              key={tense.id}
              id={`tense-tab-${tense.id}`}
              onClick={() => setSelectedTense(tense.id)}
              className={`text-xs font-mono uppercase px-3 py-1.5 border transition-all ${
                selectedTense === tense.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                  : 'bg-[#F8F8F8] text-[#1A1A1A] border-[#E5E5E5] hover:border-[#1A1A1A]'
              }`}
            >
              {tense.nameEnglish}
            </button>
          ))}
        </div>

        {/* Person Conjugation Grid Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-2">
            <h4 className="font-mono text-xs uppercase font-extrabold text-[#1A1A1A]">
              Conjugation: {PAST_TENSES.find((t) => t.id === selectedTense)?.nameSpanishRAE}
            </h4>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">
              Formula: {PAST_TENSES.find((t) => t.id === selectedTense)?.rojoFormula}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {persons.map((p) => {
              const conjugatedForm = activeVerb.conjugations[selectedTense]?.[p.key] || 'N/A';
              const isIrregular = activeVerb.category !== 'regular';

              return (
                <div
                  key={p.key}
                  className="bg-[#F8F8F8] border border-[#E5E5E5] p-3.5 space-y-1 hover:border-[#1A1A1A] transition-colors"
                >
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-[#E5E5E5] pb-1">
                    <span className="font-bold text-[#1A1A1A]">{p.label}</span>
                    <span>{p.english}</span>
                  </div>
                  <div className="pt-1 flex items-center justify-between">
                    <span className={`text-lg font-mono font-bold ${
                      isIrregular ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'
                    }`}>
                      {conjugatedForm}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verb Benchmark Rule Footnote */}
        <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 text-xs text-zinc-700 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 accent-text shrink-0" />
          <p>
            <strong>Note for Native English Speakers:</strong> In compound past tenses (like Present Perfect or Pluperfect), the auxiliary verb <em>haber</em> carries person and tense, while the past participle (e.g. <em>hablado, comido, dicho</em>) remains unchanged regardless of gender or subject pronoun.
          </p>
        </div>

      </div>
    </div>
  );
};

