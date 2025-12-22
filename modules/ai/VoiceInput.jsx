import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

export const VoiceInput = ({ onTranscript, isProcessing }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      // @ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.lang = 'uz-UZ';
      recog.interimResults = false;

      recog.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onTranscript(transcript);
        setIsListening(false);
      };

      recog.onerror = (event) => {
        console.error("Speech Error", event);
        setIsListening(false);
      };

      recog.onend = () => {
        setIsListening(false);
      };

      setRecognition(recog);
    }
  }, [onTranscript]);

  const toggleListen = () => {
    if (isProcessing) return;
    
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    } else {
      recognition?.start();
      setIsListening(true);
    }
  };

  if (!recognition) return null;

  return (
    <button
      onClick={toggleListen}
      disabled={isProcessing}
      className={`p-2 rounded-full transition-all duration-300 ${
        isListening 
          ? 'bg-red-500/20 text-red-500 animate-pulse' 
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      }`}
      title="Ovozli yozish"
    >
      {isListening ? <MicOff size={20} /> : <Mic size={20} />}
    </button>
  );
};