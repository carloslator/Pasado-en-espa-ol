import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'multiple_choice',
    promptEnglish: 'Choose the correct form for an event completed at a specific moment yesterday:',
    sentenceSpanish: 'Ayer Juan _____ una carta importante.',
    options: ['escribió', 'escribía', 'ha escrito', 'había escrito'],
    correctAnswer: 'escribió',
    tenseId: 'preterite',
    explanation: 'Because "ayer" specifies a closed, completed past point, use the Preterite (escribió).',
    grammarTip: 'Camera snapshot rule: closed past time = Preterite.'
  },
  {
    id: 'q2',
    type: 'multiple_choice',
    promptEnglish: 'Choose the correct form for a habitual background action in childhood:',
    sentenceSpanish: 'De niño, mi hermano y yo _____ al parque todos los días.',
    options: ['fuimos', 'íbamos', 'hemos ido', 'habríamos ido'],
    correctAnswer: 'íbamos',
    tenseId: 'imperfect',
    explanation: 'Habitual repeated past events ("todos los días", "de niño") take the Imperfect (íbamos). Ir in the imperfect is irregular: iba, ibas, iba, íbamos, ibais, iban.',
    grammarTip: 'Moving movie rule: habits & background routines = Imperfect.'
  },
  {
    id: 'q3',
    type: 'fill_in_blank',
    promptEnglish: 'Conjugate in the Present Perfect (Antepresente):',
    sentenceSpanish: 'Hoy mi madre _____ (preparar) una sopa deliciosa.',
    correctAnswer: 'ha preparado',
    tenseId: 'present_perfect',
    explanation: '"Hoy" includes the present moment, so we use Present Perfect (ha preparado).',
    grammarTip: 'Bridge to Now: time frame containing "now" = Haber (present) + Participio.'
  },
  {
    id: 'q4',
    type: 'fill_in_blank',
    promptEnglish: 'Conjugate in the Pluperfect (Antecopretérito - Past before Past):',
    sentenceSpanish: 'Cuando el profesor entró, los estudiantes ya _____ (terminar) el examen.',
    correctAnswer: 'habían terminado',
    tenseId: 'past_perfect',
    explanation: 'Finished the exam BEFORE the professor entered. Past before past = había + participio.',
    grammarTip: 'Look for "ya" in past sequences to trigger Pluperfect.'
  },
  {
    id: 'q5',
    type: 'sentence_transform',
    promptEnglish: 'Back-shift from direct to indirect speech: Direct: "Carlos dijo: \'Iré mañana\'"',
    sentenceSpanish: 'Carlos dijo que _____ al día siguiente.',
    options: ['irá', 'iría', 'fue', 'iba'],
    correctAnswer: 'iría',
    tenseId: 'conditional',
    explanation: 'When back-shifting a future statement into past indirect speech ("dijo que..."), the Future becomes Conditional (iría).',
    grammarTip: 'Future of the Past rule: Dijo que + Conditional (Pospretérito).'
  },
  {
    id: 'q6',
    type: 'identify_use',
    promptEnglish: 'What nuance does the imperfect express in: "Quería pedirte un favor"?',
    sentenceSpanish: 'Quería pedirte un favor.',
    options: [
      'Completed past action',
      'Courtesy & Politeness (Soften request)',
      'Future prediction',
      'Literary past before past'
    ],
    correctAnswer: 'Courtesy & Politeness (Soften request)',
    tenseId: 'imperfect',
    explanation: 'Using the imperfect ("Quería") instead of present ("Quiero") is a dislocated usage to express politeness.',
    grammarTip: 'Bello & Rojo call this dislocated / metaphorical modal use for courtesy.'
  },
  {
    id: 'q7',
    type: 'multiple_choice',
    promptEnglish: 'Which form correctly completes the recent past periphrasis?',
    sentenceSpanish: 'Nosotros _____ de llegar cuando empezó la tormenta.',
    options: ['acabábamos', 'acabamos', 'hemos acabado', 'habremos acabado'],
    correctAnswer: 'acabábamos',
    tenseId: 'recent_past',
    explanation: '"Acababa de + infinitivo" expresses "had just done something" right before another past event.',
    grammarTip: 'Havu\'s Pasado Reciente Inactual: Acababa de + Infinitivo.'
  },
  {
    id: 'q8',
    type: 'fill_in_blank',
    promptEnglish: 'Type the irregular preterite form (Yo form of TENER):',
    sentenceSpanish: 'Ayer yo _____ (tener) que estudiar toda la tarde.',
    correctAnswer: 'tuve',
    tenseId: 'preterite',
    explanation: 'Tener has the UV-stem in preterite: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron.',
    grammarTip: 'Tener -> tuve. Estar -> estuve. Andar -> anduve.'
  }
];
