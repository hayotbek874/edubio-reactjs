import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
}

export const generateBioResponse = async (prompt, filePart, history, language) => {
  if (!genAI) {
      throw new Error("API Kalit kiritilmagan. .env faylini tekshiring.");
  }

  try {
    // Eng oddiy va ishonchli modelni chaqiramiz
    // Parametrlarsiz (System Instruction va Safety Settingssiz)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let result;
    if (filePart) {
        const promptParts = [prompt, {
            inlineData: {
                data: filePart.data,
                mimeType: filePart.mimeType
            }
        }];
        result = await model.generateContent(promptParts);
    } else {
        // Chat tarixini ham vaqtincha o'chirib turamiz, oddiy prompt yuboramiz
        // Bu tarix formatlashdagi xatoliklarni oldini oladi
        result = await model.generateContent(prompt);
    }

    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Gemini Simple Test Error:", error);
    
    if (error.message.includes("404") || error.message.includes("not found")) {
        throw new Error(`Model topilmadi (404). Bu odatda API Kalit bilan bog'liq muammo. 
        Iltimos:
        1. https://aistudio.google.com/app/apikey saytiga kiring.
        2. Yangi API Key yarating.
        3. .env.local faylida kalitni yangilang.
        4. Loyihani o'chirib qayta yoqing.`);
    }
    
    throw error;
  }
};

export const generateBioImage = async (prompt) => { return null; };
export const generateSpeech = async (text) => { return null; };
