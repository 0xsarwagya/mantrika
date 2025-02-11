import { createGroq } from '@ai-sdk/groq';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY
})

export const DEFAULT_CHAT_MODEL: string = 'chat-model-reasoning';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': groq('llama-3.1-8b-instant'),
    'chat-model-large': groq('llama-3.3-70b-versatile'),
    'chat-model-reasoning': wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'block-model': wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
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
    id: 'mantrika-model-small',
    name: 'Mantrika Small model',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'mantrika-model-large',
    name: 'Mantrika Large model',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'mantrika-model-reasoning',
    name: 'Mantrika Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
