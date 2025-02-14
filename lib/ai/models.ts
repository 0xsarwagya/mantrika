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

export const ollama = createOllama({
  baseURL: "http://ollama.0xsarwagya.codes/api"
});

export const DEFAULT_CHAT_MODEL: string = 'mantrika-model-small';

export const myProvider = customProvider({
  languageModels: {
    'mantrika-model-small': wrapLanguageModel({
      model: ollama("smollm2:360m"),
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
      model: ollama("smollm2:360m"),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'block-model': wrapLanguageModel({
      model: ollama("smollm2:360m"),
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
