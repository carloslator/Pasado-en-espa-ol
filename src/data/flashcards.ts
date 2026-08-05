import { Flashcard } from '../types';

export const FLASHCARD_DECKS: Flashcard[] = [
  // Deck 1: Preterite vs Imperfect
  {
    id: 'p_vs_i_1',
    deckCategory: 'preterite_vs_imperfect',
    frontSpanish: 'Ayer yo _____ (estudiar) por tres horas y luego _____ (salir) con amigos.',
    backEnglish: 'Ayer yo estudié por tres horas y luego salí con amigos.',
    tenseId: 'preterite',
    ruleExplanation: 'Both actions have clear start/end times and happen in sequence (Snapshot 📸). Use Preterite.',
    cueContext: 'Time frame: "por tres horas" & sequential events ("luego").'
  },
  {
    id: 'p_vs_i_2',
    deckCategory: 'preterite_vs_imperfect',
    frontSpanish: 'De niño, yo _____ (jugar) al fútbol todos los sábados.',
    backEnglish: 'De niño, yo jugaba al fútbol todos los sábados.',
    tenseId: 'imperfect',
    ruleExplanation: 'Habitual, repeated routine in childhood without specified start/end (Movie 🎬). Use Imperfect.',
    cueContext: 'Trigger: "De niño" and "todos los sábados".'
  },
  {
    id: 'p_vs_i_3',
    deckCategory: 'preterite_vs_imperfect',
    frontSpanish: 'Mientras ella _____ (cocinar), el teléfono _____ (sonar).',
    backEnglish: 'Mientras ella cocinaba, el teléfono sonó.',
    tenseId: 'imperfect',
    ruleExplanation: 'The cooking was ongoing background (Imperfect: cocinaba), interrupted by a sudden completed event (Preterite: sonó).',
    cueContext: 'Contrast: "Mientras" (ongoing) vs sudden interruption.'
  },
  {
    id: 'p_vs_i_4',
    deckCategory: 'preterite_vs_imperfect',
    frontSpanish: 'Anoche a las ocho, _____ (llover) mucho y _____ (hacer) frío.',
    backEnglish: 'Anoche a las ocho, llovía mucho y hacía frío.',
    tenseId: 'imperfect',
    ruleExplanation: 'Setting the background scene, atmosphere, and weather at a past moment. Use Imperfect.',
    cueContext: 'Atmosphere & weather descriptions at a point in time.'
  },

  // Deck 2: Irregular Past Stems
  {
    id: 'irreg_1',
    deckCategory: 'irregular_past',
    frontSpanish: 'Mis padres me _____ (decir) la verdad ayer.',
    backEnglish: 'Mis padres me dijeron la verdad ayer.',
    tenseId: 'preterite',
    ruleExplanation: 'Decir has a J-stem in preterite: dije, dijiste, dijo, dijimos, dijisteis, dijeron (note: no -i- in -eron).',
    cueContext: 'J-stem irregular preterite.'
  },
  {
    id: 'irreg_2',
    deckCategory: 'irregular_past',
    frontSpanish: '¿Dónde _____ (estar) tú anoche a las diez?',
    backEnglish: '¿Dónde estuviste tú anoche a las diez?',
    tenseId: 'preterite',
    ruleExplanation: 'Estar uses the UV-stem in preterite: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron.',
    cueContext: 'UV-stem irregular preterite.'
  },
  {
    id: 'irreg_3',
    deckCategory: 'irregular_past',
    frontSpanish: 'Ella _____ (hacer) toda la tarea antes de cenar.',
    backEnglish: 'Ella hizo toda la tarea antes de cenar.',
    tenseId: 'preterite',
    ruleExplanation: 'Hacer uses the HIC- stem, changing to HIZ- in 3rd person singular (hizo) to preserve pronunciation.',
    cueContext: 'Hic-/Hiz- stem irregular preterite.'
  },

  // Deck 3: Compound Tenses
  {
    id: 'comp_1',
    deckCategory: 'compound_tenses',
    frontSpanish: 'Esta semana yo _____ (tener) tres exámenes.',
    backEnglish: 'Esta semana yo he tenido tres exámenes.',
    tenseId: 'present_perfect',
    ruleExplanation: '"Esta semana" is an ongoing current time frame, so use Present Perfect (Antepresente: he + participio).',
    cueContext: 'Bridge to Now time marker ("esta semana").'
  },
  {
    id: 'comp_2',
    deckCategory: 'compound_tenses',
    frontSpanish: 'Cuando llegamos al cine, la película ya _____ (empezar).',
    backEnglish: 'Cuando llegamos al cine, la película ya había empezado.',
    tenseId: 'past_perfect',
    ruleExplanation: 'The movie starting happened BEFORE our arrival in the past (Past before Past). Use Pluperfect (Antecopretérito).',
    cueContext: 'Prior past action triggered by "ya".'
  },

  // Deck 4: Periphrases & Special Uses
  {
    id: 'peri_1',
    deckCategory: 'periphrases',
    frontSpanish: 'Nosotros _____ (acabar de) cenar cuando llamaste.',
    backEnglish: 'Nosotros acabábamos de cenar cuando llamaste.',
    tenseId: 'recent_past',
    ruleExplanation: 'Acababa de + infinitivo expresses recent past ("had just done something") prior to another past event.',
    cueContext: 'Pasado Reciente (Havu).'
  },
  {
    id: 'spec_1',
    deckCategory: 'special_uses',
    frontSpanish: 'Disculpe, yo _____ (querer) hacerle una pregunta rápida.',
    backEnglish: 'Disculpe, yo quería hacerle una pregunta rápida.',
    tenseId: 'imperfect',
    ruleExplanation: 'Dislocated courtesy use (Copretérito de cortesía) — softening a request with Imperfect instead of Present.',
    cueContext: 'Polite / Courtesy past.'
  },
  {
    id: 'spec_2',
    deckCategory: 'special_uses',
    frontSpanish: '¿Qué hora era cuando llegaron? _____ (Ser) las nueve.',
    backEnglish: '¿Qué hora era cuando llegaron? Serían las nueve.',
    tenseId: 'conditional',
    ruleExplanation: 'Dislocated conjectural use — Conditional expressing past probability ("It was probably / must have been 9").',
    cueContext: 'Past probability / conjecture.'
  }
];
