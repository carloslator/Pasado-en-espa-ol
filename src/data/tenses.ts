import { PastTenseInfo } from '../types';

export const PAST_TENSES: PastTenseInfo[] = [
  {
    id: 'preterite',
    nameEnglish: 'Simple Past (Preterite)',
    nameSpanishRAE: 'Pretérito Perfecto Simple',
    nameBello: 'Pretérito',
    rojoFormula: 'O-V (Anterior to origin)',
    mentalModel: 'The Camera Snapshot 📸',
    englishEquivalent: 'I spoke, I ate, I walked',
    whenToUse: [
      'Actions completed at a specific, defined moment in the past.',
      'A sequence of single completed past events ("I woke up, brushed my teeth, and left").',
      'Actions that interrupted an ongoing activity ("While I was studying, the phone rang").',
      'The start or end of an event or state.'
    ],
    keyTriggers: ['ayer (yesterday)', 'anoche (last night)', 'el año pasado (last year)', 'de repente (suddenly)', 'un día (one day)'],
    regularFormulas: {
      ar: '-é, -aste, -ó, -amos, -asteis, -aron',
      er_ir: '-í, -iste, -ió, -imos, -isteis, -ieron'
    },
    sampleSentence: {
      spanish: 'Ayer hablé con María a las tres.',
      english: 'Yesterday I talked with María at three o\'clock.',
      explanation: 'The talking happened at a specific, completed point in past time.'
    }
  },
  {
    id: 'imperfect',
    nameEnglish: 'Imperfect Past',
    nameSpanishRAE: 'Pretérito Imperfecto',
    nameBello: 'Copretérito',
    rojoFormula: '(O-V)oV (Simultaneous to a past point)',
    mentalModel: 'The Moving Background Movie 🎬',
    englishEquivalent: 'I was speaking, I used to eat, I would walk (habitually)',
    whenToUse: [
      'Habitual or repeated past actions ("When I was a child, I played outside").',
      'Background descriptions, setting the scene, age, time, weather, or mental states.',
      'Ongoing past actions without a specified start or completion.',
      'Simultaneous ongoing past events ("While he cooked, I read").'
    ],
    keyTriggers: ['siempre (always)', 'todos los días (every day)', 'mientras (while)', 'a menudo (often)', 'de niño (as a child)'],
    regularFormulas: {
      ar: '-aba, -abas, -aba, -ábamos, -abais, -aban',
      er_ir: '-ía, -ías, -ía, -íamos, -íais, -ían'
    },
    sampleSentence: {
      spanish: 'Cuando era niño, vivía en Madrid y jugaba al fútbol los domingos.',
      english: 'When I was a child, I lived in Madrid and played soccer on Sundays.',
      explanation: 'Describes ongoing states and habitual background routines in the past without focus on start or end.'
    },
    dislocatedUses: [
      {
        useCase: 'Courtesy / Politeness (Copretérito de cortesía)',
        example: 'Quería pedirte un favor.',
        meaningInEnglish: 'I wanted to ask you a favor. (Softer than "Quiero")'
      },
      {
        useCase: 'Children\'s Play / Pretend Game (Copretérito prelúdico)',
        example: 'Yo era el policía y tú eras el ladrón.',
        meaningInEnglish: 'I was the cop and you were the robber. (Framing a pretend scenario)'
      }
    ]
  },
  {
    id: 'present_perfect',
    nameEnglish: 'Present Perfect',
    nameSpanishRAE: 'Pretérito Perfecto Compuesto',
    nameBello: 'Antepresente',
    rojoFormula: '(OoV)-V (Prior to present origin)',
    mentalModel: 'The Bridge to Now 🌉',
    englishEquivalent: 'I have spoken, I have eaten',
    whenToUse: [
      'Actions that happened in a time period that still continues (today, this week, this year).',
      'Life experiences where the exact date isn\'t specified ("Have you ever been to Spain?").',
      'Recent past actions whose results affect the present moment.'
    ],
    keyTriggers: ['hoy (today)', 'esta mañana (this morning)', 'ya (already)', 'todavía no (not yet)', 'alguna vez (ever)'],
    regularFormulas: {
      ar: 'he / has / ha / hemos / habéis / han + hablado',
      er_ir: 'he / has / ha / hemos / habéis / han + comido / vivido'
    },
    sampleSentence: {
      spanish: 'Esta mañana he tomado dos cafés.',
      english: 'This morning I have had two coffees.',
      explanation: 'Because "this morning" is still part of the current ongoing time frame, Present Perfect connects it to now.'
    }
  },
  {
    id: 'past_perfect',
    nameEnglish: 'Pluperfect (Past Perfect)',
    nameSpanishRAE: 'Pretérito Pluscuamperfecto',
    nameBello: 'Antecopretérito',
    rojoFormula: '(O-V)-V (Prior to a past point)',
    mentalModel: 'The Past Before the Past ⏳',
    englishEquivalent: 'I had spoken, They had left',
    whenToUse: [
      'An event that occurred prior to another past event or past point of reference.',
      'Sequencing two past events ("When I arrived at 8:00, she had already left at 7:30").'
    ],
    keyTriggers: ['ya (already)', 'antes de que (before)', 'cuando (when - in past contexts)'],
    regularFormulas: {
      ar: 'había / habías / había / habíamos / habíais / habían + hablado',
      er_ir: 'había / habías / había / habíamos / habíais / habían + comido'
    },
    sampleSentence: {
      spanish: 'Cuando llegué a la estación, el tren ya había salido.',
      english: 'When I arrived at the station, the train had already left.',
      explanation: 'The train leaving happened before the action of arriving.'
    }
  },
  {
    id: 'conditional',
    nameEnglish: 'Conditional (Future of the Past)',
    nameSpanishRAE: 'Condicional Simple / Pospretérito',
    nameBello: 'Pospretérito',
    rojoFormula: '(O-V)+V (Posterior to a past point)',
    mentalModel: 'Future Seen From Yesterday 🔮',
    englishEquivalent: 'I would speak, He said he would come',
    whenToUse: [
      'Expressing a future action from a past perspective (Back-shifted indirect speech).',
      'Hypothetical outcomes in conditional sentences ("If I had money, I would buy...").',
      'Polite requests & suggestions ("Could you help me?").',
      'Past probability or conjecture ("It was probably 8 o\'clock" = "Serían las ocho").'
    ],
    keyTriggers: ['dijo que (said that)', 'prometió que (promised that)', 'si + subjuntivo'],
    regularFormulas: {
      ar: 'infinitive + -ía, -ías, -ía, -íamos, -íais, -ían',
      er_ir: 'infinitive + -ía, -ías, -ía, -íamos, -íais, -ían'
    },
    sampleSentence: {
      spanish: 'Dijo que llegaría a las seis.',
      english: 'He said that he would arrive at six.',
      explanation: 'From the past point of saying ("dijo"), arriving was in the relative future.'
    },
    dislocatedUses: [
      {
        useCase: 'Conjecture / Probability in Past',
        example: '¿Qué hora era? Serían las ocho.',
        meaningInEnglish: 'What time was it? It must have been / was probably 8 o\'clock.'
      }
    ]
  },
  {
    id: 'conditional_perfect',
    nameEnglish: 'Conditional Perfect',
    nameSpanishRAE: 'Condicional Compuesto',
    nameBello: 'Antepospretérito',
    rojoFormula: '((O-V)+V)-V (Prior to a past future)',
    mentalModel: 'What Would Have Been 💭',
    englishEquivalent: 'I would have spoken, She would have finished',
    whenToUse: [
      'Unfulfilled past hypothetical actions ("I would have gone, but I had to work").',
      'Conjecture or probability about a completed past action from a past viewpoint.'
    ],
    keyTriggers: ['si hubiera... habría...', 'de haber sabido...'],
    regularFormulas: {
      ar: 'habría / habrías / habría / habríamos / habríais / habrían + hablado',
      er_ir: 'habría / habrías / habría / habríamos / habríais / habrían + comido'
    },
    sampleSentence: {
      spanish: 'Aseguró que lo habría terminado a medianoche.',
      english: 'He assured that he would have finished it by midnight.',
      explanation: 'Refers to a completed action projected into a past hypothetical horizon.'
    }
  },
  {
    id: 'preterite_anterior',
    nameEnglish: 'Preterite Anterior (Literary Pluperfect)',
    nameSpanishRAE: 'Pretérito Anterior',
    nameBello: 'Antepretérito',
    rojoFormula: '(O-V)-V (Immediate prior past)',
    mentalModel: 'The Split-Second Pre-Past ⚡',
    englishEquivalent: 'Hardly had he spoken..., As soon as he had eaten...',
    whenToUse: [
      'Found almost exclusively in formal written literature or historic narratives.',
      'Expresses an action that occurred immediately before another simple past action.'
    ],
    keyTriggers: ['apenas (barely/hardly)', 'en cuanto (as soon as)', 'tan pronto como (as soon as)', 'luego que'],
    regularFormulas: {
      ar: 'hube / hubiste / hubo / hubimos / hubisteis / hubieron + hablado',
      er_ir: 'hube / hubiste / hubo / hubimos / hubisteis / hubieron + comido'
    },
    sampleSentence: {
      spanish: 'En cuanto hubo terminado de hablar, la multitud aplaudió.',
      english: 'As soon as he had finished speaking, the crowd applauded.',
      explanation: 'Literary style highlighting instant succession of two past actions.'
    }
  },
  {
    id: 'recent_past',
    nameEnglish: 'Recent Past Periphrasis',
    nameSpanishRAE: 'Pasado Reciente (Acabar de + Infinitivo)',
    nameBello: 'Perífrasis de Anterioridad Inmediata',
    rojoFormula: 'Aspectual Periphrasis (Havu)',
    mentalModel: 'Just Happened! ⏱️',
    englishEquivalent: 'I had just eaten / I have just spoken',
    whenToUse: [
      'Expresses that an action took place moments ago.',
      'Used with "acabo de + inf" (present anchor) or "acababa de + inf" (past anchor).'
    ],
    keyTriggers: ['hace un momento', 'justo ahora', 'cuando de repente'],
    regularFormulas: {
      ar: 'acababa / acababas / acababa de + infinitivo',
      er_ir: 'acabo / acabas / acaba de + infinitivo'
    },
    sampleSentence: {
      spanish: 'Acababa de salir cuando empezó a llover.',
      english: 'I had just stepped out when it started to rain.',
      explanation: 'Highlights immediate recency right before another past event.'
    }
  },
  {
    id: 'past_progressive',
    nameEnglish: 'Past Progressive',
    nameSpanishRAE: 'Estar + Gerundio en Pasado',
    nameBello: 'Copretérito Progresivo',
    rojoFormula: 'Progressive Aspect in Past',
    mentalModel: 'In the Middle of Doing It 🚶',
    englishEquivalent: 'I was speaking, They were eating',
    whenToUse: [
      'Emphasizes the continuous, active duration of a past activity.',
      'Distinguishes background duration (estaba comiendo) vs completed duration block (estuve comiendo dos horas).'
    ],
    keyTriggers: ['mientras (while)', 'en ese momento', 'durante dos horas'],
    regularFormulas: {
      ar: 'estaba / estuve + hablando',
      er_ir: 'estaba / estuve + comiendo'
    },
    sampleSentence: {
      spanish: 'Estaba estudiando cuando se fue la luz.',
      english: 'I was studying when the power went out.',
      explanation: 'Framing an ongoing action interrupted by a snapshot preterite event.'
    }
  }
];
