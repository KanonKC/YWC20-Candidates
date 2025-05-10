import config from "@/config";
import { MotivatedPlaceholder, MotivatedPrompt } from "@/constants/GeminiPrompt";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(config.googleApiKey as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Set temperature to 0.0 to get deterministic results

export async function getMotivatedText() {
    try {

        const { response } = await model.generateContent(MotivatedPrompt);
        return response.text();
    } catch (error) {
        console.error(error);
        return MotivatedPlaceholder;
    }
}