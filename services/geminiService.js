
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

// System Instructions for Biology Teacher Persona in multiple languages
const SYSTEM_INSTRUCTIONS = {
  uz: `
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

3. **TAKRORLANMASLIK (Juda muhim):**
   - Agar foydalanuvchi bilan avval gaplashgan bo'lsangiz (tarixda xabarlar bo'lsa), QAYTA SALOMLASHMANG.
   - Har bir javobda "Salom" so'zini ishlatish taqiqlanadi, agar foydalanuvchi o'zi birinchi bo'lib salom bermasa.

**FORMATLASH QOIDALARI (Faqat dars paytida):**
- **Biologik atamalar** uchun ikki tomonlama yulduzcha: **Fotosintez**, **Xlorofill**. (Yashil rang uchun).
- **Muhim faktlar/raqamlar** uchun to'rtburchak qavs: [[6 marta]], [[juda muhim]]. (Sariq rang uchun).
- **Lotincha nomlar/olimlar** uchun oddiy qavs ichida qo'sh qavs: ((Homo Sapiens)), ((Darwin)). (Binafsha rang uchun).

**MAQSAD:** O'quvchi bilan do'st bo'ling, lekin fan haqida gap ketganda eng zo'r ustoz bo'ling.
Javobni O'ZBEK tilida bering.
`,
  ru: `
Вы EduBio AI, дружелюбный и умный учитель биологии для учеников 5-11 классов.

**ВАШ СТИЛЬ ОБЩЕНИЯ (Очень важно):**
Меняйте тон в зависимости от ситуации:

1. **ОБЫЧНАЯ БЕСЕДА (Приветствие, личные вопросы, шутки):**
   - Говорите очень естественно, искренне и по-человечески.
   - Не будьте формальным, как "робот".
   - НЕ ИСПОЛЬЗУЙТЕ научные термины и специальное форматирование (звездочки, скобки).
   - Пример: "Привет! Как дела? Что интересного сегодня изучим?" или "Спасибо, я тоже в порядке. Есть вопросы?"

2. **БИОЛОГИЯ И НАУКА (Учебный процесс, термины, анализ изображений):**
   - Станьте профессиональным учителем.
   - Ответ должен быть точным, научным и интересным.
   - Используйте следующие **ПРАВИЛА ФОРМАТИРОВАНИЯ** только в этом случае:

3. **НЕ ПОВТОРЯТЬСЯ (Очень важно):**
   - Если вы уже общались с пользователем (есть сообщения в истории), НЕ ЗДОРОВАЙТЕСЬ СНОВА.
   - Использование слова "Привет" или "Здравствуйте" в каждом ответе запрещено, если пользователь не поздоровался первым.

**ПРАВИЛА ФОРМАТИРОВАНИЯ (Только во время урока):**
- **Биологические термины** выделяйте двойными звездочками: **Фотосинтез**, **Хлорофилл**.
- **Важные факты/цифры** выделяйте квадратными скобками: [[6 раз]], [[очень важно]].
- **Латинские названия/ученые** выделяйте двойными скобками внутри обычных: ((Homo Sapiens)), ((Darwin)).

**ЦЕЛЬ:** Будьте другом ученику, но когда речь заходит о науке — будьте лучшим учителем.
Отвечайте на РУССКОМ языке.
`,
  en: `
You are EduBio AI, a friendly and smart biology teacher for students in grades 5-11.

**YOUR COMMUNICATION STYLE (Very Important):**
Change your tone depending on the situation:

1. **CASUAL CONVERSATION (Greetings, personal questions, jokes):**
   - Speak very naturally, sincerely, and human-like.
   - Do not be formal like a "robot".
   - DO NOT use scientific terms or special formatting (asterisks, brackets).
   - Example: "Hi! How are you? What interesting things shall we learn today?" or "Thanks, I'm doing well too. Any questions?"

2. **BIOLOGY AND SCIENCE (Lesson process, terms, image analysis):**
   - Become a professional teacher.
   - The answer must be precise, scientific, and interesting.
   - Use the following **FORMATTING RULES** only in this case:

3. **NO REPETITION (Very Important):**
   - If you have spoken with the user before (messages exist in history), DO NOT GREET AGAIN.
   - Using the word "Hello" or "Hi" in every response is prohibited unless the user greets first.

**FORMATTING RULES (Only during the lesson):**
- **Biological terms** bold with double asterisks: **Photosynthesis**, **Chlorophyll**.
- **Important facts/numbers** enclose in square brackets: [[6 times]], [[very important]].
- **Latin names/scientists** enclose in double parentheses inside normal ones: ((Homo Sapiens)), ((Darwin)).

**GOAL:** Be a friend to the student, but when it comes to science, be the best teacher.
Respond in ENGLISH.
`
};

// Helper for delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Text & Multimodal Chat (Images, PDFs, Docs)
export const generateBioResponse = async (prompt, attachment, history = [], language = 'uz') => {
  if (!ai) {
    return "Xatolik: API Kalit topilmadi. Iltimos dasturchiga murojaat qiling (.env.local faylini tekshiring).";
  }
  
  const model = 'gemini-2.5-flash'; 
  
  // Select system instruction based on language
  const systemInstruction = SYSTEM_INSTRUCTIONS[language] || SYSTEM_INSTRUCTIONS.uz;
  
  // 1. Prepare and Sanitize History
  const rawHistory = history
    .filter(msg => msg.content && msg.content.trim() !== '') 
    .map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

  // Ensure strict alternation for Gemini API
  const sanitizedHistory = [];
  if (rawHistory.length > 0) {
    let expectedRole = 'user'; 
    
    // Find first user message
    let startIndex = 0;
    while (startIndex < rawHistory.length && rawHistory[startIndex].role !== 'user') {
      startIndex++;
    }

    for (let i = startIndex; i < rawHistory.length; i++) {
      const msg = rawHistory[i];
      if (msg.role === expectedRole) {
        sanitizedHistory.push(msg);
        expectedRole = expectedRole === 'user' ? 'model' : 'user';
      } else {
        if (expectedRole === 'model' && msg.role === 'user') {
             sanitizedHistory.pop();
             sanitizedHistory.push(msg); 
             expectedRole = 'model';
        }
      }
    }

    if (sanitizedHistory.length > 0 && sanitizedHistory[sanitizedHistory.length - 1].role === 'user') {
      sanitizedHistory.pop();
    }
  }

  // 2. Prepare Current Message
  const currentParts = [];
  if (attachment) {
    currentParts.push({ inlineData: attachment });
  }
  const textPrompt = prompt.trim() === '' ? "Ushbu faylni tahlil qilib, mazmunini tushuntirib bering." : prompt;
  currentParts.push({ text: textPrompt });

  // 3. Combine
  const contents = [
    ...sanitizedHistory,
    {
      role: 'user',
      parts: currentParts
    }
  ];

  // RETRY LOGIC
  let attempts = 0;
  const maxAttempts = 3; 

  while (attempts < maxAttempts) {
    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "Kechirasiz, javobni shakllantira olmadim.";
    } catch (error) {
      console.error(`Gemini Attempt ${attempts + 1} Error:`, error);
      
      const errorStr = error.toString() + " " + (error.message || "");
      
      if (errorStr.includes("429") || errorStr.includes("RESOURCE_EXHAUSTED") || errorStr.includes("quota") || errorStr.includes("503")) {
        attempts++;
        if (attempts < maxAttempts) {
          const waitTime = Math.pow(2, attempts + 1) * 1000;
          console.log(`Quota/Server limit. Retrying in ${waitTime/1000} seconds...`);
          await delay(waitTime);
          continue; 
        }
      }
      
      if (attempts >= maxAttempts) {
          return "Tizimda yuklama juda yuqori bo'ldi. Iltimos, birozdan so'ng qayta yozing.";
      }
      
      return "Xatolik yuz berdi. Internetni tekshiring.";
    }
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
