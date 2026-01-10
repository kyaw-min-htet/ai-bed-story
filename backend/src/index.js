import dotenv from 'dotenv';

// Load environment variables FIRST before any other imports
dotenv.config();

import express from 'express';
import cors from 'cors';
import storyRouter from './routes/story.route.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Bedtime Story API is running' });
});

// AI Service health check
app.get('/health/ai', async (req, res) => {
    try {
        const { AIService } = await import('./services/ai.service.js');
        const aiService = new AIService();
        const health = await aiService.checkHealth();
        res.json(health);
    } catch (error) {
        res.status(500).json({ running: false, error: error.message });
    }
});

// Routes
app.use('/api/story', storyRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
