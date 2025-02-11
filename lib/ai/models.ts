import { createGroq } from '@ai-sdk/groq';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY
})

export const DEFAULT_CHAT_MODEL: string = 'mantrika-model-reasoning';

export const myProvider = customProvider({
  languageModels: {
    'mantrika-model-small': wrapLanguageModel({
      model: groq('llama-3.1-8b-instant'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'mantrika-model-large': wrapLanguageModel({
      model: groq('llama-3.3-70b-versatile'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'mantrika-model-reasoning': wrapLanguageModel({
      model: groq('deepseek-r1-distill-llama-70b'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': wrapLanguageModel({
      model: groq('gemma2-9b-it'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'block-model': wrapLanguageModel({
      model: groq('llama3-70b-8192'),
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
    description: 'Small Model For Small Tasks',
  },
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
