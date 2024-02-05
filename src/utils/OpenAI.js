import OpenAI from 'openai';
import { OpenAiKey } from './constant';

export const openai = new OpenAI({
  apiKey: OpenAiKey
  , dangerouslyAllowBrowser: true 
});