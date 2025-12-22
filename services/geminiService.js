
import { GoogleGenAI, Modality, Type } from "@google/genai";

// Xavfsiz ishga tushirish
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let ai = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } catch (error) {
    console.error("Gemini Client Init Error:", error);
  }
} else {
  console.warn("DIQQAT: VITE_GEMINI_API_KEY topilmadi! .env.local faylini tekshiring va terminalni qayta ishga tushiring.");
}

// System Instruction for Biology Teacher Persona
const BIO_TEACHER_INSTRUCTION = `
Siz EduBio AI, 5-11 sinf o'quvchilari uchun do'stona va aqlli biologiya o'qituvchisisiz.

**MULOQOT USLUBINGIZ (Juda muhim):**
Vaziyatga qarab ohangni o'zgartiring:

1. **ODDIY SUHBAT (Salomlashish, shaxsiy savollar, hazillar):**
   - Juda tabiiy, samimiy va insoniylarcha gapiring.
   - "Robot" kabi rasmiy bo'lmang.
   - Ilmiy atamalarni va maxsus formatlashni (yulduzcha, qavslar) ISHLATMANG.
   - Misol: "Salom! Yaxshimisiz? Bugun qanday qiziqarli narsalarni o'rganamiz?" yoki "Rahmat, o'zim ham yaxshiman. Savolingiz bormi?"

2. **BIOLOGIYA VA FAN (Dars jarayoni, atamalar, rasmlar tahlili):**
   - Professional o'qituvchiga aylaning.
   - Javob aniq, ilmiy va qiziqarli bo'lsin.
   - Quyidagi **FORMATLASH QOIDALARINI** faqat shu paytda ishlating:

**FORMATLASH QOIDALARI (Faqat dars paytida):**
- **Biologik atamalar** uchun ikki tomonlama yulduzcha: **Fotosintez**, **Xlorofill**. (Yashil rang uchun).
- **Muhim faktlar/raqamlar** uchun to'rtburchak qavs: [[6 marta]], [[juda muhim]]. (Sariq rang uchun).
- **Lotincha nomlar/olimlar** uchun oddiy qavs ichida qo'sh qavs: ((Homo Sapiens)), ((Darwin)). (Binafsha rang uchun).

**MAQSAD:** O'quvchi bilan do'st bo'ling, lekin fan haqida gap ketganda eng zo'r ustoz bo'ling.
`;

// Text & Multimodal Chat (Images, PDFs, Docs)
export const generateBioResponse = async (prompt, attachment) => {
  if (!ai) {
    return "Xatolik: API Kalit topilmadi. Iltimos dasturchiga murojaat qiling (.env.local faylini tekshiring).";
  }
  
  try {
    const model = 'gemini-2.5-flash'; 
    
    const contentParts = [];
    
    if (attachment) {
      contentParts.push({ inlineData: attachment });
    }
    
    const textPrompt = prompt.trim() === '' ? "Ushbu faylni tahlil qilib, mazmunini tushuntirib bering." : prompt;
    contentParts.push({ text: textPrompt });

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: contentParts },
      config: {
        systemInstruction: BIO_TEACHER_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Kechirasiz, javobni shakllantira olmadim.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Xatolik yuz berdi. Internetni tekshiring yoki API kalitni yangilang.";
  }
};

// Image Generation
export const generateBioImage = async (prompt) => {
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Generate a scientific illustration for biology education: ${prompt}` }]
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};

// Text-to-Speech (TTS)
export const generateSpeech = async (text) => {
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
    return null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};
