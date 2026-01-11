import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

interface HealthCheckResult {
  running: boolean;
  model?: string;
  service?: string;
  error?: string;
}

export class AIService {
  private genAI: GoogleGenerativeAI;
  private modelName: string;
  private model: GenerativeModel;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('⚠️ GEMINI_API_KEY is not set in .env file!');
    }

    this.genAI = new GoogleGenerativeAI(apiKey || '');
    this.modelName = 'gemini-2.5-flash';
    this.model = this.genAI.getGenerativeModel({ model: this.modelName });

    console.log(`🤖 Initializing Gemini AI`);
    console.log(`   Model: ${this.modelName}`);
  }

  async generateStory(prompt: string): Promise<string> {
    try {
      console.log(`📝 Generating story with ${this.modelName}...`);
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      if (!text || text.trim().length === 0) {
        throw new Error('AI generated empty response');
      }
      
      console.log(`✅ Story generated successfully (${text.length} chars)`);
      return text;
    } catch (error) {
      console.error('❌ AI Service Error:', (error as Error).message);
      throw new Error(`Failed to generate story: ${(error as Error).message}`);
    }
  }

  async checkHealth(): Promise<HealthCheckResult> {
    try {
      // Simple health check by trying to get model info or just verifying the client exists
      if (!process.env.GEMINI_API_KEY) {
         return {
          running: false,
          error: 'GEMINI_API_KEY is missing in .env file',
        };
      }

      // We can try a minimal generation to verify connectivity
      // But to save quota, we'll assume if we have a key and can init the model, we are good.
      // Or we can try to list models if verify API key is needed, but available models list
      // is usually a better check.

      // Let's just return healthy if key is present for now to avoid latency/cost on health check
      return {
        running: true,
        model: this.modelName,
        service: 'Google Gemini AI'
      };
    } catch (error) {
      return {
        running: false,
        error: (error as Error).message,
      };
    }
  }

  async generateImage(storyTitle: string): Promise<null> {
    // Placeholder for future image generation
    return null;
  }
}
