import { VerbConjugation } from '../types';

export const VERB_DATABASE: VerbConjugation[] = [
  {
    infinitive: 'hablar',
    englishMeaning: 'to speak / talk',
    category: 'regular',
    ar_er_ir: 'ar',
    notes: 'Standard regular -ar benchmark verb.',
    conjugations: {
      preterite: { yo: 'hablé', tu: 'hablaste', el_ella_usted: 'habló', nosotros: 'hablamos', vosotros: 'hablasteis', ellos_ellas_ustedes: 'hablaron' },
      imperfect: { yo: 'hablaba', tu: 'hablabas', el_ella_usted: 'hablaba', nosotros: 'hablábamos', vosotros: 'hablabais', ellos_ellas_ustedes: 'hablaban' },
      present_perfect: { yo: 'he hablado', tu: 'has hablado', el_ella_usted: 'ha hablado', nosotros: 'hemos hablado', vosotros: 'habéis hablado', ellos_ellas_ustedes: 'han hablado' },
      past_perfect: { yo: 'había hablado', tu: 'habías hablado', el_ella_usted: 'había hablado', nosotros: 'habíamos hablado', vosotros: 'habíais hablado', ellos_ellas_ustedes: 'habían hablado' },
      conditional: { yo: 'hablaría', tu: 'hablarías', el_ella_usted: 'hablaría', nosotros: 'hablaríamos', vosotros: 'hablaríais', ellos_ellas_ustedes: 'hablarían' },
      conditional_perfect: { yo: 'habría hablado', tu: 'habrías hablado', el_ella_usted: 'habría hablado', nosotros: 'habríamos hablado', vosotros: 'habríais hablado', ellos_ellas_ustedes: 'habrían hablado' },
      preterite_anterior: { yo: 'hube hablado', tu: 'hubiste hablado', el_ella_usted: 'hubo hablado', nosotros: 'hubimos hablado', vosotros: 'hubisteis hablado', ellos_ellas_ustedes: 'hubieron hablado' },
      recent_past: { yo: 'acababa de hablar', tu: 'acababas de hablar', el_ella_usted: 'acababa de hablar', nosotros: 'acabábamos de hablar', vosotros: 'acababais de hablar', ellos_ellas_ustedes: 'acababan de hablar' },
      past_progressive: { yo: 'estaba hablando', tu: 'estabas hablando', el_ella_usted: 'estaba hablando', nosotros: 'estábamos hablando', vosotros: 'estabais hablando', ellos_ellas_ustedes: 'estaban hablando' },
      dislocated_courtesy: { yo: 'hablaría', tu: 'hablarías', el_ella_usted: 'hablaría', nosotros: 'hablaríamos', vosotros: 'hablaríais', ellos_ellas_ustedes: 'hablarían' }
    }
  },
  {
    infinitive: 'comer',
    englishMeaning: 'to eat',
    category: 'regular',
    ar_er_ir: 'er',
    notes: 'Standard regular -er benchmark verb.',
    conjugations: {
      preterite: { yo: 'comí', tu: 'comiste', el_ella_usted: 'comió', nosotros: 'comimos', vosotros: 'comisteis', ellos_ellas_ustedes: 'comieron' },
      imperfect: { yo: 'comía', tu: 'comías', el_ella_usted: 'comía', nosotros: 'comíamos', vosotros: 'comíais', ellos_ellas_ustedes: 'comían' },
      present_perfect: { yo: 'he comido', tu: 'has comido', el_ella_usted: 'ha comido', nosotros: 'hemos comido', vosotros: 'habéis comido', ellos_ellas_ustedes: 'han comido' },
      past_perfect: { yo: 'había comido', tu: 'habías comido', el_ella_usted: 'había comido', nosotros: 'habíamos comido', vosotros: 'habíais comido', ellos_ellas_ustedes: 'habían comido' },
      conditional: { yo: 'comería', tu: 'comerías', el_ella_usted: 'comería', nosotros: 'comeríamos', vosotros: 'comeríais', ellos_ellas_ustedes: 'comerían' },
      conditional_perfect: { yo: 'habría comido', tu: 'habrías comido', el_ella_usted: 'habría comido', nosotros: 'habríamos comido', vosotros: 'habríais comido', ellos_ellas_ustedes: 'habrían comido' },
      preterite_anterior: { yo: 'hube comido', tu: 'hubiste comido', el_ella_usted: 'hubo comido', nosotros: 'hubimos comido', vosotros: 'hubisteis comido', ellos_ellas_ustedes: 'hubieron comido' },
      recent_past: { yo: 'acababa de comer', tu: 'acababas de comer', el_ella_usted: 'acababa de comer', nosotros: 'acabábamos de comer', vosotros: 'acababais de comer', ellos_ellas_ustedes: 'acababan de comer' },
      past_progressive: { yo: 'estaba comiendo', tu: 'estabas comiendo', el_ella_usted: 'estaba comiendo', nosotros: 'estábamos comiendo', vosotros: 'estabais comiendo', ellos_ellas_ustedes: 'estaban comiendo' },
      dislocated_courtesy: { yo: 'comería', tu: 'comerías', el_ella_usted: 'comería', nosotros: 'comeríamos', vosotros: 'comeríais', ellos_ellas_ustedes: 'comerían' }
    }
  },
  {
    infinitive: 'vivir',
    englishMeaning: 'to live',
    category: 'regular',
    ar_er_ir: 'ir',
    notes: 'Standard regular -ir benchmark verb.',
    conjugations: {
      preterite: { yo: 'viví', tu: 'viviste', el_ella_usted: 'vivió', nosotros: 'vivimos', vosotros: 'vivisteis', ellos_ellas_ustedes: 'vivieron' },
      imperfect: { yo: 'vivía', tu: 'vivías', el_ella_usted: 'vivía', nosotros: 'vivíamos', vosotros: 'vivíais', ellos_ellas_ustedes: 'vivían' },
      present_perfect: { yo: 'he vivido', tu: 'has vivido', el_ella_usted: 'ha vivido', nosotros: 'hemos vivido', vosotros: 'habéis vivido', ellos_ellas_ustedes: 'han vivido' },
      past_perfect: { yo: 'había vivido', tu: 'habías vivido', el_ella_usted: 'había vivido', nosotros: 'habíamos vivido', vosotros: 'habíais vivido', ellos_ellas_ustedes: 'habían vivido' },
      conditional: { yo: 'viviría', tu: 'vivirías', el_ella_usted: 'viviría', nosotros: 'viviríamos', vosotros: 'viviríais', ellos_ellas_ustedes: 'vivirían' },
      conditional_perfect: { yo: 'habría vivido', tu: 'habrías vivido', el_ella_usted: 'habría vivido', nosotros: 'habríamos vivido', vosotros: 'habríais vivido', ellos_ellas_ustedes: 'habrían vivido' },
      preterite_anterior: { yo: 'hube vivido', tu: 'hubiste vivido', el_ella_usted: 'hubo vivido', nosotros: 'hubimos vivido', vosotros: 'hubisteis vivido', ellos_ellas_ustedes: 'hubieron vivido' },
      recent_past: { yo: 'acababa de vivir', tu: 'acababas de vivir', el_ella_usted: 'acababa de vivir', nosotros: 'acabábamos de vivir', vosotros: 'acababais de vivir', ellos_ellas_ustedes: 'acababan de vivir' },
      past_progressive: { yo: 'estaba viviendo', tu: 'estabas viviendo', el_ella_usted: 'estaba viviendo', nosotros: 'estábamos viviendo', vosotros: 'estabais viviendo', ellos_ellas_ustedes: 'estaban viviendo' },
      dislocated_courtesy: { yo: 'viviría', tu: 'vivirías', el_ella_usted: 'viviría', nosotros: 'viviríamos', vosotros: 'viviríais', ellos_ellas_ustedes: 'vivirían' }
    }
  },
  {
    infinitive: 'ir',
    englishMeaning: 'to go',
    category: 'irregular',
    ar_er_ir: 'ir',
    notes: 'Shares preterite forms with SER (fui, fuiste...). Irregular in Imperfect (iba).',
    conjugations: {
      preterite: { yo: 'fui', tu: 'fuiste', el_ella_usted: 'fue', nosotros: 'fuimos', vosotros: 'fuisteis', ellos_ellas_ustedes: 'fueron' },
      imperfect: { yo: 'iba', tu: 'ibas', el_ella_usted: 'iba', nosotros: 'íbamos', vosotros: 'ibais', ellos_ellas_ustedes: 'iban' },
      present_perfect: { yo: 'he ido', tu: 'has ido', el_ella_usted: 'ha ido', nosotros: 'hemos ido', vosotros: 'habéis ido', ellos_ellas_ustedes: 'han ido' },
      past_perfect: { yo: 'había ido', tu: 'habías ido', el_ella_usted: 'había ido', nosotros: 'habíamos ido', vosotros: 'habíais ido', ellos_ellas_ustedes: 'habían ido' },
      conditional: { yo: 'iría', tu: 'irías', el_ella_usted: 'iría', nosotros: 'iríamos', vosotros: 'iríais', ellos_ellas_ustedes: 'irían' },
      conditional_perfect: { yo: 'habría ido', tu: 'habrías ido', el_ella_usted: 'habría ido', nosotros: 'habríamos ido', vosotros: 'habríais ido', ellos_ellas_ustedes: 'habrían ido' },
      preterite_anterior: { yo: 'hube ido', tu: 'hubiste ido', el_ella_usted: 'hubo ido', nosotros: 'hubimos ido', vosotros: 'hubisteis ido', ellos_ellas_ustedes: 'hubieron ido' },
      recent_past: { yo: 'acababa de ir', tu: 'acababas de ir', el_ella_usted: 'acababa de ir', nosotros: 'acabábamos de ir', vosotros: 'acababais de ir', ellos_ellas_ustedes: 'acababan de ir' },
      past_progressive: { yo: 'estaba yendo', tu: 'estabas yendo', el_ella_usted: 'estaba yendo', nosotros: 'estábamos yendo', vosotros: 'estabais yendo', ellos_ellas_ustedes: 'estaban yendo' },
      dislocated_courtesy: { yo: 'iría', tu: 'irías', el_ella_usted: 'iría', nosotros: 'iríamos', vosotros: 'iríais', ellos_ellas_ustedes: 'irían' }
    }
  },
  {
    infinitive: 'ser',
    englishMeaning: 'to be (essential/permanent)',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Shares preterite with IR (fui, fue). Irregular in Imperfect (era).',
    conjugations: {
      preterite: { yo: 'fui', tu: 'fuiste', el_ella_usted: 'fue', nosotros: 'fuimos', vosotros: 'fuisteis', ellos_ellas_ustedes: 'fueron' },
      imperfect: { yo: 'era', tu: 'eras', el_ella_usted: 'era', nosotros: 'éramos', vosotros: 'erais', ellos_ellas_ustedes: 'eran' },
      present_perfect: { yo: 'he sido', tu: 'has sido', el_ella_usted: 'ha sido', nosotros: 'hemos sido', vosotros: 'habéis sido', ellos_ellas_ustedes: 'han sido' },
      past_perfect: { yo: 'había sido', tu: 'habías sido', el_ella_usted: 'había sido', nosotros: 'habíamos sido', vosotros: 'habíais sido', ellos_ellas_ustedes: 'habían sido' },
      conditional: { yo: 'sería', tu: 'serías', el_ella_usted: 'sería', nosotros: 'seríamos', vosotros: 'seríais', ellos_ellas_ustedes: 'serían' },
      conditional_perfect: { yo: 'habría sido', tu: 'habrías sido', el_ella_usted: 'habría sido', nosotros: 'habríamos sido', vosotros: 'habríais sido', ellos_ellas_ustedes: 'habrían sido' },
      preterite_anterior: { yo: 'hube sido', tu: 'hubiste sido', el_ella_usted: 'hubo sido', nosotros: 'hubimos sido', vosotros: 'hubisteis sido', ellos_ellas_ustedes: 'hubieron sido' },
      recent_past: { yo: 'acababa de ser', tu: 'acababas de ser', el_ella_usted: 'acababa de ser', nosotros: 'acabábamos de ser', vosotros: 'acababais de ser', ellos_ellas_ustedes: 'acababan de ser' },
      past_progressive: { yo: 'estaba siendo', tu: 'estabas siendo', el_ella_usted: 'estaba siendo', nosotros: 'estábamos siendo', vosotros: 'estabais siendo', ellos_ellas_ustedes: 'estaban siendo' },
      dislocated_courtesy: { yo: 'sería', tu: 'serías', el_ella_usted: 'sería', nosotros: 'seríamos', vosotros: 'seríais', ellos_ellas_ustedes: 'serían' }
    }
  },
  {
    infinitive: 'estar',
    englishMeaning: 'to be (state/location)',
    category: 'irregular',
    ar_er_ir: 'ar',
    notes: 'Irregular preterite with -uv- stem (estuve, estuvo).',
    conjugations: {
      preterite: { yo: 'estuve', tu: 'estuviste', el_ella_usted: 'estuvo', nosotros: 'estuvimos', vosotros: 'estuvisteis', ellos_ellas_ustedes: 'estuvieron' },
      imperfect: { yo: 'estaba', tu: 'estabas', el_ella_usted: 'estaba', nosotros: 'estábamos', vosotros: 'estabais', ellos_ellas_ustedes: 'estaban' },
      present_perfect: { yo: 'he estado', tu: 'has estado', el_ella_usted: 'ha estado', nosotros: 'hemos estado', vosotros: 'habéis estado', ellos_ellas_ustedes: 'han estado' },
      past_perfect: { yo: 'había estado', tu: 'habías estado', el_ella_usted: 'había estado', nosotros: 'habíamos estado', vosotros: 'habíais estado', ellos_ellas_ustedes: 'habían estado' },
      conditional: { yo: 'estaría', tu: 'estarías', el_ella_usted: 'estaría', nosotros: 'estaríamos', vosotros: 'estaríais', ellos_ellas_ustedes: 'estarían' },
      conditional_perfect: { yo: 'habría estado', tu: 'habrías estado', el_ella_usted: 'habría estado', nosotros: 'habríamos estado', vosotros: 'habríais estado', ellos_ellas_ustedes: 'habrían estado' },
      preterite_anterior: { yo: 'hube estado', tu: 'hubiste estado', el_ella_usted: 'hubo estado', nosotros: 'hubimos estado', vosotros: 'hubisteis estado', ellos_ellas_ustedes: 'hubieron estado' },
      recent_past: { yo: 'acababa de estar', tu: 'acababas de estar', el_ella_usted: 'acababa de estar', nosotros: 'acabábamos de estar', vosotros: 'acababais de estar', ellos_ellas_ustedes: 'acababan de estar' },
      past_progressive: { yo: 'estaba estando', tu: 'estabas estando', el_ella_usted: 'estaba estando', nosotros: 'estábamos estando', vosotros: 'estabais estando', ellos_ellas_ustedes: 'estaban estando' },
      dislocated_courtesy: { yo: 'estaría', tu: 'estarías', el_ella_usted: 'estaría', nosotros: 'estaríamos', vosotros: 'estaríais', ellos_ellas_ustedes: 'estarían' }
    }
  },
  {
    infinitive: 'hacer',
    englishMeaning: 'to make / do',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite stem hic-/hiz- (hice, hizo). Irregular participle (hecho). Conditional stem har- (haría).',
    conjugations: {
      preterite: { yo: 'hice', tu: 'hiciste', el_ella_usted: 'hizo', nosotros: 'hicimos', vosotros: 'hicisteis', ellos_ellas_ustedes: 'hicieron' },
      imperfect: { yo: 'hacía', tu: 'hacías', el_ella_usted: 'hacía', nosotros: 'hacíamos', vosotros: 'hacíais', ellos_ellas_ustedes: 'hacían' },
      present_perfect: { yo: 'he hecho', tu: 'has hecho', el_ella_usted: 'ha hecho', nosotros: 'hemos hecho', vosotros: 'habéis hecho', ellos_ellas_ustedes: 'han hecho' },
      past_perfect: { yo: 'había hecho', tu: 'habías hecho', el_ella_usted: 'había hecho', nosotros: 'habíamos hecho', vosotros: 'habíais hecho', ellos_ellas_ustedes: 'habían hecho' },
      conditional: { yo: 'haría', tu: 'harías', el_ella_usted: 'haría', nosotros: 'haríamos', vosotros: 'haríais', ellos_ellas_ustedes: 'harían' },
      conditional_perfect: { yo: 'habría hecho', tu: 'habrías hecho', el_ella_usted: 'habría hecho', nosotros: 'habríamos hecho', vosotros: 'habríais hecho', ellos_ellas_ustedes: 'habrían hecho' },
      preterite_anterior: { yo: 'hube hecho', tu: 'hubiste hecho', el_ella_usted: 'hubo hecho', nosotros: 'hubimos hecho', vosotros: 'hubisteis hecho', ellos_ellas_ustedes: 'hubieron hecho' },
      recent_past: { yo: 'acababa de hacer', tu: 'acababas de hacer', el_ella_usted: 'acababa de hacer', nosotros: 'acabábamos de hacer', vosotros: 'acababais de hacer', ellos_ellas_ustedes: 'acababan de hacer' },
      past_progressive: { yo: 'estaba haciendo', tu: 'estabas haciendo', el_ella_usted: 'estaba haciendo', nosotros: 'estábamos haciendo', vosotros: 'estabais haciendo', ellos_ellas_ustedes: 'estaban haciendo' },
      dislocated_courtesy: { yo: 'haría', tu: 'harías', el_ella_usted: 'haría', nosotros: 'haríamos', vosotros: 'haríais', ellos_ellas_ustedes: 'harían' }
    }
  },
  {
    infinitive: 'decir',
    englishMeaning: 'to say / tell',
    category: 'irregular',
    ar_er_ir: 'ir',
    notes: 'Preterite J-stem (dije, dijo, dijeron). Irregular participle (dicho). Conditional dir- (diría).',
    conjugations: {
      preterite: { yo: 'dije', tu: 'dijiste', el_ella_usted: 'dijo', nosotros: 'dijimos', vosotros: 'dijisteis', ellos_ellas_ustedes: 'dijeron' },
      imperfect: { yo: 'decía', tu: 'decías', el_ella_usted: 'decía', nosotros: 'decíamos', vosotros: 'decíais', ellos_ellas_ustedes: 'decían' },
      present_perfect: { yo: 'he dicho', tu: 'has dicho', el_ella_usted: 'ha dicho', nosotros: 'hemos dicho', vosotros: 'habéis dicho', ellos_ellas_ustedes: 'han dicho' },
      past_perfect: { yo: 'había dicho', tu: 'habías dicho', el_ella_usted: 'había dicho', nosotros: 'habíamos dicho', vosotros: 'habíais dicho', ellos_ellas_ustedes: 'habían dicho' },
      conditional: { yo: 'diría', tu: 'dirías', el_ella_usted: 'diría', nosotros: 'diríamos', vosotros: 'diríais', ellos_ellas_ustedes: 'dirían' },
      conditional_perfect: { yo: 'habría dicho', tu: 'habrías dicho', el_ella_usted: 'habría dicho', nosotros: 'habríamos dicho', vosotros: 'habríais dicho', ellos_ellas_ustedes: 'habrían dicho' },
      preterite_anterior: { yo: 'hube dicho', tu: 'hubiste dicho', el_ella_usted: 'hubo dicho', nosotros: 'hubimos dicho', vosotros: 'hubisteis dicho', ellos_ellas_ustedes: 'hubieron dicho' },
      recent_past: { yo: 'acababa de decir', tu: 'acababas de decir', el_ella_usted: 'acababa de decir', nosotros: 'acabábamos de decir', vosotros: 'acababais de decir', ellos_ellas_ustedes: 'acababan de decir' },
      past_progressive: { yo: 'estaba diciendo', tu: 'estabas diciendo', el_ella_usted: 'estaba diciendo', nosotros: 'estábamos diciendo', vosotros: 'estabais diciendo', ellos_ellas_ustedes: 'estaban diciendo' },
      dislocated_courtesy: { yo: 'diría', tu: 'dirías', el_ella_usted: 'diría', nosotros: 'diríamos', vosotros: 'diríais', ellos_ellas_ustedes: 'dirían' }
    }
  },
  {
    infinitive: 'tener',
    englishMeaning: 'to have / possess',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite UV-stem (tuve, tuvo). Conditional tendr- (tendría).',
    conjugations: {
      preterite: { yo: 'tuve', tu: 'tuviste', el_ella_usted: 'tuvo', nosotros: 'tuvimos', vosotros: 'tuvisteis', ellos_ellas_ustedes: 'tuvieron' },
      imperfect: { yo: 'tenía', tu: 'tenías', el_ella_usted: 'tenía', nosotros: 'teníamos', vosotros: 'teníais', ellos_ellas_ustedes: 'tenían' },
      present_perfect: { yo: 'he tenido', tu: 'has tenido', el_ella_usted: 'ha tenido', nosotros: 'hemos tenido', vosotros: 'habéis tenido', ellos_ellas_ustedes: 'han tenido' },
      past_perfect: { yo: 'había tenido', tu: 'habías tenido', el_ella_usted: 'había tenido', nosotros: 'habíamos tenido', vosotros: 'habíais tenido', ellos_ellas_ustedes: 'habían tenido' },
      conditional: { yo: 'tendría', tu: 'tendrías', el_ella_usted: 'tendría', nosotros: 'tendríamos', vosotros: 'tendríais', ellos_ellas_ustedes: 'tendrían' },
      conditional_perfect: { yo: 'habría tenido', tu: 'habrías tenido', el_ella_usted: 'habría tenido', nosotros: 'habríamos tenido', vosotros: 'habríais tenido', ellos_ellas_ustedes: 'habrían tenido' },
      preterite_anterior: { yo: 'hube tenido', tu: 'hubiste tenido', el_ella_usted: 'hubo tenido', nosotros: 'hubimos tenido', vosotros: 'hubisteis tenido', ellos_ellas_ustedes: 'hubieron tenido' },
      recent_past: { yo: 'acababa de tener', tu: 'acababas de tener', el_ella_usted: 'acababa de tener', nosotros: 'acabábamos de tener', vosotros: 'acababais de tener', ellos_ellas_ustedes: 'acababan de tener' },
      past_progressive: { yo: 'estaba teniendo', tu: 'estabas teniendo', el_ella_usted: 'estaba teniendo', nosotros: 'estábamos teniendo', vosotros: 'estabais teniendo', ellos_ellas_ustedes: 'estaban teniendo' },
      dislocated_courtesy: { yo: 'tendría', tu: 'tendrías', el_ella_usted: 'tendría', nosotros: 'tendríamos', vosotros: 'tendríais', ellos_ellas_ustedes: 'tendrían' }
    }
  },
  {
    infinitive: 'pedir',
    englishMeaning: 'to request / ask for',
    category: 'stem_changing',
    ar_er_ir: 'ir',
    notes: 'Stem change e->i in preterite 3rd person (pidió, pidieron). Gerund: pidiendo.',
    conjugations: {
      preterite: { yo: 'pedí', tu: 'pediste', el_ella_usted: 'pidió', nosotros: 'pedimos', vosotros: 'pedisteis', ellos_ellas_ustedes: 'pidieron' },
      imperfect: { yo: 'pedía', tu: 'pedías', el_ella_usted: 'pedía', nosotros: 'pedíamos', vosotros: 'pedíais', ellos_ellas_ustedes: 'pedían' },
      present_perfect: { yo: 'he pedido', tu: 'has pedido', el_ella_usted: 'ha pedido', nosotros: 'hemos pedido', vosotros: 'habéis pedido', ellos_ellas_ustedes: 'han pedido' },
      past_perfect: { yo: 'había pedido', tu: 'habías pedido', el_ella_usted: 'había pedido', nosotros: 'habíamos pedido', vosotros: 'habíais pedido', ellos_ellas_ustedes: 'habían pedido' },
      conditional: { yo: 'pediría', tu: 'pedirías', el_ella_usted: 'pediría', nosotros: 'pediríamos', vosotros: 'pediríais', ellos_ellas_ustedes: 'pedirían' },
      conditional_perfect: { yo: 'habría pedido', tu: 'habrías pedido', el_ella_usted: 'habría pedido', nosotros: 'habríamos pedido', vosotros: 'habríais pedido', ellos_ellas_ustedes: 'habrían pedido' },
      preterite_anterior: { yo: 'hube pedido', tu: 'hubiste pedido', el_ella_usted: 'hubo pedido', nosotros: 'hubimos pedido', vosotros: 'hubisteis pedido', ellos_ellas_ustedes: 'hubieron pedido' },
      recent_past: { yo: 'acababa de pedir', tu: 'acababas de pedir', el_ella_usted: 'acababa de pedir', nosotros: 'acabábamos de pedir', vosotros: 'acababais de pedir', ellos_ellas_ustedes: 'acababan de pedir' },
      past_progressive: { yo: 'estaba pidiendo', tu: 'estabas pidiendo', el_ella_usted: 'estaba pidiendo', nosotros: 'estábamos pidiendo', vosotros: 'estabais pidiendo', ellos_ellas_ustedes: 'estaban pidiendo' },
      dislocated_courtesy: { yo: 'pediría', tu: 'pedirías', el_ella_usted: 'pediría', nosotros: 'pediríamos', vosotros: 'pediríais', ellos_ellas_ustedes: 'pedirían' }
    }
  },
  {
    infinitive: 'dormir',
    englishMeaning: 'to sleep',
    category: 'stem_changing',
    ar_er_ir: 'ir',
    notes: 'Stem change o->u in preterite 3rd person (durmió, durmieron). Gerund: durmiendo.',
    conjugations: {
      preterite: { yo: 'dormí', tu: 'dormiste', el_ella_usted: 'durmió', nosotros: 'dormimos', vosotros: 'dormisteis', ellos_ellas_ustedes: 'durmieron' },
      imperfect: { yo: 'dormía', tu: 'dormías', el_ella_usted: 'dormía', nosotros: 'dormíamos', vosotros: 'dormíais', ellos_ellas_ustedes: 'dormían' },
      present_perfect: { yo: 'he dormido', tu: 'has dormido', el_ella_usted: 'ha dormido', nosotros: 'hemos dormido', vosotros: 'habéis dormido', ellos_ellas_ustedes: 'han dormido' },
      past_perfect: { yo: 'había dormido', tu: 'habías dormido', el_ella_usted: 'había dormido', nosotros: 'habíamos dormido', vosotros: 'habíais dormido', ellos_ellas_ustedes: 'habían dormido' },
      conditional: { yo: 'dormiría', tu: 'dormirías', el_ella_usted: 'dormiría', nosotros: 'dormiríamos', vosotros: 'dormiríais', ellos_ellas_ustedes: 'dormirían' },
      conditional_perfect: { yo: 'habría dormido', tu: 'habrías dormido', el_ella_usted: 'habría dormido', nosotros: 'habríamos dormido', vosotros: 'habríais dormido', ellos_ellas_ustedes: 'habrían dormido' },
      preterite_anterior: { yo: 'hube dormido', tu: 'hubiste dormido', el_ella_usted: 'hubo dormido', nosotros: 'hubimos dormido', vosotros: 'hubisteis dormido', ellos_ellas_ustedes: 'hubieron dormido' },
      recent_past: { yo: 'acababa de dormir', tu: 'acababas de dormir', el_ella_usted: 'acababa de dormir', nosotros: 'acabábamos de dormir', vosotros: 'acababais de dormir', ellos_ellas_ustedes: 'acababan de dormir' },
      past_progressive: { yo: 'estaba durmiendo', tu: 'estabas durmiendo', el_ella_usted: 'estaba durmiendo', nosotros: 'estábamos durmiendo', vosotros: 'estabais durmiendo', ellos_ellas_ustedes: 'estaban durmiendo' },
      dislocated_courtesy: { yo: 'dormiría', tu: 'dormirías', el_ella_usted: 'dormiría', nosotros: 'dormiríamos', vosotros: 'dormiríais', ellos_ellas_ustedes: 'dormirían' }
    }
  },
  {
    infinitive: 'buscar',
    englishMeaning: 'to search / look for',
    category: 'spelling_change',
    ar_er_ir: 'ar',
    notes: 'Spelling change c->qu in Preterite 1st person singular (busqué) to preserve /k/ sound.',
    conjugations: {
      preterite: { yo: 'busqué', tu: 'buscaste', el_ella_usted: 'buscó', nosotros: 'buscamos', vosotros: 'buscasteis', ellos_ellas_ustedes: 'buscaron' },
      imperfect: { yo: 'buscaba', tu: 'buscabas', el_ella_usted: 'buscaba', nosotros: 'buscábamos', vosotros: 'buscabais', ellos_ellas_ustedes: 'buscaban' },
      present_perfect: { yo: 'he buscado', tu: 'has buscado', el_ella_usted: 'ha buscado', nosotros: 'hemos buscado', vosotros: 'habéis buscado', ellos_ellas_ustedes: 'han buscado' },
      past_perfect: { yo: 'había buscado', tu: 'habías buscado', el_ella_usted: 'había buscado', nosotros: 'habíamos buscado', vosotros: 'habíais buscado', ellos_ellas_ustedes: 'habían buscado' },
      conditional: { yo: 'buscaría', tu: 'buscarías', el_ella_usted: 'buscaría', nosotros: 'buscaríamos', vosotros: 'buscaríais', ellos_ellas_ustedes: 'buscarían' },
      conditional_perfect: { yo: 'habría buscado', tu: 'habrías buscado', el_ella_usted: 'habría buscado', nosotros: 'habríamos buscado', vosotros: 'habríais buscado', ellos_ellas_ustedes: 'habrían buscado' },
      preterite_anterior: { yo: 'hube buscado', tu: 'hubiste buscado', el_ella_usted: 'hubo buscado', nosotros: 'hubimos buscado', vosotros: 'hubisteis buscado', ellos_ellas_ustedes: 'hubieron buscado' },
      recent_past: { yo: 'acababa de buscar', tu: 'acababas de buscar', el_ella_usted: 'acababa de buscar', nosotros: 'acabábamos de buscar', vosotros: 'acababais de buscar', ellos_ellas_ustedes: 'acababan de buscar' },
      past_progressive: { yo: 'estaba buscando', tu: 'estabas buscando', el_ella_usted: 'estaba buscando', nosotros: 'estábamos buscando', vosotros: 'estabais buscando', ellos_ellas_ustedes: 'estaban buscando' },
      dislocated_courtesy: { yo: 'buscaría', tu: 'buscarías', el_ella_usted: 'buscaría', nosotros: 'buscaríamos', vosotros: 'buscaríais', ellos_ellas_ustedes: 'buscarían' }
    }
  },
  {
    infinitive: 'llegar',
    englishMeaning: 'to arrive',
    category: 'spelling_change',
    ar_er_ir: 'ar',
    notes: 'Spelling change g->gu in Preterite 1st person singular (llegué) to keep hard /g/ sound.',
    conjugations: {
      preterite: { yo: 'llegué', tu: 'llegaste', el_ella_usted: 'llegó', nosotros: 'llegamos', vosotros: 'llegasteis', ellos_ellas_ustedes: 'llegaron' },
      imperfect: { yo: 'llegaba', tu: 'llegabas', el_ella_usted: 'llegaba', nosotros: 'llegábamos', vosotros: 'llegabais', ellos_ellas_ustedes: 'llegaban' },
      present_perfect: { yo: 'he llegado', tu: 'has llegado', el_ella_usted: 'ha llegado', nosotros: 'hemos llegado', vosotros: 'habéis llegado', ellos_ellas_ustedes: 'han llegado' },
      past_perfect: { yo: 'había llegado', tu: 'habías llegado', el_ella_usted: 'había llegado', nosotros: 'habíamos llegado', vosotros: 'habíais llegado', ellos_ellas_ustedes: 'habían llegado' },
      conditional: { yo: 'llegaría', tu: 'llegarías', el_ella_usted: 'llegaría', nosotros: 'llegaríamos', vosotros: 'llegaríais', ellos_ellas_ustedes: 'llegarían' },
      conditional_perfect: { yo: 'habría llegado', tu: 'habrías llegado', el_ella_usted: 'habría llegado', nosotros: 'habríamos llegado', vosotros: 'habríais llegado', ellos_ellas_ustedes: 'habrían llegado' },
      preterite_anterior: { yo: 'hube llegado', tu: 'hubiste llegado', el_ella_usted: 'hubo llegado', nosotros: 'hubimos llegado', vosotros: 'hubisteis llegado', ellos_ellas_ustedes: 'hubieron llegado' },
      recent_past: { yo: 'acababa de llegar', tu: 'acababas de llegar', el_ella_usted: 'acababa de llegar', nosotros: 'acabábamos de llegar', vosotros: 'acababais de llegar', ellos_ellas_ustedes: 'acababan de llegar' },
      past_progressive: { yo: 'estaba llegando', tu: 'estabas llegando', el_ella_usted: 'estaba llegando', nosotros: 'estábamos llegando', vosotros: 'estabais llegando', ellos_ellas_ustedes: 'estaban llegando' },
      dislocated_courtesy: { yo: 'llegaría', tu: 'llegarías', el_ella_usted: 'llegaría', nosotros: 'llegaríamos', vosotros: 'llegaríais', ellos_ellas_ustedes: 'llegarían' }
    }
  },
  {
    infinitive: 'leer',
    englishMeaning: 'to read',
    category: 'spelling_change',
    ar_er_ir: 'er',
    notes: 'Preterite vowel shift i->y between vowels (leyó, leyendo).',
    conjugations: {
      preterite: { yo: 'leí', tu: 'leíste', el_ella_usted: 'leyó', nosotros: 'leímos', vosotros: 'leísteis', ellos_ellas_ustedes: 'leyeron' },
      imperfect: { yo: 'leía', tu: 'leías', el_ella_usted: 'leía', nosotros: 'leíamos', vosotros: 'leíais', ellos_ellas_ustedes: 'leían' },
      present_perfect: { yo: 'he leído', tu: 'has leído', el_ella_usted: 'ha leído', nosotros: 'hemos leído', vosotros: 'habéis leído', ellos_ellas_ustedes: 'han leído' },
      past_perfect: { yo: 'había leído', tu: 'habías leído', el_ella_usted: 'había leído', nosotros: 'habíamos leído', vosotros: 'habíais leído', ellos_ellas_ustedes: 'habían leído' },
      conditional: { yo: 'leería', tu: 'leerías', el_ella_usted: 'leería', nosotros: 'leeríamos', vosotros: 'leeríais', ellos_ellas_ustedes: 'leerían' },
      conditional_perfect: { yo: 'habría leído', tu: 'habrías leído', el_ella_usted: 'habría leído', nosotros: 'habríamos leído', vosotros: 'habríais leído', ellos_ellas_ustedes: 'habrían leído' },
      preterite_anterior: { yo: 'hube leído', tu: 'hubiste leído', el_ella_usted: 'hubo leído', nosotros: 'hubimos leído', vosotros: 'hubisteis leído', ellos_ellas_ustedes: 'hubieron leído' },
      recent_past: { yo: 'acababa de leer', tu: 'acababas de leer', el_ella_usted: 'acababa de leer', nosotros: 'acabábamos de leer', vosotros: 'acababais de leer', ellos_ellas_ustedes: 'acababan de leer' },
      past_progressive: { yo: 'estaba leyendo', tu: 'estabas leyendo', el_ella_usted: 'estaba leyendo', nosotros: 'estábamos leyendo', vosotros: 'estabais leyendo', ellos_ellas_ustedes: 'estaban leyendo' },
      dislocated_courtesy: { yo: 'leería', tu: 'leerías', el_ella_usted: 'leería', nosotros: 'leeríamos', vosotros: 'leeríais', ellos_ellas_ustedes: 'leerían' }
    }
  },
  {
    infinitive: 'querer',
    englishMeaning: 'to want / love',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite quis- stem (quise, quiso). Conditional querr- stem (querría). High usage in courtesy past (quería).',
    conjugations: {
      preterite: { yo: 'quise', tu: 'quisiste', el_ella_usted: 'quiso', nosotros: 'quisimos', vosotros: 'quisisteis', ellos_ellas_ustedes: 'quisieron' },
      imperfect: { yo: 'quería', tu: 'querías', el_ella_usted: 'quería', nosotros: 'queríamos', vosotros: 'queríais', ellos_ellas_ustedes: 'querían' },
      present_perfect: { yo: 'he querido', tu: 'has querido', el_ella_usted: 'ha querido', nosotros: 'hemos querido', vosotros: 'habéis querido', ellos_ellas_ustedes: 'han querido' },
      past_perfect: { yo: 'había querido', tu: 'habías querido', el_ella_usted: 'había querido', nosotros: 'habíamos querido', vosotros: 'habíais querido', ellos_ellas_ustedes: 'habían querido' },
      conditional: { yo: 'querría', tu: 'querrías', el_ella_usted: 'querría', nosotros: 'querríamos', vosotros: 'querríais', ellos_ellas_ustedes: 'querrían' },
      conditional_perfect: { yo: 'habría querido', tu: 'habrías querido', el_ella_usted: 'habría querido', nosotros: 'habríamos querido', vosotros: 'habríais querido', ellos_ellas_ustedes: 'habrían querido' },
      preterite_anterior: { yo: 'hube querido', tu: 'hubiste querido', el_ella_usted: 'hubo querido', nosotros: 'hubimos querido', vosotros: 'hubisteis querido', ellos_ellas_ustedes: 'hubieron querido' },
      recent_past: { yo: 'acababa de querer', tu: 'acababas de querer', el_ella_usted: 'acababa de querer', nosotros: 'acabábamos de querer', vosotros: 'acababais de querer', ellos_ellas_ustedes: 'acababan de querer' },
      past_progressive: { yo: 'estaba queriendo', tu: 'estabas queriendo', el_ella_usted: 'estaba queriendo', nosotros: 'estábamos queriendo', vosotros: 'estabais queriendo', ellos_ellas_ustedes: 'estaban queriendo' },
      dislocated_courtesy: { yo: 'quería', tu: 'querías', el_ella_usted: 'quería', nosotros: 'queríamos', vosotros: 'queríais', ellos_ellas_ustedes: 'querían' }
    }
  },
  {
    infinitive: 'poder',
    englishMeaning: 'can / to be able to',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite pud- stem (pude, pudo). Conditional podr- stem (podría).',
    conjugations: {
      preterite: { yo: 'pude', tu: 'pudiste', el_ella_usted: 'pudo', nosotros: 'pudimos', vosotros: 'pudisteis', ellos_ellas_ustedes: 'pudieron' },
      imperfect: { yo: 'podía', tu: 'podías', el_ella_usted: 'podía', nosotros: 'podíamos', vosotros: 'podíais', ellos_ellas_ustedes: 'podían' },
      present_perfect: { yo: 'he podido', tu: 'has podido', el_ella_usted: 'ha podido', nosotros: 'hemos podido', vosotros: 'habéis podido', ellos_ellas_ustedes: 'han podido' },
      past_perfect: { yo: 'había podido', tu: 'habías podido', el_ella_usted: 'había podido', nosotros: 'habíamos podido', vosotros: 'habíais podido', ellos_ellas_ustedes: 'habían podido' },
      conditional: { yo: 'podría', tu: 'podrías', el_ella_usted: 'podría', nosotros: 'podríamos', vosotros: 'podríais', ellos_ellas_ustedes: 'podrían' },
      conditional_perfect: { yo: 'habría podido', tu: 'habrías podido', el_ella_usted: 'habría podido', nosotros: 'habríamos podido', vosotros: 'habríais podido', ellos_ellas_ustedes: 'habrían podido' },
      preterite_anterior: { yo: 'hube podido', tu: 'hubiste podido', el_ella_usted: 'hubo podido', nosotros: 'hubimos podido', vosotros: 'hubisteis podido', ellos_ellas_ustedes: 'hubieron podido' },
      recent_past: { yo: 'acababa de poder', tu: 'acababas de poder', el_ella_usted: 'acababa de poder', nosotros: 'acabábamos de poder', vosotros: 'acababais de poder', ellos_ellas_ustedes: 'acababan de poder' },
      past_progressive: { yo: 'estaba pudiendo', tu: 'estabas pudiendo', el_ella_usted: 'estaba pudiendo', nosotros: 'estábamos pudiendo', vosotros: 'estabais pudiendo', ellos_ellas_ustedes: 'estaban pudiendo' },
      dislocated_courtesy: { yo: 'podía', tu: 'podías', el_ella_usted: 'podía', nosotros: 'podíamos', vosotros: 'podíais', ellos_ellas_ustedes: 'podían' }
    }
  },
  {
    infinitive: 'ver',
    englishMeaning: 'to see / watch',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Imperfect is veía (preserves e). Irregular participle (visto).',
    conjugations: {
      preterite: { yo: 'vi', tu: 'viste', el_ella_usted: 'vio', nosotros: 'vimos', vosotros: 'visteis', ellos_ellas_ustedes: 'vieron' },
      imperfect: { yo: 'veía', tu: 'veías', el_ella_usted: 'veía', nosotros: 'veíamos', vosotros: 'veíais', ellos_ellas_ustedes: 'veían' },
      present_perfect: { yo: 'he visto', tu: 'has visto', el_ella_usted: 'ha visto', nosotros: 'hemos visto', vosotros: 'habéis visto', ellos_ellas_ustedes: 'han visto' },
      past_perfect: { yo: 'había visto', tu: 'habías visto', el_ella_usted: 'había visto', nosotros: 'habíamos visto', vosotros: 'habíais visto', ellos_ellas_ustedes: 'habían visto' },
      conditional: { yo: 'vería', tu: 'verías', el_ella_usted: 'vería', nosotros: 'veríamos', vosotros: 'veríais', ellos_ellas_ustedes: 'verían' },
      conditional_perfect: { yo: 'habría visto', tu: 'habrías visto', el_ella_usted: 'habría visto', nosotros: 'habríamos visto', vosotros: 'habríais visto', ellos_ellas_ustedes: 'habrían visto' },
      preterite_anterior: { yo: 'hube visto', tu: 'hubiste visto', el_ella_usted: 'hubo visto', nosotros: 'hubimos visto', vosotros: 'hubisteis visto', ellos_ellas_ustedes: 'hubieron visto' },
      recent_past: { yo: 'acababa de ver', tu: 'acababas de ver', el_ella_usted: 'acababa de ver', nosotros: 'acabábamos de ver', vosotros: 'acababais de ver', ellos_ellas_ustedes: 'acababan de ver' },
      past_progressive: { yo: 'estaba viendo', tu: 'estabas viendo', el_ella_usted: 'estaba viendo', nosotros: 'estábamos viendo', vosotros: 'estabais viendo', ellos_ellas_ustedes: 'estaban viendo' },
      dislocated_courtesy: { yo: 'vería', tu: 'verías', el_ella_usted: 'vería', nosotros: 'veríamos', vosotros: 'veríais', ellos_ellas_ustedes: 'verían' }
    }
  },
  {
    infinitive: 'poner',
    englishMeaning: 'to put / place',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite pus- stem (puse, puso). Participle puesto. Conditional pondr- stem (pondría).',
    conjugations: {
      preterite: { yo: 'puse', tu: 'pusiste', el_ella_usted: 'puso', nosotros: 'pusimos', vosotros: 'pusisteis', ellos_ellas_ustedes: 'pusieron' },
      imperfect: { yo: 'ponía', tu: 'ponías', el_ella_usted: 'ponía', nosotros: 'poníamos', vosotros: 'poníais', ellos_ellas_ustedes: 'ponían' },
      present_perfect: { yo: 'he puesto', tu: 'has puesto', el_ella_usted: 'ha puesto', nosotros: 'hemos puesto', vosotros: 'habéis puesto', ellos_ellas_ustedes: 'han puesto' },
      past_perfect: { yo: 'había puesto', tu: 'habías puesto', el_ella_usted: 'había puesto', nosotros: 'habíamos puesto', vosotros: 'habíais puesto', ellos_ellas_ustedes: 'habían puesto' },
      conditional: { yo: 'pondría', tu: 'pondrías', el_ella_usted: 'pondría', nosotros: 'pondríamos', vosotros: 'pondríais', ellos_ellas_ustedes: 'pondrían' },
      conditional_perfect: { yo: 'habría puesto', tu: 'habrías puesto', el_ella_usted: 'habría puesto', nosotros: 'habríamos puesto', vosotros: 'habríais puesto', ellos_ellas_ustedes: 'habrían puesto' },
      preterite_anterior: { yo: 'hube puesto', tu: 'hubiste puesto', el_ella_usted: 'hubo puesto', nosotros: 'hubimos puesto', vosotros: 'hubisteis puesto', ellos_ellas_ustedes: 'hubieron puesto' },
      recent_past: { yo: 'acababa de poner', tu: 'acababas de poner', el_ella_usted: 'acababa de poner', nosotros: 'acabábamos de poner', vosotros: 'acababais de poner', ellos_ellas_ustedes: 'acababan de poner' },
      past_progressive: { yo: 'estaba poniendo', tu: 'estabas poniendo', el_ella_usted: 'estaba poniendo', nosotros: 'estábamos poniendo', vosotros: 'estabais poniendo', ellos_ellas_ustedes: 'estaban poniendo' },
      dislocated_courtesy: { yo: 'pondría', tu: 'pondrías', el_ella_usted: 'pondría', nosotros: 'pondríamos', vosotros: 'pondríais', ellos_ellas_ustedes: 'pondrían' }
    }
  },
  {
    infinitive: 'saber',
    englishMeaning: 'to know (information / skills)',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite sup- stem (supe, supo). Conditional sabr- stem (sabría).',
    conjugations: {
      preterite: { yo: 'supe', tu: 'supiste', el_ella_usted: 'supo', nosotros: 'supimos', vosotros: 'supisteis', ellos_ellas_ustedes: 'supieron' },
      imperfect: { yo: 'sabía', tu: 'sabías', el_ella_usted: 'sabía', nosotros: 'sabíamos', vosotros: 'sabíais', ellos_ellas_ustedes: 'sabían' },
      present_perfect: { yo: 'he sabido', tu: 'has sabido', el_ella_usted: 'ha sabido', nosotros: 'hemos sabido', vosotros: 'habéis sabido', ellos_ellas_ustedes: 'han sabido' },
      past_perfect: { yo: 'había sabido', tu: 'habías sabido', el_ella_usted: 'había sabido', nosotros: 'habíamos sabido', vosotros: 'habíais sabido', ellos_ellas_ustedes: 'habían sabido' },
      conditional: { yo: 'sabría', tu: 'sabrías', el_ella_usted: 'sabría', nosotros: 'sabríamos', vosotros: 'sabríais', ellos_ellas_ustedes: 'sabrían' },
      conditional_perfect: { yo: 'habría sabido', tu: 'habrías sabido', el_ella_usted: 'habría sabido', nosotros: 'habríamos sabido', vosotros: 'habríais sabido', ellos_ellas_ustedes: 'habrían sabido' },
      preterite_anterior: { yo: 'hube sabido', tu: 'hubiste sabido', el_ella_usted: 'hubo sabido', nosotros: 'hubimos sabido', vosotros: 'hubisteis sabido', ellos_ellas_ustedes: 'hubieron sabido' },
      recent_past: { yo: 'acababa de saber', tu: 'acababas de saber', el_ella_usted: 'acababa de saber', nosotros: 'acabábamos de saber', vosotros: 'acababais de saber', ellos_ellas_ustedes: 'acababan de saber' },
      past_progressive: { yo: 'estaba sabiendo', tu: 'estabas sabiendo', el_ella_usted: 'estaba sabiendo', nosotros: 'estábamos sabiendo', vosotros: 'estabais sabiendo', ellos_ellas_ustedes: 'estaban sabiendo' },
      dislocated_courtesy: { yo: 'sabría', tu: 'sabrías', el_ella_usted: 'sabría', nosotros: 'sabríamos', vosotros: 'sabríais', ellos_ellas_ustedes: 'sabrían' }
    }
  },
  {
    infinitive: 'traer',
    englishMeaning: 'to bring',
    category: 'irregular',
    ar_er_ir: 'er',
    notes: 'Preterite J-stem (traje, trajo, trajeron). Gerund trayendo.',
    conjugations: {
      preterite: { yo: 'traje', tu: 'trajiste', el_ella_usted: 'trajo', nosotros: 'trajimos', vosotros: 'trajisteis', ellos_ellas_ustedes: 'trajeron' },
      imperfect: { yo: 'traía', tu: 'traías', el_ella_usted: 'traía', nosotros: 'traíamos', vosotros: 'traíais', ellos_ellas_ustedes: 'traían' },
      present_perfect: { yo: 'he traído', tu: 'has traído', el_ella_usted: 'ha traído', nosotros: 'hemos traído', vosotros: 'habéis traído', ellos_ellas_ustedes: 'han traído' },
      past_perfect: { yo: 'había traído', tu: 'habías traído', el_ella_usted: 'había traído', nosotros: 'habíamos traído', vosotros: 'habíais traído', ellos_ellas_ustedes: 'habían traído' },
      conditional: { yo: 'traería', tu: 'traerías', el_ella_usted: 'traería', nosotros: 'traeríamos', vosotros: 'traeríais', ellos_ellas_ustedes: 'traerían' },
      conditional_perfect: { yo: 'habría traído', tu: 'habrías traído', el_ella_usted: 'habría traído', nosotros: 'habríamos traído', vosotros: 'habríais traído', ellos_ellas_ustedes: 'habrían traído' },
      preterite_anterior: { yo: 'hube traído', tu: 'hubiste traído', el_ella_usted: 'hubo traído', nosotros: 'hubimos traído', vosotros: 'hubisteis traído', ellos_ellas_ustedes: 'hubieron traído' },
      recent_past: { yo: 'acababa de traer', tu: 'acababas de traer', el_ella_usted: 'acababa de traer', nosotros: 'acabábamos de traer', vosotros: 'acababais de traer', ellos_ellas_ustedes: 'acababan de traer' },
      past_progressive: { yo: 'estaba trayendo', tu: 'estabas trayendo', el_ella_usted: 'estaba trayendo', nosotros: 'estábamos trayendo', vosotros: 'estabais trayendo', ellos_ellas_ustedes: 'estaban trayendo' },
      dislocated_courtesy: { yo: 'traería', tu: 'traerías', el_ella_usted: 'traería', nosotros: 'traeríamos', vosotros: 'traeríais', ellos_ellas_ustedes: 'traerían' }
    }
  },
  {
    infinitive: 'venir',
    englishMeaning: 'to come',
    category: 'irregular',
    ar_er_ir: 'ir',
    notes: 'Preterite vin- stem (vine, vino). Conditional vendr- stem (vendría). Gerund viniendo.',
    conjugations: {
      preterite: { yo: 'vine', tu: 'viniste', el_ella_usted: 'vino', nosotros: 'vinimos', vosotros: 'vinisteis', ellos_ellas_ustedes: 'vinieron' },
      imperfect: { yo: 'venía', tu: 'venías', el_ella_usted: 'venía', nosotros: 'veníamos', vosotros: 'veníais', ellos_ellas_ustedes: 'venían' },
      present_perfect: { yo: 'he venido', tu: 'has venido', el_ella_usted: 'ha venido', nosotros: 'hemos venido', vosotros: 'habéis venido', ellos_ellas_ustedes: 'han venido' },
      past_perfect: { yo: 'había venido', tu: 'habías venido', el_ella_usted: 'había venido', nosotros: 'habíamos venido', vosotros: 'habíais venido', ellos_ellas_ustedes: 'habían venido' },
      conditional: { yo: 'vendría', tu: 'vendrías', el_ella_usted: 'vendría', nosotros: 'vendríamos', vosotros: 'vendríais', ellos_ellas_ustedes: 'vendrían' },
      conditional_perfect: { yo: 'habría venido', tu: 'habrías venido', el_ella_usted: 'habría venido', nosotros: 'habríamos venido', vosotros: 'habríais venido', ellos_ellas_ustedes: 'habrían venido' },
      preterite_anterior: { yo: 'hube venido', tu: 'hubiste venido', el_ella_usted: 'hubo venido', nosotros: 'hubimos venido', vosotros: 'hubisteis venido', ellos_ellas_ustedes: 'hubieron venido' },
      recent_past: { yo: 'acababa de venir', tu: 'acababas de venir', el_ella_usted: 'acababa de venir', nosotros: 'acabábamos de venir', vosotros: 'acababais de venir', ellos_ellas_ustedes: 'acababan de venir' },
      past_progressive: { yo: 'estaba viniendo', tu: 'estabas viniendo', el_ella_usted: 'estaba viniendo', nosotros: 'estábamos viniendo', vosotros: 'estabais viniendo', ellos_ellas_ustedes: 'estaban viniendo' },
      dislocated_courtesy: { yo: 'vendría', tu: 'vendrías', el_ella_usted: 'vendría', nosotros: 'vendríamos', vosotros: 'vendríais', ellos_ellas_ustedes: 'vendrían' }
    }
  }
];
