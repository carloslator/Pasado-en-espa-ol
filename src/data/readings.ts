import { ReadingPassage } from '../types';

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'passage_1',
    title: 'Un Viaje a Granada (A Trip to Granada)',
    subtitle: 'Narrative demonstrating Preterite, Imperfect, Pluperfect, and Courtesy Past.',
    spanishText: `El año pasado, María viajó a Granada. Mientras caminaba por las estrechas calles del Albaicín, admiraba las vistas de la Alhambra. Cuando llegó al mirador de San Nicolás, el sol ya se había puesto. Ella quería tomar fotos, pero la cámara no tenía batería. Un fotógrafo local la ayudó y le dijo que volvería al día siguiente.`,
    englishTranslation: `Last year, María traveled to Granada. While she was walking through the narrow streets of the Albaicín, she was admiring the views of the Alhambra. When she arrived at the San Nicolás viewpoint, the sun had already set. She wanted to take photos, but the camera had no battery. A local photographer helped her and told her that he would return the next day.`,
    verbsInPassage: {
      'viajó': {
        verbForm: 'viajó',
        infinitive: 'viajar',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Completed Past)',
        englishTranslation: 'traveled',
        reasonInContext: 'Completed main action at a specific time in the past ("El año pasado").'
      },
      'caminaba': {
        verbForm: 'caminaba',
        infinitive: 'caminar',
        tenseId: 'imperfect',
        tenseName: 'Pretérito Imperfecto (Copretérito)',
        formula: '(O-V)oV (Ongoing Background)',
        englishTranslation: 'was walking',
        reasonInContext: 'Ongoing background action in progress while another event happened.'
      },
      'admiraba': {
        verbForm: 'admiraba',
        infinitive: 'admirar',
        tenseId: 'imperfect',
        tenseName: 'Pretérito Imperfecto (Copretérito)',
        formula: '(O-V)oV (Simultaneous State)',
        englishTranslation: 'was admiring',
        reasonInContext: 'Describing an ongoing continuous state simultaneous with walking.'
      },
      'llegó': {
        verbForm: 'llegó',
        infinitive: 'llegar',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Specific Arrival)',
        englishTranslation: 'arrived',
        reasonInContext: 'Single completed arrival event interrupting the walking/viewing background.'
      },
      'había puesto': {
        verbForm: 'había puesto',
        infinitive: 'ponerse',
        tenseId: 'past_perfect',
        tenseName: 'Pretérito Pluscuamperfecto (Antecopretérito)',
        formula: '(O-V)-V (Past before Past)',
        englishTranslation: 'had set',
        reasonInContext: 'The sun setting happened BEFORE her arrival at the viewpoint.'
      },
      'quería': {
        verbForm: 'quería',
        infinitive: 'querer',
        tenseId: 'imperfect',
        tenseName: 'Pretérito Imperfecto (Copretérito)',
        formula: '(O-V)oV (Past Mental State)',
        englishTranslation: 'wanted',
        reasonInContext: 'Describing her ongoing mental desire / state at that moment.'
      },
      'tenía': {
        verbForm: 'tenía',
        infinitive: 'tener',
        tenseId: 'imperfect',
        tenseName: 'Pretérito Imperfecto (Copretérito)',
        formula: '(O-V)oV (Past State)',
        englishTranslation: 'had (no)',
        reasonInContext: 'Describing a physical state of the camera.'
      },
      'ayudó': {
        verbForm: 'ayudó',
        infinitive: 'ayudar',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Completed Event)',
        englishTranslation: 'helped',
        reasonInContext: 'Specific completed act of assistance.'
      },
      'dijo': {
        verbForm: 'dijo',
        infinitive: 'decir',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Completed Act of Speech)',
        englishTranslation: 'said / told',
        reasonInContext: 'Irregular preterite (J-stem) for a specific speech act.'
      },
      'volvería': {
        verbForm: 'volvería',
        infinitive: 'volver',
        tenseId: 'conditional',
        tenseName: 'Condicional Simple (Pospretérito)',
        formula: '(O-V)+V (Future of Past)',
        englishTranslation: 'would return',
        reasonInContext: 'Back-shifted future in past indirect speech: Dijo que + volvería.'
      }
    },
    comprehensionQuestions: [
      {
        question: 'Why is "había puesto" used for the sunset?',
        options: [
          'Because it was happening at that exact second.',
          'Because the sunset happened BEFORE María arrived at the viewpoint.',
          'Because it represents a habitual childhood routine.',
          'Because it is a polite request.'
        ],
        correctIndex: 1,
        explanation: 'Pluperfect (había puesto) expresses an event completed prior to another past event (llegó).'
      },
      {
        question: 'Why is "volvería" in the conditional tense?',
        options: [
          'Because it expresses a command.',
          'Because it is a future projection viewed from a past speech act ("dijo que...").',
          'Because it happened yesterday morning.',
          'Because it is an irregular command.'
        ],
        correctIndex: 1,
        explanation: 'Bello and Rojo highlight that Conditional (Pospretérito) represents the future of a past point.'
      }
    ]
  },
  {
    id: 'passage_2',
    title: 'Un Malentendido en la Cafetería (A Cafe Misunderstanding)',
    subtitle: 'Dialogue with Recent Past, Courtesy Imperfect, Present Perfect, and Probability.',
    spanishText: `—Hola, buenas tardes. Quería pedir un café con leche.
—¡Hola! Lo siento, pero acabamos de cerrar la cocina.
—¡Vaya! He venido caminando desde muy lejos.
—Bueno, no pasa nada. Le serviré uno. ¿Sabe qué hora era cuando salió de casa? Serían las siete, supongo.
—Sí, exactamente. Pensé que me daría tiempo a llegar antes.`,
    englishTranslation: `—Hello, good afternoon. I wanted to order a coffee with milk.
—Hello! I'm sorry, but we have just closed the kitchen.
—Oh dear! I have walked from very far away.
—Well, no problem. I'll serve you one. Do you know what time it was when you left home? It was probably 7 o'clock, I guess.
—Yes, exactly. I thought I would have time to arrive earlier.`,
    verbsInPassage: {
      'quería': {
        verbForm: 'quería',
        infinitive: 'querer',
        tenseId: 'imperfect',
        tenseName: 'Copretérito de Cortesía',
        formula: 'Dislocated Imperfect (Politeness)',
        englishTranslation: 'wanted (I would like)',
        reasonInContext: 'Polite request instead of demand ("Quería pedir...").'
      },
      'acabamos de': {
        verbForm: 'acabamos de',
        infinitive: 'acabar de',
        tenseId: 'recent_past',
        tenseName: 'Pasado Reciente (Havu)',
        formula: 'Aspectual Periphrasis',
        englishTranslation: 'have just (closed)',
        reasonInContext: 'Immediate recent past right before speaking.'
      },
      'he venido': {
        verbForm: 'he venido',
        infinitive: 'venir',
        tenseId: 'present_perfect',
        tenseName: 'Pretérito Perfecto Compuesto (Antepresente)',
        formula: '(OoV)-V (Bridge to Now)',
        englishTranslation: 'have walked / come',
        reasonInContext: 'Past action with direct impact on the present situation.'
      },
      'era': {
        verbForm: 'era',
        infinitive: 'ser',
        tenseId: 'imperfect',
        tenseName: 'Pretérito Imperfecto (Copretérito)',
        formula: '(O-V)oV (Past State)',
        englishTranslation: 'was',
        reasonInContext: 'Asking about time in past.'
      },
      'salió': {
        verbForm: 'salió',
        infinitive: 'salir',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Completed Action)',
        englishTranslation: 'left',
        reasonInContext: 'Specific completed moment of leaving.'
      },
      'serían': {
        verbForm: 'serían',
        infinitive: 'ser',
        tenseId: 'conditional',
        tenseName: 'Condicional de Conjetura',
        formula: 'Dislocated Conditional (Probability)',
        englishTranslation: 'it was probably / must have been',
        reasonInContext: 'Conjecture or estimation about past time ("Serían las siete").'
      },
      'pensé': {
        verbForm: 'pensé',
        infinitive: 'pensar',
        tenseId: 'preterite',
        tenseName: 'Pretérito Perfecto Simple (Preterite)',
        formula: 'O-V (Completed Past Thought)',
        englishTranslation: 'thought',
        reasonInContext: 'Completed thought at the moment of leaving.'
      },
      'daría': {
        verbForm: 'daría',
        infinitive: 'dar',
        tenseId: 'conditional',
        tenseName: 'Condicional Simple (Pospretérito)',
        formula: '(O-V)+V (Future relative to past thought)',
        englishTranslation: 'would give',
        reasonInContext: 'Future projected from past thought ("Pensé que me daría tiempo").'
      }
    },
    comprehensionQuestions: [
      {
        question: 'Why does the customer use "Quería" instead of "Quiero"?',
        options: [
          'Because they wanted coffee yesterday, not today.',
          'To be polite and gentle when ordering (Courtesy Past).',
          'Because they forgot what they wanted.',
          'Because it is an irregular future tense.'
        ],
        correctIndex: 1,
        explanation: 'In Spanish, using the Imperfect (Copretérito de cortesía) softens requests to make them polite.'
      },
      {
        question: 'What does "Serían las siete" mean in this dialogue?',
        options: [
          'It will be 7 o\'clock tomorrow.',
          'It was probably 7 o\'clock in the past (Conjecture/Estimation).',
          'It is exactly 7 o\'clock right now.',
          'They always leave at 7 o\'clock.'
        ],
        correctIndex: 1,
        explanation: 'Conditional of conjecture expresses past probability/estimation.'
      }
    ]
  }
];
