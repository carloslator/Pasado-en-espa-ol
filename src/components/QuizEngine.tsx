import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw, HelpCircle, Award } from 'lucide-react';

export const QuizEngine: React.FC = () => {
  const [currentQuestionIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [blankInput, setBlankInput] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isSubmitted = submittedQuestions[currentQ.id];
  const userAnswer = userAnswers[currentQ.id];
  const isCorrect = userAnswer?.trim().toLowerCase() === currentQ.correctAnswer.toLowerCase();

  const handleSelectOption = (option: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: option }));
  };

  const handleSubmitAnswer = () => {
    if (currentQ.type === 'fill_in_blank' && !userAnswer) {
      if (!blankInput.trim()) return;
      setUserAnswers((prev) => ({ ...prev, [currentQ.id]: blankInput.trim() }));
    }
    setSubmittedQuestions((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  const handleNextQuestion = () => {
    setBlankInput('');
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmittedQuestions({});
    setBlankInput('');
    setQuizFinished(false);
  };

  const totalScore = QUIZ_QUESTIONS.reduce((acc, q) => {
    const ans = userAnswers[q.id];
    if (ans && ans.trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="space-y-6 font-sans max-w-3xl mx-auto">
      
      {/* Quiz Progress Top Bar */}
      <div className="bg-white border border-[#1A1A1A] p-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 accent-text" />
          <h3 className="font-extrabold text-sm uppercase tracking-tight text-[#1A1A1A]">
            Interactive Past Tense Practice Test
          </h3>
        </div>
        <div className="text-xs font-mono text-zinc-600 font-bold">
          QUESTION 0{currentQuestionIndex + 1} OF 0{QUIZ_QUESTIONS.length}
        </div>
      </div>

      {!quizFinished ? (
        <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 space-y-6">
          
          {/* Question Prompt */}
          <div className="space-y-2 border-b border-[#1A1A1A] pb-4">
            <span className="bg-[#1A1A1A] text-white font-mono text-[10px] uppercase font-bold px-2.5 py-1 tracking-widest inline-block">
              {currentQ.type.replace('_', ' ')}
            </span>
            <p className="text-sm font-extrabold text-zinc-700">
              {currentQ.promptEnglish}
            </p>
            <p className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A] pt-1">
              "{currentQ.sentenceSpanish}"
            </p>
          </div>

          {/* Options / Input Form */}
          <div className="space-y-3">
            {currentQ.options ? (
              <div className="grid grid-cols-1 gap-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = userAnswer === opt;
                  let btnStyle = 'bg-white border-[#E5E5E5] text-[#1A1A1A] hover:border-[#1A1A1A]';

                  if (isSubmitted) {
                    if (opt.toLowerCase() === currentQ.correctAnswer.toLowerCase()) {
                      btnStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-red-50 border-[#D72638] text-[#D72638] font-bold';
                    } else {
                      btnStyle = 'bg-[#F8F8F8] border-[#E5E5E5] text-zinc-400 opacity-60';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-option-${idx}`}
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-4 border font-mono text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-xs text-zinc-400">0{idx + 1}.</span>
                        <span>{opt}</span>
                      </div>
                      {isSubmitted && opt.toLowerCase() === currentQ.correctAnswer.toLowerCase() && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                      {isSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-[#D72638]" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Fill-in-the-blank input */
              <div className="space-y-2">
                <input
                  type="text"
                  id="quiz-fill-input"
                  disabled={isSubmitted}
                  value={isSubmitted ? userAnswer : blankInput}
                  onChange={(e) => setBlankInput(e.target.value)}
                  placeholder="Type exact Spanish conjugation..."
                  className="w-full p-3.5 bg-[#F8F8F8] border border-[#1A1A1A] text-base font-mono font-bold text-[#1A1A1A] focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Explanation Box After Submit */}
          {isSubmitted && (
            <div className={`p-5 border space-y-2 text-xs ${
              isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-950' : 'bg-red-50 border-[#D72638] text-[#D72638]'
            }`}>
              <div className="flex items-center space-x-2 font-bold uppercase font-mono">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Correct Answer!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-[#D72638]" />
                    <span>Incorrect. Correct Answer: "{currentQ.correctAnswer}"</span>
                  </>
                )}
              </div>
              <p className="font-sans leading-relaxed text-[#1A1A1A]">
                {currentQ.explanation}
              </p>
              <div className="text-[11px] font-mono border-t border-[#1A1A1A]/10 pt-2 text-[#1A1A1A]">
                <strong>Grammar Rule:</strong> {currentQ.grammarTip}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-end pt-2">
            {!isSubmitted ? (
              <button
                id="quiz-submit-btn"
                onClick={handleSubmitAnswer}
                disabled={!userAnswer && currentQ.type !== 'fill_in_blank' && !blankInput.trim()}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase font-bold hover:bg-zinc-800 disabled:opacity-50 transition-colors"
              >
                Submit Answer
              </button>
            ) : (
              <button
                id="quiz-next-btn"
                onClick={handleNextQuestion}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center space-x-2"
              >
                <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Results View */
        <div className="bg-white border border-[#1A1A1A] p-8 sm:p-12 text-center space-y-6">
          <Award className="w-12 h-12 accent-text mx-auto" />
          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold uppercase text-[#1A1A1A]">
              Quiz Completed
            </h3>
            <p className="text-lg font-mono font-bold text-[#1A1A1A]">
              Your Score: {totalScore} / {QUIZ_QUESTIONS.length} (
              {Math.round((totalScore / QUIZ_QUESTIONS.length) * 100)}%)
            </p>
          </div>

          <div className="p-5 bg-[#F8F8F8] border border-[#E5E5E5] text-xs text-[#1A1A1A] font-mono text-left space-y-2">
            <p className="font-bold text-[#1A1A1A] uppercase tracking-wider">Review Takeaway:</p>
            <p>
              {totalScore === QUIZ_QUESTIONS.length
                ? 'Excellent! You have a solid grasp of Spanish past tenses and dislocated modal usages.'
                : 'Great effort! Review the Grammar Matrix or practice Flashcards to strengthen any tricky irregular stems or preterite vs imperfect nuances.'}
            </p>
          </div>

          <button
            id="quiz-restart-btn"
            onClick={handleRestartQuiz}
            className="w-full py-3.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase font-bold flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retake Practice Test</span>
          </button>
        </div>
      )}

    </div>
  );
};

