
import React, { useState } from 'react';
import { PlayCircle, Box, BookOpen, CheckCircle, ChevronRight, RefreshCw, ArrowLeft } from 'lucide-react';

const TABS = [
  { id: 'intro', label: 'Kirish', icon: BookOpen },
  { id: 'video', label: 'Video Dars', icon: PlayCircle },
  { id: '3d', label: '3D Model', icon: Box },
  { id: 'quiz', label: 'Test', icon: CheckCircle },
];

export const LessonView = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const finishQuiz = () => {
    let correct = 0;
    selectedAnswers.forEach((ans, idx) => {
      // Compare as strings to handle both index-based and text-based answers
      if (String(ans) === String(lesson.quiz[idx].correctAnswer)) correct++;
    });
    setScore(correct);
  };

  const resetQuiz = () => {
    setScore(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-4 shadow-sm z-10 sticky top-0">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 overflow-hidden">
          <h1 className="text-lg md:text-xl font-bold text-gray-800 truncate">{lesson.title}</h1>
          <p className="text-xs md:text-sm text-gray-500 truncate">{lesson.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b overflow-x-auto no-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 md:px-4 md:px-6 py-3 md:py-4 border-b-2 transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === tab.id 
                ? 'border-teal-600 text-teal-700 font-medium' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm min-h-[500px] p-4 md:p-6">
          
          {activeTab === 'intro' && (
            <div className="prose lg:prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{lesson.title}</h2>
              <p className="mb-6">{lesson.description}</p>
              
              {/* Dynamic Content Rendering */}
              {lesson.content.map((block, idx) => (
                <div key={idx} className="mb-8">
                  {block.type === 'paragraph' && (
                    <p className="mb-4 leading-relaxed">{block.text}</p>
                  )}
                  
                  {block.type === 'table' && block.data && (
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-teal-50">
                          <tr>
                            {block.data.headers.map((h, i) => (
                              <th key={i} className="px-4 md:px-6 py-3 text-left text-xs font-bold text-teal-800 uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {block.data.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 md:px-6 py-3 md:py-4 whitespace-normal md:whitespace-nowrap font-medium break-words text-gray-900">
                                {row.topic}
                              </td>
                              <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600 break-words">
                                {row.description && <p>{row.description}</p>}
                                {row.details && (
                                  <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                                    {row.details.map((d, dIdx) => (
                                      <li key={dIdx}>{d}</li>
                                    ))}
                                  </ul>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {block.type === 'image' && block.url && (
                    <img src={block.url} alt="Lesson illustration" className="rounded-xl w-full object-cover shadow-md" />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'video' && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={lesson.videoUrl} 
                  title={lesson.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-500 text-sm">Video manba: YouTube</p>
            </div>
          )}

          {activeTab === '3d' && (
            <div className="h-full flex flex-col items-center justify-center bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden min-h-[400px]">
               <div className="absolute inset-0 bg-cover opacity-30" style={{ backgroundImage: `url(${lesson.modelUrl || 'https://picsum.photos/800/600'})` }}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
               
               <Box className="w-24 h-24 mb-4 text-teal-400 animate-bounce relative z-10" />
               <h3 className="text-2xl font-bold mb-2 z-10 text-center">Interaktiv 3D Model</h3>
               <p className="text-gray-300 text-center max-w-md z-10 mb-6">
                 Ushbu mavzu uchun 3D vizualizatsiya yuklanmoqda.
               </p>
               <button className="px-8 py-3 bg-teal-600 rounded-full font-bold hover:bg-teal-500 transition-colors z-10 shadow-lg shadow-teal-500/20">
                 Modelni Ko'rish
               </button>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="max-w-2xl mx-auto py-6">
              {score === null ? (
                <>
                  <div className="mb-8">
                    <span className="text-sm font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
                      Savol {currentQuestion + 1}/{lesson.quiz.length}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4 leading-tight">
                      {lesson.quiz[currentQuestion].question}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {lesson.quiz[currentQuestion].options.map((opt, idx) => {
                      const val = opt; // Using text as value since data has string correctAnswers
                      const isSelected = selectedAnswers[currentQuestion] === val;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(val)}
                          className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-teal-500 bg-teal-50 shadow-md' 
                              : 'border-gray-100 hover:border-teal-200 hover:bg-gray-50'
                          }`}
                        >
                          <span className={`font-semibold ${isSelected ? 'text-teal-900' : 'text-gray-700'}`}>
                            {opt}
                          </span>
                          {isSelected && <CheckCircle size={20} className="text-teal-600" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-10 flex justify-end">
                    {currentQuestion < lesson.quiz.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                        disabled={selectedAnswers[currentQuestion] === undefined}
                        className="flex items-center gap-2 bg-slate-900 text-white px-4 md:px-6 py-3 rounded-full hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Keyingi <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button
                        onClick={finishQuiz}
                        disabled={selectedAnswers[currentQuestion] === undefined}
                        className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 font-bold shadow-lg shadow-teal-600/30 transition-all transform hover:scale-105"
                      >
                        Natijani Ko'rish
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-teal-600" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{score}/{lesson.quiz.length}</h2>
                  <p className="text-gray-500 mb-8 text-lg">
                    {score === lesson.quiz.length 
                      ? "Ajoyib! Mavzuni to'liq o'zlashtirdingiz." 
                      : "Yaxshi natija. Xatolarni tahlil qilib, qayta urinib ko'ring."}
                  </p>
                  
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-2 mx-auto text-teal-700 hover:text-teal-900 font-bold bg-teal-50 px-4 md:px-6 py-3 rounded-full transition-colors"
                  >
                    <RefreshCw size={18} /> Qayta ishlash
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
