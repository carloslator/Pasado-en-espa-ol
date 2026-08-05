export type PastTenseId = 
  | 'preterite'              // Pretérito Perfecto Simple / Pretérito (Bello)
  | 'imperfect'              // Pretérito Imperfecto / Copretérito (Bello)
  | 'present_perfect'        // Pretérito Perfecto Compuesto / Antepresente (Bello)
  | 'past_perfect'           // Pretérito Pluscuamperfecto / Antecopretérito (Bello)
  | 'conditional'            // Condicional Simple / Pospretérito (Bello)
  | 'conditional_perfect'    // Condicional Compuesto / Antepospretérito (Bello)
  | 'preterite_anterior'     // Pretérito Anterior / Antepretérito (Bello)
  | 'recent_past'            // Acabar de + inf / Pasado Reciente (Havu)
  | 'past_progressive'       // Estar + gerundio en pasado
  | 'dislocated_courtesy';    // Usos dislocados / cortesía y conjetura

export interface PastTenseInfo {
  id: PastTenseId;
  nameEnglish: string;
  nameSpanishRAE: string;
  nameBello: string;
  rojoFormula: string; // e.g., "O-V", "(O-V)oV"
  mentalModel: string; // Simple analogy for native English speakers
  englishEquivalent: string;
  whenToUse: string[];
  keyTriggers: string[];
  regularFormulas: {
    ar: string;
    er_ir: string;
  };
  sampleSentence: {
    spanish: string;
    english: string;
    explanation: string;
  };
  dislocatedUses?: {
    useCase: string;
    example: string;
    meaningInEnglish: string;
  }[];
}

export type SubjectPerson = 'yo' | 'tu' | 'el_ella_usted' | 'nosotros' | 'vosotros' | 'ellos_ellas_ustedes';

export interface VerbConjugation {
  infinitive: string;
  englishMeaning: string;
  category: 'regular' | 'irregular' | 'stem_changing' | 'spelling_change';
  ar_er_ir: 'ar' | 'er' | 'ir';
  notes?: string;
  conjugations: Record<PastTenseId, Record<SubjectPerson, string>>;
  irregularHighlights?: Record<PastTenseId, Partial<Record<SubjectPerson, boolean>>>;
}

export interface Flashcard {
  id: string;
  deckCategory: 'preterite_vs_imperfect' | 'irregular_past' | 'compound_tenses' | 'periphrases' | 'special_uses';
  frontSpanish: string;
  backEnglish: string;
  tenseId: PastTenseId;
  ruleExplanation: string;
  cueContext: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_in_blank' | 'sentence_transform' | 'identify_use';
  promptEnglish: string;
  sentenceSpanish: string; // contains blank like "Ayer ella _____ (ir) al mercado."
  options?: string[];
  correctAnswer: string;
  tenseId: PastTenseId;
  explanation: string;
  grammarTip: string;
}

export interface AnnotatedVerb {
  verbForm: string;
  infinitive: string;
  tenseId: PastTenseId;
  tenseName: string;
  formula: string;
  englishTranslation: string;
  reasonInContext: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  subtitle: string;
  spanishText: string; // Text with markers or plain
  englishTranslation: string;
  verbsInPassage: Record<string, AnnotatedVerb>; // key is lowercase verb string
  comprehensionQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}
