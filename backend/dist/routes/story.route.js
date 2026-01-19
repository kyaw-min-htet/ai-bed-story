import express from 'express';
import { validateStoryRequest, validateTranslateRequest } from '../utils/validator.js';
import { PromptService } from '../services/prompt.service.js';
import { AIService } from '../services/ai.service.js';
import { TTSService } from '../services/tts.service.js';
const router = express.Router();
const aiService = new AIService();
const ttsService = new TTSService();
// Generate a new story
router.post('/generate', async (req, res) => {
    try {
        // Validate request
        const validatedData = validateStoryRequest(req.body);
        // Build prompt
        const prompt = PromptService.buildStoryPrompt(validatedData);
        // Generate story using AI
        const story = await aiService.generateStory(prompt);
        // Return response
        res.json({
            success: true,
            data: {
                story,
                metadata: {
                    childName: validatedData.childName,
                    age: validatedData.age,
                    theme: validatedData.theme,
                    length: validatedData.length,
                    generatedAt: new Date().toISOString()
                }
            }
        });
    }
    catch (error) {
        console.error('Story generation error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});
// Translate story to Burmese
router.post('/translate', async (req, res) => {
    try {
        const validatedData = validateTranslateRequest(req.body);
        // Build translation prompt
        const prompt = PromptService.buildTranslationPrompt(validatedData.text);
        // Translate using AI
        const translation = await aiService.generateStory(prompt);
        // Return response
        res.json({
            success: true,
            translation
        });
    }
    catch (error) {
        console.error('Translation error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});
// Get available voices for TTS
router.get('/voices', (_req, res) => {
    const voices = ttsService.getSupportedVoices();
    res.json({ success: true, data: voices });
});
// Convert story to speech (future feature)
router.post('/tts', async (req, res) => {
    try {
        const { text, voiceId } = req.body;
        const result = await ttsService.convertToSpeech(text, { voiceId });
        res.json({ success: true, data: result });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
export default router;
//# sourceMappingURL=story.route.js.map