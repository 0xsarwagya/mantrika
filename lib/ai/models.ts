import { createGroq } from '@ai-sdk/groq';
import { createOllama } from "ollama-ai-provider"
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY
});

export const DEFAULT_CHAT_MODEL: string = 'mantrika-model-large';

export const myProvider = customProvider({
  languageModels: {
    'mantrika-model-large': wrapLanguageModel({
      model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'mantrika-model-reasoning': wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': wrapLanguageModel({
      model: groq('llama-3.3-70b-versatile'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'block-model': wrapLanguageModel({
      model: groq('gemma2-9b-it'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'mantrika-model-large',
    name: 'Mantrika Large model',
    description: 'Large Model For Large Tasks',
  },
  {
    id: 'mantrika-model-reasoning',
    name: 'Mantrika Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
